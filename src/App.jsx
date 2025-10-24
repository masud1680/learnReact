import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Child,{Mysum} from './children'
import Counter from './Counter'
import HideShow from './HideShow'

function App() {
  const [count, setCount] = useState(0);
  const [hideShow, setHideShow] = useState(false);

  return (
    <>
      <button onClick={()=>setHideShow(!hideShow)}>Toggle Click</button>
    {
      hideShow ? <HideShow/> : null
    }
    
    <Child/>
    <Mysum/>
    <h1>Welcome to React.</h1>
    <Counter/>
    </>
  )
}

export default App
