/* import('../assets/css/home.css') */
import dibujoTaza from '/images/dibujo-taza-santi.jpg'
import dibujoMujer from '/images/dibujo-cara-mujer.jpg'
import { useEffect, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'
import Slider from 'react-slick'

export default function Home({setIsContentVisible}) {
    // Settings Slider react-slick
    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        arrows: false
    };
    //Effect para carga del main

    const [startIsVisible, setStartIsVisible] = useState(true);
    
    useEffect(() => {
        let storageData = sessionStorage.getItem('contentVisible');
        console.log('storage: ' + storageData);
        console.log('start: ' + startIsVisible);
        
        

        if(storageData === 'true' && startIsVisible == true) {
            setStartIsVisible(false)
            setIsContentVisible(true)
            handleStart()
        } else {
            handleArrow()
        }   
        },[]);

    //Effect start home 
    
    const controlArrowLoad = useAnimation();

    function handleArrow() {
        controlArrowLoad.start({
            y: [0, -20, 0],
            transition: {
                duration: 0.5,
                repeat: 3,
                repeatType: 'loop'
            }
        })
    }

    



    const controlsStartHome = useAnimation();

    function handleStart() {
        sessionStorage.setItem('contentVisible', 'true')
        setStartIsVisible(false)
        setIsContentVisible(true)
        console.log('estado de startIsVisible: ' + startIsVisible)
        console.log('estado de sessionStorage: ' + sessionStorage.getItem('contentVisible'))


        
        let iconStart = document.getElementById('triggerStart')
        let titleStart = document.getElementById('titleStart')
        let containerTitleHome = document.querySelector('.cont-title-start__home')
        let mainContainer = document.querySelector('.main__home');


        mainContainer.style.display = 'flex'
        iconStart.style.display = 'none'
        iconStart.style.transition = ' 1s'
        titleStart.style.marginBottom = '10%'
        controlsStartHome.start({
            opacity: 1,
            transition: {duration: 2},
            y:-50
        })
    }

    useEffect(()=> {
        let iconStart = document.getElementById('triggerStart')
        iconStart.addEventListener('click', handleStart)
        return()=> iconStart.removeEventListener('click', handleStart)

    }, [controlsStartHome])

    //Effect para carga de div cont - 1
    
    const controls = useAnimation()

    function handleScroll() {
        const scrollY = window.scrollY

        controls.start({
            opacity: scrollY > 100 ? 1 : 0,
            transition: {duration: 1}
        })
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return()=> window.removeEventListener('scroll', handleScroll)
    })
    

    // effect cont-2
    const controlsContTwo = useAnimation()

    function handleScrollContTwo() {
        const scrollY = window.scrollY

        controlsContTwo.start({
            opacity: scrollY > 200 ? 1 : 0,
            transition: {duration: 1}
        })
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScrollContTwo)
        return()=> window.removeEventListener('scroll', handleScrollContTwo)
    })
    

    // effect cont-3
    const controlsContThree = useAnimation()
    function handleScrollContThree() {
        const scrollY = window.scrollY

        controls.start({
            opacity: scrollY > 250 ? 1 : 0,
            transition: {duration: 1}
        })
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScrollContThree)
        return()=> window.removeEventListener('scroll', handleScrollContThree)
    })
    
    return(

            <motion.div className={`cont-start__home fade-in visible`}>
                
                
                <motion.div className='cont-title-start__home'>
                <h1 id='titleStart' className='title-start__home'>Santiago Martin Official Site</h1>
                <motion.i animate={controlArrowLoad} id='triggerStart' className="fa-solid fa-chevron-down trigger-start__home" whileHover={{
                    y:[0, -10, 0],
                    transition: {
                        duration: 0.5,
                        repeat: Infinity,
                        repeatType: 'loop'
                    }
                }}></motion.i>
                </motion.div>
                            
                <motion.main initial={{opacity: 0}} animate={controlsStartHome}
                    className={`main__home`}
                    style={{display: 'none'}}
                    >
                    
                    <div className="main-cont-1__home">
                        <section className="banner__home">
                            <div className="cont-banner__home">
                                {/* <div className={`cont-text-banner__home`}>
                                    <p className="title-banner__home title-name__home">Santiago Martin</p> 
                                    <p className="title-banner__home">Official Site</p>
                                </div> */}
        
                                <Slider className="cont-carousel-comics__gallery" {...settings}>
                                    <div className="cont-img__gallery">
                                        <a href="/gallery">
                                            <img className="img-carousel__gallery img-1__gallery" src="/images/dibujo-cara-mujer.jpg" alt=""  />
                                        </a>
                                    </div>
                                    <div className="cont-img__gallery">
                                        <a href="/gallery">
                                            <img className="img-carousel__gallery img-2__gallery" src="/images/dibujo-taza-santi.jpg" alt=""  />
                                        </a>
                                    </div>
                                    <div className="cont-img__gallery">
                                        <a href="/gallery">
                                            <img className="img-carousel__gallery img-3__gallery" src="/images/santi-comic.jpg"  alt="" />
                                        </a>
                                    </div>
                                </Slider>
                                
                                <motion.div animate={controls} className={`cont-text-banner__home cont-text-art__home`}>
        
                                    <div 
                                    className='cont-text-banner__home cont'>
                                    
                                        <p className="title-banner__home text-banner__home">
                                        Art, comics & illustrations
                                        </p>
                                    </div>
                                        
                                    
                                </motion.div>
                            </div>
                        </section>
                    </div>
                        
                    <motion.div animate={controlsContTwo} className={`main-cont-2__home`}>
                        <section className="cont-quote-gallery__home">
                            <div className="quote__home">
                                <div className="cont-quote__home">
                                    <p className="quote-text__home">
                                        "Creating is like giving life to something completely new. It's a process where imagination becomes reality through effort and dedication. Every stroke and line are steps on a path towards something unique."
                                    </p>
                                    <p className="quote-text__home">— Akira Toriyama</p>
                                </div>
                            </div>
                            <div className="wrapper__home">
                                <div className="cont-wrapper__home">
                                    <img src={dibujoMujer} alt="" className="img-wrapper__home" />
                                    <motion.a whileHover={{
                                            color: 'black',
                                            backgroundColor: 'rgba(255, 255, 255, 0.76)',
                                            borderColor: 'white',
                                            boxShadow: 'white 0rem 0rem 0.8rem',
                                            transition:{
                                                duration: 1.5,
                                                ease: 'easeInOut'
                                            }
                                            }} whileTap={{ scale: 0.9 }} className="link-gallery__home" href="/gallery">
                                            <span>Gallery</span>
                                    </motion.a>
                                </div>
                            </div>
                        </section>
                    </motion.div>
        
                    <motion.div animate={controlsContThree} className="main-cont-3__home">
                        <section className="contact__home">
                            <div className="cont-contact__home">
                                <p className="contact-text__home">
                                    I specialize in personalized drawings that capture your unique ideas. From custom portraits to comic-style illustrations, we bring a blend of classNameic comics, manga, and superhero genres to your custom art needs. Let us turn your vision into reality with our distinctive artistic touch.
                                </p>
                            </div>
                            <motion.a whileHover={{
                                color: 'white',
                                backgroundColor: 'rgb(0,0,0, 0.76)',
                                border: 'solid white 0.2rem',
                                boxShadow: 'white 0rem 0rem 0.8rem',
                                transition:{
                                        duration: 1,
                                        ease: 'easeInOut'
                                    }
                            }} whileTap={{ scale: 0.9 }} className="link-contact__home" href="/contact">Let's Talk!</motion.a>
        
                        </section>
                    </motion.div>
        
                </motion.main>
            
            

            
                
            
                
                    
                

            
            
            
        </motion.div>
    )
}