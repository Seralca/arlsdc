import React from 'react'
import './Content.css'
import { Routes, Route } from "react-router-dom"; // Importe esses arquivos
import Cadastro from "../utilits/Cadastro"
import Telas from './Telas';



const Content = props => (
    <main className='Content'>
        <Routes>
            <Route path='/cadastro' element={<Cadastro />} />
            <Route path='/telas' element={<Telas />} />
        </Routes>
    </main>
)

export default Content
