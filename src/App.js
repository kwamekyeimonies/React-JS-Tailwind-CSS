import React from 'react'
import About from './components/About/About'
import AllInOne from './components/AllInOne.jsx/AllinOne'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Pricing from './components/Pricing/Pricing'
import Support from './components/Support/Support'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About  />
      <Support  />
      <AllInOne />
      <Pricing  />
      <Footer   />
    </div>
  )
}

export default App
