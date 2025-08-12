import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
let count = document.getElementById('counter')

function App() {
  let [counter, setcounter] = useState(0)

  const addval = () => {
    console.log(counter)
      setcounter(counter => counter + 1)
      setcounter(counter => counter + 1)
      setcounter(counter => counter + 1)
}
  const removeval = () => {
    setcounter(counter - 1)
  }
  return (
    <>
      <h1>this is react code</h1>
      <h2>counter val : {counter}</h2>
      <button onClick={addval}>add val</button>
      <br />
      <button onClick={removeval}>remove val</button>
    </>
  )
}

export default App
