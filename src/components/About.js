import React from 'react'
import '../scss/about.scss'
import corridor from '../images/corridor.jpg'

const About = () => {
    return(
        
        <div className='about' id='about'>
        
            <div className='about__text'>
                <h2 className='about__title'>Who are we?</h2>
                <p className='about__paragraph'>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
                </p>
            </div>
            <div className='about__photo-list-container'>
                <img className='about__photo' src={corridor} alt='korytarz'/>
                <ul className='about__list'>
                    <li className='about__list-item'>
                        <i className="fas fa-compact-disc"></i>
                        <p className='about__paragraph'>
                            ZAJECIA STACJONARNE
                        </p>
                    </li>
                    <li className='about__list-item'>
                    <i className="fas fa-compact-disc"></i>
                    <p className='about__paragraph'>
                    ZAJECIA INDYWIDUALNE 
                    </p>
                    </li>
                    <li className='about__list-item'>
                    <i className="fas fa-compact-disc"></i>
                        <p className='about__paragraph'>
                        WARSZTATY PROWADZONE PRZEZ NAJLEPSZYCH
                        </p>
                    </li>
                    <li className='about__list-item'>
                    <i className="fas fa-compact-disc"></i>
                    <p className='about__paragraph'>
                            WYJAZDY NA NAJPOPULARNIEJSZE TANECZNE EVENTY W POLSCE
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default About