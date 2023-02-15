import React from 'react'

export default function Die(props) {
    const style = {
        backgroundColor: props.isHeld ? "#59E391" : "#fff"
    }
    return (
        <div className="die" style={style} onClick={(props.holdDice)}>{props.value}</div>
    )
}