const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve static files
app.use(express.static('public'));

// Handle form submission
app.post('/send-email', (req, res) => {
    const { name, email, mobile, subject, message } = req.body;

    // Create a transporter object
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'sachinkc4456@gmail.com', // Replace with your Gmail address
            pass: 'wuqq bswz avag toor', // Replace with your Gmail password or app password
        },
    });

    // Email options
    let mailOptions = {
        from: email,
        to: 'sachinkc4456@gmail.com', // Your email address
        subject: subject,
        text: `Name: ${name}\nEmail: ${email}\nMobile: ${mobile}\n\nMessage:\n${message}`,
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            return res.status(500).send('An error occurred while sending the email.');
        }
        console.log('Email sent: ' + info.response);
        res.status(200).send('Your message has been sent successfully!');
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
