import nodemailer from 'nodemailer'
import dotnev from 'dotenv'
dotnev.config


const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: process.env.EMAIL,
        pass: process.env.APP_PASSWORD,
    },
});


export default transporter