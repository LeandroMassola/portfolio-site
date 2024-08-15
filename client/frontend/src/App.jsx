import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import NavBar from './components/NavBar.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Gallery from './components/Gallery.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import { useState } from 'react'

function App() {

  const [isContentVisible, setIsContentVisible] = useState(false)
  console.log(isContentVisible)
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home setIsContentVisible= {setIsContentVisible}/>} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {isContentVisible && <Footer/>}
    </Router>
  )
}

export default App
