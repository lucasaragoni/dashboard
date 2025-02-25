import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Sidebar from './Components/Sidebar'

function App() {

  return (
    <>
    <div className='w-full h-screen bg-radial-[at_25%_25%] from-zinc-500 to-zinc-900 to-75% flex'>
    <Sidebar />
    <Navbar/>
    </div>

    </>
  )
}

export default App
