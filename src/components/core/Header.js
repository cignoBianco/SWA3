import React from 'react'
import logo from './../../logo.svg'
import './App.css'

const Header = () => {
    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                TODO app
            </p>
        </header>
    )
}

export default Header