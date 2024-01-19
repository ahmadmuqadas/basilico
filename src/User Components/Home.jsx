import React from 'react'
import MainNav from './MainNav'
import Hero from './Hero'
import PlaceHolder from './PlaceHolder'
import About from './About'
import Menu from './Menu'
import Contact from './Contact'
import Footer from './Footer'
const Home = () => {
  return (
    <div>
        <MainNav/>
        <Hero/>
        <About/>
        <Menu/>
        <Contact/>
        <Footer/>
        
    </div>
  )
}

export default Home