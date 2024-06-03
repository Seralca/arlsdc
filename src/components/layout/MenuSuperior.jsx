import React from 'react'
import './MenuSuperior.css'
import { Link } from 'react-router-dom'

function MenuSuperior() {
  return (
    <div className='MenuSuperior'>
        <span> 
               <Link to="/telas">Início</Link> 
               <Link to="/cadastro">Cadastro</Link> 
               <Link to="/telas">Mensalidades</Link> 
               <Link to="/telas">Tesouraria</Link> 
               <Link to="/telas">Secretaria</Link> 
               <Link to="/telas">Eventos</Link> 
               
        </span>
    </div>
  )
}

export default MenuSuperior