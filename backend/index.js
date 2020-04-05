const express = require('express')
const cors = require('cors')
const nodemailer = require('nodemailer')
require('dotenv')

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.email,
    pass: process.env.password
  }
})

const app = express();
const port = process.env.port || 3002;

app.use(express.json({ limit: '1mb'}))
app.use(
  cors({
    origin: process.env.allow_origin || '*'
  })
)

app.post('/send', (res) => {
  console.log(res.body);

  const mailOptions = {
    from: res.body.email,
    to: process.env.email,
    subject: res.body.subject,
    html: res.body.message
  }
  
  transporter.sendMail(mailOptions, (error, info) => {
    if (error)
      console.log(error)
    else
      console.log(info);
  })
})



app.listen(port, () => {
  console.log(`Server listening at ${port}`);
})