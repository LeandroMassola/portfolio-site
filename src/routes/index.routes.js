const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');
const validateForm = require('../middelwares/validations/formValidation');

router.post('/send-email', validateForm, mainController.sendEmail);


module.exports = router;