import { useEffect } from 'react'
import styles from '../assets/css/about.module.css'


export default function About({setIsContentVisible}) {
    
    document.title = 'About'
    useEffect(()=> {
        setIsContentVisible(true)

    },[])
    return (
    <div className={styles.main}>
        <div className={styles.contImage}>
            <p className={styles.imgText}>What inspires me?</p>
            <img className={styles.imgBg} src="/images/santi-comic.jpg" alt=""/>
        </div>
        <div className={styles.contText}>
            <div className={styles.boxText}>
                <p className={styles.text}>
                    Welcome to my artistic journey, where I blend the vibrant worlds of classic comics, manga, and superhero tales into a unique visual narrative. My work is deeply inspired by the timeless appeal of vintage comic books, the dynamic storytelling of manga, and the heroic grandeur of superhero legends. This fusion creates a distinctive style that is both nostalgic and fresh, often infused with a meta-conscious humor that playfully acknowledges these influences.
                </p>
                <br />
                <p className={styles.text}>
                    Whether through bold line work or intricate details, my illustrations aim to capture the essence of these genres while also exploring new creative boundaries. Each piece is a reflection of my passion for storytelling and my love for the diverse, imaginative realms that comics and manga offer.
                </p>
                <br />
                <p className={styles.text}>
                    Join me as I continue to explore and evolve my craft, bringing to life characters and stories that are not just entertaining but also a nod to the rich traditions of comic art.

                </p>
                
            </div>
        </div>
    </div>
    )
}