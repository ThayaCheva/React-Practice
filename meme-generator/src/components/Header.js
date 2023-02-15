import React from 'react'

export default function Header() {
    return (
        <header className="header">
            <img src={require("./images/troll.png")} alt="logo" className="header--image"></img>
            <h2 className='header--title'>Meme Generator</h2>
            <h4 className='header--project'>React Course - Project 3</h4>
        </header>
    )
}