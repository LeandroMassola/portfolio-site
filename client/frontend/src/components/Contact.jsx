/* import('../assets/css/contact.css') */
import { useEffect } from 'react'
import styles from '../assets/css/contact.module.css'
import {motion} from 'framer-motion'
export default function Contact({setIsContentVisible}) {

    useEffect(()=> {
        setIsContentVisible(true)

    }, [])

    return (
        <div className={styles.main}>
            <hr className={styles.hrTop}/>
                <h2 className={styles.title}>Let's Talk!</h2>
                <hr className={styles.hrBottom}/>
                    <form id="form-contact" className={styles.form} action="/contact" method="POST">
                        <div className={styles.contInputs}>
                            <label className={styles.labels} htmlFor="name">Name:</label>
                            <input id="name" name="name" type="text" placeholder="Your name" className={styles.inputs}/>
                                {/* <span id="error-message-name" className="feedback__contact">The name must have at least 2 characters</span> */}

                                {/* <% if (locals.errors && errors.name){ %>
                    <p className="feedback"><%=errors.name.msg%></p>
                <% } %> */}

                                <label className={styles.labels} htmlFor="last-name">Last Name:</label>
                                <input id="last-name" name="lastName" placeholder="Your last name" type="text" className={styles.inputs}/>
                                    {/* <span id="error-message-last-name" className="feedback__contact">The last name must have at least 2 characters</span> */}

                                    {/* <% if (locals.errors && errors.lastName){ %>
                    <p className="feedback"><%=errors.lastName.msg%></p>
                <% } %> */}

                                    <label className={styles.labels} htmlFor="email">Email:</label>
                                    <input id="email" name="email" type="email" placeholder="Your email" className={styles.inputs}/>
                                        {/* <span id="error-message-email" className="feedback__contact">The email must be an existing email</span>
 */}
                                        {/* <% if (locals.errors && errors.email){ %>
                    <p className="feedback"><%=errors.email.msg%></p>
                <% } %>
 */}
                                        <label className={styles.labels} htmlFor="subject">Subject:</label>
                                        <input id="subject" name="subject" type="text" placeholder="Subject" className={styles.inputs}/>

                                            <label className={styles.labels} htmlFor="message">Message:</label>
                                            <textarea id="message" name="message" type="text" placeholder="Your message here..." className={styles.inputs}></textarea>
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
                                                    whileTap={{ scale: 0.9 }} id="submit-btn" className={styles.btnSubmit} type="submit">Send
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