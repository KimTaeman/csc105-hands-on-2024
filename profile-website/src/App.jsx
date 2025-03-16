import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import Gallery from './pages/Gallery'
import Aboutme from "./pages/Aboutme"
import Button from './components/Button'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app-container w-screen">
      {/* NAVIGATION  */}
     <nav className="nav-wrapper w-full p-3 md:p-5 md:p-10 h-10 flex justify-between items-center text-xs md:text-sm">
          <a href="#" className="brand-logo text-sm md:text-2xl font-bold">Artist John</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down flex md:gap-6">
            <li className="md:py-1.5 px-3 md:px-5 text-center rounded-2xl  hover:bg-lime-100"><a href="/">Home</a></li>
            <li className="md:py-1.5 px-3 md:px-5 text-center rounded-2xl hover:bg-lime-100"><a href="/aboutme" className="">About me</a></li>
            <li className="md:py-1.5 px-3 md:px-5 text-center rounded-2xl hover:bg-lime-100"><a href="/gallery">Gallery</a></li>
          </ul>
          <Button text="Contact"/>
     </nav>

     <Home />
     <Aboutme />
    </div>
  )
}

export default App
