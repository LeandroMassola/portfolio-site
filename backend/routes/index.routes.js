const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');
const validateForm = require('../middelwares/validations/formValidation');

router.get('/', mainController.getIndex);
router.get('/about', mainController.getAbout)
router.get('/contact', mainController.getContact)
router.post('/contact', validateForm, mainController.sendContact)
router.get('/gallery', mainController.getGallery)


module.exports = router;