module.exports = {
    getIndex: (req, res) => {
        res.render('main/home');
    },

    getAbout: (req, res) => {
        res.render('main/about')
    },

    getContact: (req, res) => {
        res.render('main/contact')
    }
}