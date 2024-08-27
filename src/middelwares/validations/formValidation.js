const {check} = require('express-validator')

const validateForm = [
    check('name')
    .notEmpty().withMessage('Name is mandatory')
    .isLength({min:2}).withMessage('Name must have at least 2 characters'),
    check('lastName')
    .notEmpty().withMessage('Last name is mandatory')
    .isLength({min:2}).withMessage('Last name must have at least 2 characters'),
    check('email')
    .notEmpty().withMessage('Email is mandatory')
    .isEmail().withMessage('You have to insert a validate email'),
    check('message')
    .notEmpty().withMessage('Message is mandatory')
    .isLength({min:10}).withMessage('Message has to have at least 10 characters')
]

module.exports = validateForm