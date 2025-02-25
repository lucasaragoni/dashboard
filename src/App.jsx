import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Sidebar from './Components/Sidebar'
import Produtos from './Pages/Produtos'
import CadastroProduto from './Pages/CadastroProduto'
import Estoque from './Pages/Estoque'

function App() {

  return (
    <>
      <Router>
        <div className="flex">
          <Sidebar />
          <div className="flex-1">
          <Navbar />
            <div className='w-full h-9/10 bg-stone-500 flex'>
              
              <div className="flex">
              <Routes>
                <Route path="/produtos" element={<Produtos />} />
                <Route path="/cadastro" element={<CadastroProduto />} />
                <Route path='/estoque' element={<Estoque/>} />
              </Routes>
              </div>


            </div>
          </div>
        </div>

      </Router>





    </>
  )
}

export default App
