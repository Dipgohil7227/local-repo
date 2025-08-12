import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
// import New from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-green-500'>thi is a props</h1>
      <Card username="dip" button="click me!" />
      <Card username="gohel" button="click me!" />
      <Card username="jaydeep" button="click me!" />
      <Card />

    </>
  )
}

export default App
