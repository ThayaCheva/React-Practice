import React from 'react'
import '../index.css'
export default function Hero() {
    return (
        <div className="body">
            <img src={require("../components/image/collage.png")} alt="collage"></img>
            <h1>Online experiences</h1>
            <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </div>
    )
}