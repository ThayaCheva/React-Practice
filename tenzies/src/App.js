import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import Die from './component/Die.js'
import {nanoid} from "nanoid"
import Confetti from 'react-confetti'

function App() {

  const [dice, setDice] = React.useState(allNewDice)
  const [tenzies, setTenzies] = React.useState(false)
  const [rollCount, setRollCount] = React.useState(0)

  React.useEffect(() => {
    const allHeld =  dice.every(die => die.isHeld)
    const allSame = dice.every(die => die.value === dice[0].value)
    if (allHeld && allSame) {
      setTenzies(prevState => !prevState)
      console.log("You won!")
    }
  }, [dice])

  function generateNewDie() {
    return {
      value: Math.floor(Math.random() * 6) + 1, 
      isHeld: false,
      id: nanoid()
    }
  }

  function allNewDice() {
    const numArray = []
    for (let i = 0; i < 10; i++) {
      numArray[i] = generateNewDie()
    }
    return numArray
  }

  function rollDice() {
    setDice(oldDice => oldDice.map(die => {
      return die.isHeld ? die : generateNewDie()
    }))
    setRollCount(prevCount => prevCount + 1)
  }
  
  function holdDice(id) {
    setDice(oldDice => oldDice.map(die => {
      return die.id === id ? {...die, isHeld: !die.isHeld} : die
    }))
  }
  
  const diceElements = dice.map(die => 
    <Die 
      key={die.id} 
      value={die.value} 
      isHeld={die.isHeld}
      holdDice={() => holdDice(die.id)}
      />
    )
    
  function newGame() {
    setDice(allNewDice())
    setTenzies(false)
    setRollCount(0)
    setTime(0)
  }

  const [time, setTime] = React.useState(0)
  function Timer() {
      useEffect(() => {
        if (!tenzies) {
          setTimeout(() => setTime(time + 1), 1000)
        }
      }, [time])
    return <span className="game--timer">{time}</span>
  }

  return (
    <div className="App">
      <main>
          {tenzies && <Confetti/>}
          <h1 className="game--title">TENZIES</h1>
          <p className="game--desc">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
          <div className="die--container">
            {diceElements}
          </div>
          <button className="roll--button" onClick={() => {tenzies ? newGame() : rollDice()}}>{tenzies ? "New Game" : "Roll"}</button>
          <p className="roll--counter">Rolled <span className="roll--bold">{rollCount}</span> times</p>
          <span>{tenzies ? "Your time is " : " "}<Timer /> seconds</span>
      </main>
    </div>
  );
}

export default App;
