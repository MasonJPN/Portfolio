import NavBar from "./Components/NavBar"
import Hero from "./Components//Hero"
import About from "./About"
import Experience from "./Experience"
import Projects from "./Projects"
import ContactForm from "./ContactForm"
import Footer from "./Components/Footer"
import {useEffect} from "react"
import AOS from 'aos'
import 'aos/dist/aos.css'




function App() {
  
useEffect(() => {
  AOS.init({ duration: 1000, once: true, })
}, [])



  return (
    

    <main >
      <NavBar />
      <Hero />
    <section>
      <Experience />
      <Projects />
      <About />
    </section>
      <ContactForm/>
      <Footer/>
    </main>
      
    
  )
}

export default App
