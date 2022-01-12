import './app.scss'
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { useState } from 'react';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

export default function App() {
  const [navbarIndex, setNavbarIndex] = useState(0);

  return (
    <div className="app">
      <Navbar navbarIndex={navbarIndex} setNavbarIndex={setNavbarIndex}/>
      <div className="sections">
        <Home setNavbarIndex={setNavbarIndex}/>
        <About setNavbarIndex={setNavbarIndex}/>
        <Portfolio/>
        <Contact/>
      </div>
    </div>
  );
}

