/* import('../assets/css/contact.css') */
import { useEffect, useState } from 'react'
import styles from '../assets/css/contact.module.css'
import {motion} from 'framer-motion'
import { redirect, useNavigate } from 'react-router-dom'


export default function Contact({setIsContentVisible}) {

    useEffect(()=> {
        setIsContentVisible(true)
    }, [])

    const [inputData, setInputData] = useState({
        name: '',
        email: '',
        message: '',
        lastName: '',
        subject: ''
    });
    
    const [errors, setErrors] = useState({});

    function handleChange(e) {
        const { name, value } = e.target;
    
        // Actualiza el valor del campo en el estado
        setInputData(prevData => ({
            ...prevData,
            [name]: value
        }));
    
        // Valida el campo mientras el usuario escribe
        validateField(name, value);
    }
    

    function handleBlur(e) {
        const { name, value } = e.target;
    
        // Valida el campo cuando pierde el foco
        validateField(name, value);
    }
    
    
    function handleFocus(e) {
        const { name } = e.target;
    
        // Limpia los errores cuando el usuario hace foco en el campo
        setErrors(prevErrors => ({
            ...prevErrors,
            [name]: ''
        }));
    }
    
    function validateField(name, value) {
        let fieldErrors = {};
    
        switch (name) {
            case 'name':
                if (value.trim().length < 2) {
                    fieldErrors[name] = 'Name must have more than 2 characters';
                }
                break;
            case 'lastName':
                if (value.trim().length < 2) {
                    fieldErrors[name] = 'Last name must have more than 2 characters';
                }
                break;
            case 'email':
                if (!/\S+@\S+\.\S+/.test(value)) {
                    fieldErrors[name] = 'Please provide a valid email';
                }
                break;
            case 'message':
                if (value.trim().length < 10) {
                    fieldErrors[name] = 'Message must be at least 10 characters long';
                }
                break;
            default:
                break;
        }
    
        // Si no hay errores, me aseguro de eliminar cualquier error previo
        if (!Object.keys(fieldErrors).length) {
            setErrors(prevErrors => {
                const { [name]: omitted, ...rest } = prevErrors;
                return rest;
            });
        } else {
            // Si hay errores, actualizarlos en el estado
            setErrors(prevErrors => ({
                ...prevErrors,
                ...fieldErrors
            }));
        }
    }
    

        const navigate = useNavigate()

        const handleSubmit = async (e) => {
            e.preventDefault();
            // Valida todo el formulario antes de enviarlo
            Object.keys(inputData).forEach((field) => {
                validateField(field, inputData[field]);
            });

        
            const isValid = Object.keys(errors).length === 0;
        
            if (isValid) {
                console.log('Form is valid! Submitting data...', inputData);
                // Lógica para enviar el formulario
                try {
                    const response = await fetch('http://localhost:5000/send-email', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(inputData),
                    });

                    const contentType = response.headers.get('Content-Type');
                    let data;

                    console.log(response);
                    

                    if (contentType && contentType.includes('application/json')) {
                        data = await response.json(); // Si la respuesta es JSON, la parseamos
                    } else {
                        // Si no es JSON, puede ser un mensaje de error en texto plano u otro tipo de respuesta
                        const text = await response.text();
                        throw new Error(`Unexpected response format: ${text}`);
                    }
        
                    if (response.ok) {
                        console.log('Success', data.message);
                        setInputData({name: '', lastName:'', email:'', subject: '', message: ''})
                        setErrors({})
                        console.log(navigate)
                    } else {
                        const backEndErrors = {};
                        data.errors.forEach(error => {
                            backEndErrors[error.param] = error.msg;
                        })
                        setErrors(backEndErrors)
                        console.log(backEndErrors);
                    }    
                } catch (err) {
                    console.log(err);
                }
                navigate('/success')

            } else {
                console.log('Form is invalid!', errors);
            }
            
        };
    

    return (
        <div className={styles.main}>
            <hr className={styles.hrTop}/>
                <h2 className={styles.title}>Let's Talk!</h2>
                <hr className={styles.hrBottom}/>
                    <form id="form-contact" className={styles.form} action="http://localhost:5000/send-email" method="POST" onSubmit={handleSubmit}>
                        <div className={styles.contInputs}>
                            <label className={styles.labels} htmlFor="name">Name:</label>
                            <input id="name" name="name" type="text" onChange={handleChange} onBlur={handleBlur} onFocus={handleFocus} placeholder="Your name" className={styles.inputs}/>
                            {errors.name && <span className={styles.feedbackErrors}>{errors.name}</span>}
                                {/* <span id="error-message-name" className="feedback__contact">The name must have at least 2 characters</span> */}

                                {/* <% if (locals.errors && errors.name){ %>
                    <p className="feedback"><%=errors.name.msg%></p>
                <% } %> */}

                                <label className={styles.labels} htmlFor="last-name">Last Name:</label>
                                <input id="last-name" name="lastName" onChange={handleChange} onBlur={handleBlur} onFocus={handleFocus} placeholder="Your last name" type="text" className={styles.inputs}/>
                                
                                    {/* <span id="error-message-last-name" className="feedback__contact">The last name must have at least 2 characters</span> */}

                                    {/* <% if (locals.errors && errors.lastName){ %>
                    <p className="feedback"><%=errors.lastName.msg%></p>
                <% } %> */}

                                    <label className={styles.labels} htmlFor="email">Email:</label>
                                    <input id="email" name="email" type="email" onChange={handleChange} onBlur={handleBlur} onFocus={handleFocus} placeholder="Your email" className={styles.inputs}/>
                                    {errors.email && <span className={styles.feedbackErrors}>{errors.email}</span>}

                                        {/* <span id="error-message-email" className="feedback__contact">The email must be an existing email</span>
 */}
                                        {/* <% if (locals.errors && errors.email){ %>
                    <p className="feedback"><%=errors.email.msg%></p>
                <% } %>
 */}
                                        <label className={styles.labels} htmlFor="subject">Subject:</label>
                                        <input id="subject" name="subject" type="text" placeholder="Subject" className={styles.inputs}/>

                                        <label className={styles.labels} htmlFor="message" >Message:</label>
                                        <textarea id="message" name="message" type="text" placeholder="Your message here..." className={styles.inputs} onChange={handleChange} onBlur={handleBlur} onFocus={handleFocus}></textarea>
                                        {errors.message && <span className={styles.feedbackErrors}>{errors.message}</span>}

                                        {/* <span id="error-message-textarea" className="feedback__contact">The message must to have at least 10 characters</span> */}

                                        {/* <% if (locals.errors && errors.message){ %>
                    <p className="feedback"><%=errors.message.msg%></p>
                <% } %> */}
                                            <div className={styles.contBtns}>
                                                <motion.button 
                                                    whileHover={{
                                                        color: 'black',
                                                        backgroundColor: 'rgba(255, 255, 255, 0.76)',
                                                        borderColor: 'white',
                                                        boxShadow: 'white 0rem 0rem 0.8rem',
                                                        transition:{
                                                            duration: 0.2,
                                                            ease: 'easeInOut'
                                                        }
                                                    }} 
                                                    whileTap={{ scale: 0.9 }} id="submit-btn" className={styles.btnSubmit} type="submit" >Send
                                                </motion.button>

                                                <motion.button 
                                                    whileHover={{
                                                        color: 'black',
                                                        backgroundColor: 'rgba(255, 255, 255, 0.76)',
                                                        borderColor: 'white',
                                                        boxShadow: 'white 0rem 0rem 0.8rem',
                                                        transition:{
                                                            duration: 0.2,
                                                            ease: 'easeInOut'
                                                        }
                                                    }} 
                                                    whileTap={{ scale: 0.9 }} id="reset-btn" type='reset' className={styles.btnReset}>Clear
                                                </motion.button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                )
}