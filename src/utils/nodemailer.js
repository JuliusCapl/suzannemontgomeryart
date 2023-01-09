import nodemailer from 'nodemailer'

const email = process.env.EMAIL
const pass = process.env.EMAIL_PASS
const myEmail = process.env.MY_EMAIL
export const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: email,
        pass,
    }
})
export const mailOptions = {
    from: email,
    to: myEmail,
}