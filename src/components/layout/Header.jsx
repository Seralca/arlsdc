import React from 'react'
import Logo from '../images/selo_DC_01.png'
import './Header.css'

function Header() {
  return (
    <div className='APP-Header'>
      <header className='Header'>
        <div>
          <img src={Logo} alt="Logo" className="App-logo" /> 
        </div>
        <h1 className='App-title'> ARLS D&C </h1>
      </header>
    </div>

  )
}

export default Header

