import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ListWrapper from './components/ListWrapper'

const App = () => {

  return (
    <div className="Container">
      <h1>Shopping List</h1>
      <ListWrapper />
    </div>
  )
}

export default App
