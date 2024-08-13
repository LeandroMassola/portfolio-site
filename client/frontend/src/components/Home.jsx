/* import('../assets/css/home.css') */
import dibujoTaza from '/images/dibujo-taza-santi.jpg'
import dibujoMujer from '/images/dibujo-cara-mujer.jpg'
import { useEffect, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'
import Slider from 'react-slick'


export default function Home() {

    const [isVisible, setIsVisible] = useState(false)

    useEffect(()=> {
        setTimeout(() => {
            setIsVisible(true)
        }, 100);
    }, [])
    
    useEffect(()=> {
        window.addEventListener('scroll', handleScrollHome)
        window.addEventListener('scroll', handleScroll)
        return()=> {
            window.removeEventListener('scroll', handleScrollHome)
            window.removeEventListener('scroll', handleScroll)
        }
    }, [handleScroll, handleScrollHome])
    

    //Settings Slider react-slick
    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        fade: true,
        cssEase: 'linear',
        autoplay: true
    }
    //

    const controlsScroll = useAnimation();
    function handleScrollHome() {
        const scrollY = window.scrollY;
        controlsScroll.start({
            opacity: scrollY > 100 ? 1 : 0.5,
            scale: scrollY > 200 ? 1.2 : 1,
            transition: {duration:'0.5'}
        })
    }

    useEffect(()=> {
        controlsScroll.start(
            {
                opacity: 0
            }
        )
    }, [controlsScroll])

    //animacion scroll border

    
    const controls = useAnimation();

    function handleScroll() {
            const scrollY = window.scrollY;
            const borderRadiusValue = Math.min(scrollY/ 10, 100)
            controls.start({
                borderRadius: `${borderRadiusValue}%`,
                borderColor: 'white',
            })
    }

    return(
        <motion.main
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className={`main__home fade-in ${isVisible ? 'visible' : ''}`}>
                <div className="main-cont-1__home">
                    <section className="banner__home">
                        <div className="cont-banner__home">
                            <div className={`cont-text-banner__home`}>
                            
                                <p className="title-banner__home title-name__home">Santiago Martin</p> 
                                <p className="title-banner__home">Official Site</p> 
                            
                                
                            </div>

                            <Slider className="cont-carousel-comics__gallery" {...settings}>
                                <div className="cont-img__gallery"><img className="img-carousel__gallery img-1__gallery" src="/images/dibujo-cara-mujer.jpg" alt=""  /></div>
                                <div className="cont-img__gallery"><img className="img-carousel__gallery img-2__gallery" src="/images/dibujo-taza-santi.jpg" alt=""  /></div>
                                <div className="cont-img__gallery"><img className="img-carousel__gallery img-3__gallery" src="/images/santi-comic.jpg"  alt="" /></div>
                            </Slider>
                            
                            <motion.div animate={controlsScroll} className={`cont-text-banner__home cont-text-art__home`}>

                                <motion.div 
                                style={{
                                    width: '90%',
                                    backgroundColor: 'transparent',
                                    margin: '20% 20% 20% 20%',
                                    border: '5px solid white',
                                    padding: '30% 5% 30% 5%',
                                    display:'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    borderRadius: '0%',
                                    
                                }} animate={controls} className='cont-text-banner__home cont'>
                                
                                    <p className="title-banner__home text-banner__home">
                                    Art, comics & illustrations
                                    </p>
                                </motion.div>
                                    
                                
                            </motion.div>
                        </div>
                    </section>
                </div>
                    
                <div className={`main-cont-2__home`}>
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
                                <a className="link-gallery__home" href="/gallery"><span>Gallery</span></a>
                            </div>
                        </div>
                    </section>
                </div>

                <div className="main-cont-3__home">
                    <section className="contact__home">
                        <div className="cont-contact__home">
                            <p className="contact-text__home">
                                I specialize in personalized drawings that capture your unique ideas. From custom portraits to comic-style illustrations, we bring a blend of classNameic comics, manga, and superhero genres to your custom art needs. Let us turn your vision into reality with our distinctive artistic touch.
                            </p>
                            <a  className="link-contact__home" href="/contact">Let's Talk!</a>
                        </div>
                    </section>
                </div>
            </motion.main>
    )
}