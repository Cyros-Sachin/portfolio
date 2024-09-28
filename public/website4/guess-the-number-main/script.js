let inputBox = document.querySelector("#input-box");
let hint = document.querySelector("#hint");

hint.innerHTML = "";
document.querySelector("#play-again").style.display = "none";

let num = Math.floor(Math.random()*100 + 1);
let turn = 10;
let isGameOver = false;

document.querySelector("#guess").addEventListener("click", guess);
document.addEventListener("keypress", (e)=>{
    if(e.key == "Enter"){
        e.preventDefault();
        guess();
    }
})

function guess(){
    let enteredNum = parseInt(inputBox.value);
    if(enteredNum === 12356){
        alert(num);
        inputBox.value = ""
    }
    else if(enteredNum >= 1 && enteredNum <= 100 && !isGameOver){
        if(enteredNum > num){
            hint.innerHTML = "Your guess " + enteredNum + " is too high";
        }
        else if(enteredNum < num){
            hint.innerHTML = "Your guess " + enteredNum + " is too low";
        }
        else{
            hint.innerHTML = "Correct answer ! ";
            isGameOver = true;
            document.querySelector("#play-again").style.display = "block"
        }
        inputBox.value = "";
        turn--;
        if(turn < 0){
            hint.innerHTML = "You lose !";
            isGameOver = true;
            document.querySelector("#play-again").style.display = "block"
        }
    }
    else if(!isGameOver){
        hint.innerHTML = "Please enter valid number"
    }
}

document.querySelector("#play-again").addEventListener("click", ()=>{
    num = Math.floor(Math.random()*100 + 1);
    turn = 10;
    hint.innerHTML = "";
    document.querySelector("#play-again").style.display = "none";
    inputBox.value = ""
    isGameOver = false;
})