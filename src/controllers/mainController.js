const {validationResult} = require('express-validator')
const nodemailer = require('nodemailer');

module.exports = {
    sendEmail: (req, res)=> {

        const errors = validationResult(req);

        if(!errors.isEmpty()) {
            return  res.status(400).json({errors: errors.array()})
        }

        const transport = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'leandromassola.lm@gmail.com',
                pass: 'ssfl dlah qbco irmr '
            }
        })
        
        const mailOptions = {
            from: req.body.email,
            to: 'leandromassola.lm@gmail.com',
            subject: `Mensaje de ${req.body.name} ${req.body.lastName}`,
            text: req.body.message
        }

        transport.sendMail(mailOptions, (error, info)=> {
            if(error) {
                return res.status(500).json({errorMessage: error});
            }
            res.status(200).json('The message has sent succesfully')
        })
    }
}