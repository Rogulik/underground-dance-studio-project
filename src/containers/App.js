import React from 'react'
import '../scss/app.scss'
import Header from '../components/Header'
import About from '../components/About'
import Nav from '../components/Nav'
import Schedule from '../components/Schedule'
import Prices from '../components/Prices'
import Form from '../components/Form'
import Footer from '../components/Footer'




const App = () => {
    return(
        <div className='container'>  
            <Header />
            <Nav />
            <About />
            <Schedule />
            <Prices />
            <Form />
            <Footer />
        </div>
    )
}

export default App

  
  