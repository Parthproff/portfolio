import React from 'react'
import About from './assets/components/about/about'
import Contact from './assets/components/contact/Contact'
import Education from './assets/components/education/Education'
import Experience from './assets/components/experience/Experience'
import Footer from './assets/components/Footer/Footer'
import Navbar from './assets/components/Navbar/Navbar'
import Skills from './assets/components/Skills/Skills'
import Work from './assets/components/Work/Work'
import BlurBlob from './blurbob'
const App = () => {
  return (
    <div className="bg-[#050414]">
      <BlurBlob position={{ top: '35%', left: '20%' }} size={{ width: '30%', height: '40%' }} />
      
     <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] 
     bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]">

     </div>
     <div className="relative pt-20">
      <About/>
      <Skills/>
      <Education/>
      <Contact/>
      <Experience/>
      <Footer/>
      <Navbar/>
      
      <Work/>

     </div>
    </div>
  )
}

export default App
