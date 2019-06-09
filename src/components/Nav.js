import React from 'react'
import '../scss/nav.scss'


const Nav = () => {
    return(
        <nav className='nav'>
            <ul className='nav__list'>
            <li className='nav__list-item'>
            <a className='nav__link' href='#home'>Home.
            </a>
            </li>
                <li className='nav__list-item'>
                    <a className='nav__link' href='#about'>O nas.
                    </a>
                </li>
                <li className='nav__list-item'>
                    <a className='nav__link' href='#grafik'>Grafik.
                    </a>
                </li>
                <li className='nav__list-item'>
                    <a className='nav__link' href='#cennik'>
                    Cennik.
                    </a>
                </li>
            
            
                <li className='nav__list-item'>
                    <a className='nav__link' href='#kontakt'>Kontakt.
                    </a>
                </li>
            
            
                <li className='nav__list-item'>
                    <a className='nav__link' href='#footer'>
                    Trenerzy.
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Nav