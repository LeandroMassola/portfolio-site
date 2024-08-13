/* import('../assets/css/navBar.css') */
import { useState } from 'react';
import {useLocation} from 'react-router-dom'
export default function NavBar() {

    const [isOpen, setIsOpen] = useState(false)
    const location = useLocation()

    console.log(location.pathname)
    function handleBurguerMenu() {
        setIsOpen(!isOpen)
    }

    return (
        <nav id="nav" className={location.pathname == '/about' ? 'dark__nav' : 'nav'}>
            <div className="cont__nav">
                <i onClick={handleBurguerMenu} className={`fa-solid fa-bars ${location.pathname == '/about' ? 'icon-menu-dark__nav' : 'icon-menu__nav'} icon-bars-menu__nav ${isOpen ? 'icon-bars-disabled-menu__nav' : 'icon-bars-enabled__nav' }`} ></i>
                <i onClick={handleBurguerMenu} className={`fa-solid fa-xmark ${location.pathname == '/about' ? 'icon-menu-dark__nav' : 'icon-menu__nav'} icon-menu-xmark__nav ${isOpen ? 'icon-xmark-active__nav' : 'icon-xmark-disabled__nav'}`}></i>
                <ul className="cont-btn__nav">
                    <li className="list-item__nav"><a href="/about" className={`${location.pathname == '/about' ? 'links-dark__nav' : 'links__nav'} link-about__nav`}>About</a></li>
                    <li className="list-item__nav"><a href="/gallery" className={`${location.pathname == '/about' ? 'links-dark__nav' : 'links__nav'} link-gallery__nav`}>Gallery</a></li>
                    <li className="list-item__nav"><a href="/contact" className={`${location.pathname == '/about' ? 'links-dark__nav' : 'links__nav'} link-contact__nav`}>Contact</a></li>
                </ul>
                <a href="/" className={`link-home__nav ${location.pathname == '/about' ? 'logo-dark__nav' : 'logo__nav'}`}>SM</a>
                {/*                     <img src="/images/sketch.png" alt="imagen-ejemplo-logo" className="logo__nav"/>*/}         
            </div>

            <div onClick={handleBurguerMenu} className={`cont-burguer-menu__nav ${isOpen ? 'open' : ''}`}>
                <a href="/about" className="links__nav link-about__nav links-burguer__nav link-burguer-about__nav">About</a>
                <a href="/gallery" className="links__nav link-gallery__nav links-burguer__nav link-burguer-gallery__nav">Gallery</a>
                <a href="/contact" className="links__nav link-contact__nav links-burguer__nav link-burguer-contact__nav">Contact</a>
            </div>
        </nav>
    )
}

