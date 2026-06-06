import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Experience from "./components/Experience"
import Education from "./components/Education"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Contact from "./components/Contact"
import Footer from "./components/Footer"


function App() {
  return (
    <div className="bg-[#292929] text-white min-h-screen">
      <Navbar />
      <Hero />
      <Education />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
