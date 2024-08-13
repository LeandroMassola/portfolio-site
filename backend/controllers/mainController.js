const {validationResult} = require('express-validator')

module.exports = {
    getIndex: (req, res) => {
        res.render('main/home');
    },

    getAbout: (req, res) => {
        res.render('main/about')
    },

    getContact: (req, res) => {
        res.render('main/contact')
    },

    sendContact: (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.render('main/contact', {errors: errors.mapped()})
        } else {
            res.send('formulario enviado con éxito')
            res.redirect('main/home')
        }
    },

    getGallery: (req, res) => {
        res.render('main/gallery')
    }
}