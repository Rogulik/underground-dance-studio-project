import React from 'react'
import '../scss/form.scss'


const Form = () => {
    return(
        <div className='form' id='kontakt'>
           
            <div className='form__block'>
            
                <section 
                className='form__container'>
                <h2 className='form__header'>Zapisz się!</h2>
                    <form className='form__main'>
                        <label htmlFor='name' className='form__label'>Imię i Nazwisko</label>
                        <input type='text' className='form__input' required id='name'/>
                        <label htmlFor='email' className='form__label'>Email</label>
                        <input type='email' className='form__input' required id='email'/>
                        <label htmlFor='temat' className='form__label'>Temat</label>
                        <input type='text' className='form__input' required id='temat'/>
                        <label htmlFor='tresc' className='form__label'>Treść wiadomości</label>
                        <textarea className='form__textarea' required id='tresc' ></textarea>
                        <button className='btn-secondary'>Wyślij
                        </button>
                    </form> 
                </section>
                <address className='form__contact'>
                
                <div className='form__contact--container'>
                    <div className='form__contact--block'>
                        <h3 className='form__contact--header'>Dane kontaktowe</h3>
                        <p className='form__contact--paragraph'>
                        Email: undergrounddancestudio@gmail.com</p>
                        <p className='form__contact--paragraph'>
                            Numer kontaktowy: 0700880
                        </p>
                    </div>
                        <div className='form__contact--block'>
                            <h3 className='form__contact--header'>Adres</h3>
                            <p className='form__contact--paragraph'>Warszawa topolowa 7</p>
                        </div>
                </div>
                
                    <div className='form__contact--description'>
                        <p className='form__contact--text'>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                        </p>

                    </div>
                </address>
                
                </div>
        </div>
    )
}

export default Form