import React from 'react'
import '../scss/schedule.scss'


const Schedule = () => {
    return(
        <div className='schedule' id='grafik'>
            <h2 className='schedule__sub-title'>
                Grafik zajęć.
            </h2>
            <div className='schedule__container'>
                <div className='schedule__row row-1'>
                    <p className='schedule__container--name'>Poniedziałek</p>

                    <div className='schedule__container--block'>
                    <p className='time'>17.30 -> 18.30
                    </p>
                    <p className='group'>Grupa początkująca
                    </p>
                    </div>
                    <div className='schedule__container--block'><p className='time'>18.30 -> 19.30</p>
                    <p className='group'>Grupa Średnio-zaawnsowna - Jazz</p>
                    </div>
                </div>
                <div className='schedule__row row-2'>
                    <p className='schedule__container--name'>Wtorek</p>
                    <div className='schedule__container--block'><p className='time'>17.30 -> 18.30</p>
                    <p className='group'>Grupa początkująca</p>
                    </div>
                </div>
                <div className='schedule__row row-3'>
                    <p className='schedule__container--name'>Środa</p>
                    <div className='schedule__container--block'><p className='time'>17.30 -> 18.30</p>
                    <p className='group'>Grupa początkująca</p>
                    </div>
                    <div className='schedule__container--block'><p className='time'>17.30 -> 18.30</p>
                    <p className='group'>Grupa początkująca</p>
                    </div>
                    <div className='schedule__container--block'><p className='time'>17.30 -> 18.30</p>
                    <p className='group'>Grupa początkująca</p>
                    </div>
                </div>
                <div className='schedule__row row-4'>
                    <p className='schedule__container--name'>Czwartek</p>
                    <div className='schedule__container--block'><p className='time'>17.30 -> 18.30</p>
                    <p className='group'>Grupa początkująca</p>
                    </div>
                    <div className='schedule__container--block'><p className='time'>17.30 -> 18.30</p>
                    <p className='group'>Grupa początkująca</p>
                    </div>
                </div>
                <div className='schedule__row row-5'>
                    <p className='schedule__container--name'>Piątek</p>
                    <div className='schedule__container--block'><p className='time'>17.30 -> 18.30</p>
                    <p className='group'>Grupa początkująca</p>
                    </div>
                    <div className='schedule__container--block'><p className='time'>17.30 -> 18.30</p>
                    <p className='group'>Grupa początkująca</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Schedule