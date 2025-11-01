import React from 'react'
import Navbar from './navebar.jsx'
import Contact from './contact.jsx'
import My from './my.jsx'
import About from './about.jsx'
import Footer from './footer.jsx'
import Skills from './skills.jsx'
import Projects from './projuct.jsx'


const Landingpage = () => {
  return (
    <div>
      <Navbar/>
        <My />
      <About />
      <Skills />
      <Projects />
     <Contact />
      <Footer />
     </div>
  )
}

export default Landingpage
