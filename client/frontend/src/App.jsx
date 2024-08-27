import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import NavBar from './components/NavBar.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Gallery from './components/Gallery.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import Success from './components/Success.jsx'
import { useState } from 'react'

function App() {

  const [isContentVisible, setIsContentVisible] = useState(false)
  console.log(isContentVisible)
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home setIsContentVisible= {setIsContentVisible}/>} />
        <Route path="/about" element={<About setIsContentVisible= {setIsContentVisible}/>} />
        <Route path="/gallery" element={<Gallery setIsContentVisible= {setIsContentVisible}/>} />
        <Route path="/contact" element={<Contact setIsContentVisible= {setIsContentVisible}/>} />
        <Route path="/success" element={<Success setIsContentVisible= {setIsContentVisible}/>} />
      </Routes>
      {isContentVisible && <Footer/>}
    </Router>
  )
}

export default App
