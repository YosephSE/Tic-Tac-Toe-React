import { useState } from 'react'
import './App.css'
import Board from './components/Board'
import Score from './components/Score'
import Turn from './components/Turn'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <div>
      <Score />
      <Turn />
      <Board />
    </div>
  )
}

export default App
