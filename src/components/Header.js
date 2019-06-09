import React from 'react'
import '../scss/header.scss'
import PhoneNav from './phone-nav'

const Header = () => {
    return(
        <header className='header' id='home'>
            <PhoneNav />
            <section className='header__hero'>
                <p className='logo'>UNDERGROUND <br/> Dance Studio</p>
                <div className='header__hero-wrapper'>
                    <h1 className='header__main-title'>MOVE WITH THE FLOW.</h1>
                    <a href='#kontakt' className='btn-primary margin-small'>SIGN UP</a>
                    <a href='#' className='btn-secondary'>REGULAMIN</a>
                </div>
                <i className="fas fa-sort-down bounce"></i>
            </section>
            <section className='header__goal'>
                
                <h2 className='header__secondary-title'>Our goal</h2>
                <p className='header__sub-text'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </section>
            <section className='header__social-media'>
                <i className="fab fa-facebook-f"></i>
                <i className="fab fa-instagram"></i>
                <i className="fab fa-youtube"></i>
            </section>
            
        </header>
    )
}

export default Header