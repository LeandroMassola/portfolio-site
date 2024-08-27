import { useEffect } from 'react'
import styles from '../assets/css/success.module.css'
import {motion} from 'framer-motion'

export default function Success({setIsContentVisible}) {

    useEffect(()=> {
        setIsContentVisible(true)
    })
    
    return(
        <div className={styles.contSuccess}>
            <h1 className={styles.title}>Your message has sent succesfully!!!</h1>
            <p className={styles.text}>Thank you for reaching out to us. Your message has been sent, and we will get back to you as soon as possible. Please check your inbox for a confirmation email. If you don't see it, be sure to check your spam or junk folder.
            In the meantime, feel free to continue exploring our website.</p>
            <motion.a className={styles.linkToHome} style={{
                color: 'black',
                backgroundColor: 'white',
                border: 'none'
            }}
            whileHover={{
                color: 'white',
                backgroundColor: 'rgb(0,0,0, 0.76)',
                border: 'solid white 0.2rem',
                boxShadow: 'white 0rem 0rem 0.8rem',
                transition:{
                        duration: 0.5,
                        ease: 'easeInOut'
                    }
            }} whileTap={{ scale: 0.9 }}>
                Go Back!
            </motion.a>
        </div>
    )
}


