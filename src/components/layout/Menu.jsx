import React from 'react'
import './Menu.css'
import { Link } from 'react-router-dom'

const Menu = props => (
    <aside className='Menu'>
        <nav>
            <ul>
                <li>
                    <Link to="/telas">Início</Link>
                </li>
                <li>
                    <Link to="/cadastro">Cadastro</Link>
                </li>
                <li>
                    <Link to="/telas">Mensalidades</Link>
                </li>
                <li>
                    <Link to="/telas">Tesouraria</Link>
                </li>
                <li>
                    <Link to="/telas">Secretaria</Link>
                </li>
                <li>
                    <Link to="/telas">Eventos</Link>
                </li>
            </ul>
        </nav>
    </aside>

)

export default Menu