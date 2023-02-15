import React from 'react'

function App() {
  const [show, setShow] = React.useState(true)
  
  function WindowTracker() {
    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth)

    React.useEffect(() => {
      function watchWidth() {
        console.log("Setting up...")
        setWindowWidth(window.innerWidth)
      }

      window.addEventListener("resize", watchWidth)
      if (window.innerWidth < 640) {
        setStyle({backgroundColor: `rgba(${window.innerWidth - 500}, 0, 0, 0.5)`})
      }
      else if (window.innerWidth > 640 && window.innerWidth < 1280) {
        setStyle({backgroundColor: `rgba(0, ${window.innerWidth - 640}, 0, 0.5)`})
      }
      else {
        setStyle({backgroundColor: `rgba(0, 0, ${window.innerWidth - 1280}, 0.5)`})
      }


      return function() {
        console.log("Cleaning up...")
        window.removeEventListener("resize", watchWidth)
      }
    }, [])
    
    return (
      <h1>Window width: {windowWidth}</h1>
    )
  }

  function handleClick() {
    setShow(prevState => !prevState)
  }

  const [style, setStyle] = React.useState({backgroundColor: `rgba(0, 0, 0, 0.3)`})

  return (
    <div className="container" style={style}>
      <button onClick={handleClick} className="toggle-btn">Toggle WindowTracker</button>
      {show && <WindowTracker />}
    </div>
  )
}

export default App;
