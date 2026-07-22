import Navbar from './Components/Navbar'
import About from './Components/About'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import Skills from './Components/Skills'
import Hero from './Components/Hero'
import Footer from './Components/Footer'
import './App.css'

function App() {
  return (
    <div className='app'>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
