
let firstName = document.getElementById('name');
let lastName = document.getElementById('last-name');
let email = document.getElementById('email');
let subject = document.getElementById('subject');
let message = document.getElementById('message');
let submitBtn = document.getElementById('submit-btn')
let resetBtn = document.getElementById('reset-btn')
let form = document.getElementById('form-contact')

//Expresiones

const expresiones = {
    firstName: /^[a-zA-ZÀ-ÿ\s]{2,40}$/,
    lastName: /^[a-zA-ZÀ-ÿ\s]{2,40}$/,
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
};

const booleans = {
    firstName: false,
    lastName: false,
    email: false,
    message: false,
}

// First Name

firstName.addEventListener('focus', (e) => {
    let errorMessage = document.getElementById('error-message-name')
    if(!errorMessage.classList.contains('flash-feedback__contact') && e.target.value <= 1) {
        errorMessage.classList.remove('feedback__contact')
        errorMessage.classList.add('flash-feedback__contact')
    }
})

firstName.addEventListener('blur', () => {
    let errorMessage = document.getElementById('error-message-name')
    errorMessage.classList.remove('flash-feedback__contact')
    errorMessage.classList.add('feedback__contact')
})


firstName.addEventListener('input', (e) => {
    let errorMessage = document.getElementById('error-message-name')
    if(e.target.value.length <= 1  && !expresiones.firstName.test(e.target.value)) {
        errorMessage.classList.add('flash-feedback__contact')
        errorMessage.classList.remove('feedback__contact')
        
        booleans.firstName =  true
    } else {
        errorMessage.classList.add('feedback__contact')
        errorMessage.classList.remove('flash-feedback__contact')
        booleans.firstName =  false
    }
})


// Last Name

lastName.addEventListener('focus', (e) => {
    let errorMessage = document.getElementById('error-message-last-name')
    if(!errorMessage.classList.contains('flash-feedback__contact') && e.target.value <= 1) {
        errorMessage.classList.remove('feedback__contact')
        errorMessage.classList.add('flash-feedback__contact')
    }
})

lastName.addEventListener('blur', () => {
    let errorMessage = document.getElementById('error-message-last-name')
    errorMessage.classList.remove('flash-feedback__contact')
    errorMessage.classList.add('feedback__contact')
})


lastName.addEventListener('input', (e) => {
    let errorMessage = document.getElementById('error-message-last-name')
    if(e.target.value.length <= 1  && !expresiones.firstName.test(e.target.value)) {
        errorMessage.classList.add('flash-feedback__contact')
        errorMessage.classList.remove('feedback__contact')
        
        booleans.lastName =  true
    } else {
        errorMessage.classList.add('feedback__contact')
        errorMessage.classList.remove('flash-feedback__contact')
        booleans.lastName =  false
    }
})

// Email

email.addEventListener('focus', (e) => {
    let errorMessage = document.getElementById('error-message-email')
    if(!errorMessage.classList.contains('flash-feedback__contact') && e.target.value <= 1) {
        errorMessage.classList.remove('feedback__contact')
        errorMessage.classList.add('flash-feedback__contact')
    }
})

email.addEventListener('blur', () => {
    let errorMessage = document.getElementById('error-message-email')
    errorMessage.classList.remove('flash-feedback__contact')
    errorMessage.classList.add('feedback__contact')
})


email.addEventListener('input', (e) => {
    let errorMessage = document.getElementById('error-message-email')
    if(e.target.value.length >= 2  && expresiones.email.test(e.target.value)) {
        errorMessage.classList.add('feedback__contact')
        errorMessage.classList.remove('flash-feedback__contact')
        
        booleans.email =  true
    } else {
        errorMessage.classList.add('flash-feedback__contact')
        errorMessage.classList.remove('feedback__contact')
        booleans.email =  false
    }
})

// Message

message.addEventListener('focus', (e) => {
    let errorMessage = document.getElementById('error-message-textarea')
    if(!errorMessage.classList.contains('flash-feedback__contact') && e.target.value <= 1) {
        errorMessage.classList.remove('feedback__contact')
        errorMessage.classList.add('flash-feedback__contact')
    }
})

message.addEventListener('blur', () => {
    let errorMessage = document.getElementById('error-message-textarea')
    errorMessage.classList.remove('flash-feedback__contact')
    errorMessage.classList.add('feedback__contact')
})


message.addEventListener('input', (e) => {
    let errorMessage = document.getElementById('error-message-textarea')
    if(e.target.value.length <= 10) {
        errorMessage.classList.add('flash-feedback__contact')
        errorMessage.classList.remove('feedback__contact')
        
        booleans.message =  true
    } else {
        errorMessage.classList.add('feedback__contact')
        errorMessage.classList.remove('flash-feedback__contact')
        booleans.message =  false
    }
})


// Submit Button

submitBtn.addEventListener('submit', (e) => {
    e.preventDefault()
    if(!booleans.firstName && !booleans.lastName && !booleans.email && !booleans.message) {
        form.reset()
    }
})