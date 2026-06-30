import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Products from './components/Products/Products'
import Experience from './components/Experience/Experience'
import Education from './components/Education/Education'
import ProjectShowcase from './components/Projects/ProjectShowcase'
import Skills from './components/Skills/Skills'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Products />
        <Experience />
        <Education />
        <ProjectShowcase />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
