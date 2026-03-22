'use client'

import { useEffect, useRef, useState } from 'react'
import { useScroll, useTransform } from 'framer-motion'

interface ScrollyCanvasProps {
  frameCount?: number
  height?: string
}

interface LoadingState {
  loading: boolean
  loaded: number
  total: number
  error: string | null
}

export default function ScrollyCanvas({ frameCount = 120, height = '500vh' }: ScrollyCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  const [loadingState, setLoadingState] = useState<LoadingState>({
    loading: true,
    loaded: 0,
    total: frameCount,
    error: null,
  })
  const imagesRef = useRef<Map<number, HTMLImageElement>>(new Map())
  const currentFrameRef = useRef<number>(0)

  // Preload images efficiently with caching and error handling
  useEffect(() => {
    let isMounted = true
    const imageMap = new Map<number, HTMLImageElement>()

    const loadImages = async () => {
      try {
        const loadPromises: Promise<void>[] = []

        for (let i = 0; i < frameCount; i++) {
          loadPromises.push(
            new Promise<void>((resolve) => {
              const img = new Image()
              img.crossOrigin = 'anonymous'

              // Production image sequence path: /sequences/frame_000_delay-0.066s.webp, etc.
              const frameNum = String(i).padStart(3, '0')
              img.src = `/sequences/frame_${frameNum}_delay-0.066s.webp`

              const onLoad = () => {
                if (isMounted) {
                  imageMap.set(i, img)
                  setLoadingState((prev) => ({
                    ...prev,
                    loaded: prev.loaded + 1,
                  }))
                }
                resolve()
              }

              const onError = () => {
                // Continue loading other frames even if one fails
                resolve()
              }

              img.addEventListener('load', onLoad, { once: true })
              img.addEventListener('error', onError, { once: true })

              // Timeout after 10 seconds per image
              const timeout = setTimeout(() => {
                img.removeEventListener('load', onLoad)
                img.removeEventListener('error', onError)
                resolve()
              }, 10000)

              // Trigger load
              const timer = setTimeout(() => {
                clearTimeout(timeout)
                onError()
              }, 15000)
            })
          )

          // Load in batches of 10 to avoid too many simultaneous requests
          if ((i + 1) % 10 === 0) {
            await Promise.all(loadPromises.splice(0, 10))
          }
        }

        // Load remaining images
        if (loadPromises.length > 0) {
          await Promise.all(loadPromises)
        }

        if (isMounted) {
          imagesRef.current = imageMap
          setLoadingState((prev) => ({
            ...prev,
            loading: false,
            error: imageMap.size === 0 ? 'No frames loaded. Check /sequence folder.' : null,
          }))
        }
      } catch (error) {
        if (isMounted) {
          setLoadingState((prev) => ({
            ...prev,
            loading: false,
            error: 'Error loading image sequence',
          }))
        }
      }
    }

    loadImages()

    return () => {
      isMounted = false
    }
  }, [frameCount])

  // Map scroll progress to frame index
  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, frameCount - 1])

  // Draw canvas
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d', { willReadFrequently: false })
    if (!ctx) return

    // Set canvas size to match viewport with device pixel ratio for crisp rendering
    const updateCanvasSize = () => {
      const dpr = window.devicePixelRatio || 1
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      ctx.scale(dpr, dpr)
      drawFrame(frameIndex.get(), true)
    }

    const drawFrame = (current: number, force = false) => {
      const frame = Math.round(current)

      // Skip if same frame
      if (!force && frame === currentFrameRef.current && imagesRef.current.has(frame)) {
        return
      }

      currentFrameRef.current = frame
      const img = imagesRef.current.get(frame)

      if (img && img.complete) {
        // Draw image
        ctx.drawImage(img, 0, 0, window.innerWidth, window.innerHeight)
      } else {
        // Fallback: clear with dark background
        ctx.fillStyle = '#121212'
        ctx.fillRect(0, 0, window.innerWidth, window.innerHeight)
      }
    }

    updateCanvasSize()
    window.addEventListener('resize', updateCanvasSize)

    // Subscribe to frame index changes
    const unsubscribe = frameIndex.on('change', (current: number) => {
      drawFrame(current)
    })

    // Force draw if loading state finishes (to ensure initial frame appears)
    if (!loadingState.loading) {
      drawFrame(frameIndex.get(), true)
    }

    return () => {
      window.removeEventListener('resize', updateCanvasSize)
      unsubscribe()
    }
  }, [frameIndex, loadingState.loading])

  return (
    <div ref={containerRef} style={{ height }} className="relative">
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#121212]">
        <canvas
          ref={canvasRef}
          className="w-full h-full"
          style={{ display: 'block' }}
        />
        {loadingState.loading && (
          <div className="absolute inset-0 flex items-center justify-center backdrop-blur-sm">
            <div className="text-center">
              <div className="w-12 h-12 border-2 border-white/20 border-t-white rounded-full animate-spin mx-auto mb-4" />
              <p className="text-white font-light">
                Loading sequence ({loadingState.loaded}/{loadingState.total})
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
