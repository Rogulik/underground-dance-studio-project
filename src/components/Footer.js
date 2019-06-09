import React from 'react'
import '../scss/footer.scss'
import character1 from '../images/character-1.jpg'
import character2 from '../images/character-2.jpg'



const Footer = () => {
    return(
        <footer className='footer' id='footer'>
            <div className='footer__instructors'>
                <div className='footer__header--container'>
                <h2 className='footer__header'>Instruktorzy.</h2>
                </div>
                <div className='footer__image--container'>
                    <figure className='footer__image--block'>
                    <img src={character1} alt='instructor' className='footer__image' />
                    <figcaption className='footer__image--name'>BENEDYSŁAWA PACZKOWA XIV</figcaption>
                    </figure>
                    <figure className='footer__image--block'>
                    <img src={character2} alt='instructor' className='footer__image' />
                    <figcaption className='footer__image--name'>CHYBA PATRYK</figcaption>
                    </figure>
                </div>
            </div>
            <div className='footer__social-media'>
            <h3>SOCIAL MEDIA</h3>
                <i className="fab fa-facebook-f"></i>
                <i className="fab fa-instagram"></i>
                <i className="fab fa-youtube"></i>
            </div>
            <div className='footer__text'>
                <a className='footer__link' href='#'>Regulamin</a>
            </div>
        </footer>
    )
}

export default Footer