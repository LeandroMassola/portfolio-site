const nodemailer = require('nodemailer');

const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'leandromassola.lm@gmail.com',
        pass: 'ssfl dlah qbco irmr ' // Usa variables de entorno en un entorno real
    }
});

const mailOptions = {
    from: 'leandromassola.lm@gmail.com',
    to: 'recipient@example.com',
    subject: 'Test Email',
    text: 'This is a test email from Nodemailer'
};

transport.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.error('Error al enviar el correo:', error);
    } else {
        console.log('Correo enviado:', info.response);
    }
});
