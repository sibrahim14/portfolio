import React from 'react'
import Navbar from './navebar.jsx'
import Contact from './contact.jsx'
import My from './my.jsx'
import About from './about.jsx'
import Footer from './footer.jsx'
import Skills from './skills.jsx'
import Projects from './projuct.jsx'
import Certificate from './certificate.jsx'

const Landingpage = () => {
  return (
    <div>
      <Navbar/>
        <My />
      <About />
      <Skills />
      <Certificate/>
      <Projects />
     <Contact />
      <Footer />
     </div>
  )
}

export default Landingpage
