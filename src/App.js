import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Home from './Pages/Home';
import About from './Pages/About';
import Experience from './Pages/Experience';
import Education from './Pages/Education';
import Portfolio from './Pages/Portfolio';
import Footer from './components/Footer';


const App = () => {
  return (
  <Router>
    <div>
    <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/exper' element={<Experience />} />
          <Route path='/education' element={<Education />} />
          <Route path='/portfolio' element={<Portfolio />} />
        </Routes>
        <Footer/>
    </div>
  </Router>
  )
}

export default App
