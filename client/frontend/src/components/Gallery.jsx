import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ('../assets/css/gallery.css')

export default function Gallery() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        autoplay: true
    }

    return(
        <div>
        <section className="comics__gallery">
            <h3 className="header__gallery">Comics</h3>
            <Slider className="cont-carousel-comics__gallery" {...settings}>
                <div className="cont-img__gallery"><img className="img-carousel__gallery img-1__gallery" src="/images/dibujo-cara-mujer.jpg" alt=""  /></div>
                <div className="cont-img__gallery"><img className="img-carousel__gallery img-2__gallery" src="/images/dibujo-taza-santi.jpg" alt=""  /></div>
                <div className="cont-img__gallery"><img className="img-carousel__gallery img-3__gallery" src="/images/santi-comic.jpg"  alt="" /></div>
            </Slider>
        </section>
        <hr />
        <section className="illustrations__gallery">
            <h3 className="header__gallery">Illustrations</h3>
            <Slider {...settings} className="cont-carousel-illustrations__gallery">
                <div><img className="img-carousel__gallery img-1__gallery" src="/images/dibujo-cara-mujer.jpg" alt="" /></div>
                <div><img className="img-carousel__gallery img-2__gallery" src="/images/dibujo-taza-santi.jpg" alt="" /></div>
                <div><img className="img-carousel__gallery img-3__gallery" src="/images/santi-comic.jpg" alt="" /></div>
            </Slider>
        </section>
    </div>
    )
}