import { useState } from 'react'

import './App.css'
import Child,{Mysum} from './children'
import Clock from './clock'

function App() {
  const [color, setColor] = useState("green")

  return (
    <>
    <select onChange={(event)=>setColor(event.target.value)} >
      <option value="red">Red</option>
      <option value="green">Green</option>
      <option value="blue">Blue</option>
      <option value="grey">Grey</option>
    </select>

      <Clock color = {color}/>
    </>
  )
}

export default App
