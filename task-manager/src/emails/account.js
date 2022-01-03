const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendwelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'joeeoj973@gmail.com',
        subject: 'Thanks For Sending Message',
        text: `Welcome to the task manager app ${name}. let me know how you get along with app.`
    })
}

const sendcancelEmail = (email , name) => {
    sgMail.send({
        to: email,
        from: 'joeeoj973@gmail.com',
        subject: 'Reason for deletion of Account',
        text: `Hello ${name} i have seen that you have removed your account , Please reply here why have you deleted your account.`
    })
}

module.exports = {
    sendwelcomeEmail,
    sendcancelEmail
}