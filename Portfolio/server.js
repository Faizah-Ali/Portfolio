// server.js
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.post('/submit-form', async (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body;

  try {
    let transporter = nodemailer.createTransport({
      service: 'Gmail', // or another email service
      auth: {
        user: 'your-email@gmail.com', // your email
        pass: 'your-email-password'   // your email password or app password
      }
    });

    let mailOptions = {
      from: 'your-email@gmail.com',
      to: 'your-email@gmail.com', // where you want to receive the form submissions
      subject: 'New Contact Form Submission',
      text: `
        Name: ${firstName} ${lastName}
        Email: ${email}
        Phone: ${phone}
        Message: ${message}
      `
    };

    await transporter.sendMail(mailOptions);
    res.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    res.json({ success: false });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
