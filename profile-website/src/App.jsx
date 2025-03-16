import './App.css'
import Home from './pages/Home'
import Gallery from './pages/Gallery'
import Navbar from "./pages/Navbar"
import Aboutme from "./pages/Aboutme"

function App() {
  return (
    <div>
      <Navbar/>
     <Home />
     <Aboutme />
     <Gallery />
    </div>
  )
}

export default App
