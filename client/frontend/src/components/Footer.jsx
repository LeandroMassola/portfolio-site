/* import('../assets/css/footer.css') */
import {useLocation} from 'react-router-dom'

export default function Footer() {

    const location = useLocation({})
    return (
        <footer className={/* location.pathname == '/about' ? 'dark__footer' : 'footer' */ 'footer'}>
            <div className="cont__footer">
                <p className="social-title__footer"><u>Folllow Me!</u></p>
                <div className="cont-icons-media__footer">
                    <i className={`fa-linkedin-in   fa-brands `}></i>
                    <i className={`fa-brands fa-instagram`}></i>
                    <i className={`fa-brands fa-facebook-f`}></i>
                </div>
                <div className="cont-rights__footer">
                    <p className="text-right__footer">© Santiago Martín - All rights reserved. Developed by Leandro Massola.</p>
                </div>
            </div>
        </footer>
    )
}