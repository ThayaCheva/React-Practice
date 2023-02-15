import React from 'react'
import "../styles/styles.css"

export default function Control(props) {

    return <div 
        className={`control ${props.cName} ${props.isClicked ? "active-btn" : ""}`} 
        onClick={props.handleControl}
        data-id={props.cName}
        >{props.value}</div>
}