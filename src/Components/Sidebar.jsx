import React from 'react'
import { Link } from 'react-router-dom'; // Importando Link do React Router
import Produtos from '../Pages/Produtos';
import CadastroProduto from '../Pages/CadastroProduto';

function Sidebar() {
    return (
        <div className='w-1/5 h-screen bg-gray-950 p-4'>
            <h1 className='text-white font-bold text-2xl'>Dashboard</h1>
            <ul className='mt-6'>
                <li className="p-2 text-gray-500 hover:bg-gray-200 rounded cursor-pointer flex">
                    <Link to="/produtos" className="w-full">Produtos</Link>
                </li>
                <li className="p-2 text-gray-500 hover:bg-gray-200 rounded cursor-pointer flex">
                    <Link to="/cadastro" className="w-full">Cadastro Produto</Link>
                </li>
                <li className="p-2 text-gray-500 hover:bg-gray-200 rounded cursor-pointer flex">
                    <Link to="/estoque" className='w-full'>Estoque </Link>
                </li>

            </ul>
        </div>
    )
}

export default Sidebar
