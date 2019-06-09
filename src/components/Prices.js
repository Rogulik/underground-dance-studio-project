import React from 'react'
import '../scss/prices.scss'
import pojedyncza from '../images/pojedyncza.jpg'
import indywidualna from '../images/indywidualna.png'
import mniejZajec from '../images/mniej-zajec.jpg'
import wiecejZajec from '../images/wiecej-zajec.jpg'


const Prices = () => {
    return(
        <div className='prices' id='cennik'>
            <h2 className='prices__header'>
                Cennik.
            </h2>
            <div className='prices__container'>
                <section className='prices__card'>
                    <div className='prices__card--text'>
                    <h3 className='prices__card--header'>INDWIDUALNA.</h3>
                    <ul className='prices__card--list'>
                        <li className='prices__card--list-item'><i className ="fas fa-money-bill-alt"></i>
                        <p className='prices__card--paragraph'>70 PLN</p>
                        </li>
                        <li className='prices__card--list-item'>
                        <i className="far fa-clock"></i>
                        <p className='prices__card--paragraph'>1h</p>
                        </li>
                        <li className='prices__card--list-item'>
                        <i className="far fa-calendar-alt"></i>
                        <p className='prices__card--paragraph'>4 zajęcia</p>
                        </li>
                    </ul>
                    </div>
                    <div className='prices__card--image'>
                        <img src={pojedyncza} alt='dancing queen' className='prices__card--photo'/>
                    </div>
                </section>
                <section className='prices__card'>
                    <div className='prices__card--image'>
                    <img src={indywidualna} alt='dancing queen' className='prices__card--photo'/>
                    </div>
                    <div className='prices__card--text'>
                    <h3 className='prices__card--header'>POJEDYNCZA.</h3>
                    <ul className='prices__card--list'>
                        <li className='prices__card--list-item'><i className ="fas fa-money-bill-alt"></i>
                        <p className='prices__card--paragraph'>70 PLN</p>
                        </li>
                        <li className='prices__card--list-item'>
                        <i className="far fa-clock"></i>
                        <p className='prices__card--paragraph'>1h</p>
                        </li>
                        <li className='prices__card--list-item'>
                        <i className="far fa-calendar-alt"></i>
                        <p className='prices__card--paragraph'>4 zajęcia</p>
                        </li>
                    </ul>
                    </div>
                   
                </section>
                <section className='prices__card'>
                    <div className='prices__card--text'>
                    <h3 className='prices__card--header'>MIESIĘCZNIE.</h3>
                    <ul className='prices__card--list'>
                        <li className='prices__card--list-item'><i className ="fas fa-money-bill-alt"></i>
                        <p className='prices__card--paragraph'>70 PLN</p>
                        </li>
                        <li className='prices__card--list-item'>
                        <i className="far fa-clock"></i>
                        <p className='prices__card--paragraph'>1h</p>
                        </li>
                        <li className='prices__card--list-item'>
                        <i className="far fa-calendar-alt"></i>
                        <p className='prices__card--paragraph'>4 zajęcia</p>
                        </li>
                    </ul>
                    </div>
                    <div className='prices__card--image'>
                        <img src={mniejZajec} alt='dancing queen' className='prices__card--photo'/>
                    </div>
                </section>
                <section className='prices__card'>
                    <div className='prices__card--image'>
                            <img src={wiecejZajec} alt='dancing queen' className='prices__card--photo'/>
                        </div>
                    <div className='prices__card--text'>
                    <h3 className='prices__card--header'>MIESIĘCZNIE.</h3>
                    <ul className='prices__card--list'>
                        <li className='prices__card--list-item'><i className ="fas fa-money-bill-alt"></i>
                        <p className='prices__card--paragraph'>70 PLN</p>
                        </li>
                        <li className='prices__card--list-item'>
                        <i className="far fa-clock"></i>
                        <p className='prices__card--paragraph'>1h</p>
                        </li>
                        <li className='prices__card--list-item'>
                        <i className="far fa-calendar-alt"></i>
                        <p className='prices__card--paragraph'>4 zajęcia</p>
                        </li>
                    </ul>
                    </div>
                    
                </section>
            
            </div>

        </div>
    )
}

export default Prices