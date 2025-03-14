import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [count, setCount] = useState(0)

  let addvalue=()=>{
    if(count < 20){
      count=count + 1;
      setCount(count);
    }
    
  }
  
  let removevalue=()=>{
    if(count > 0){
      setCount(count-1);
    }
    
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
        <div>

          <h2>counter : {count}</h2>
          <button onClick={addvalue}>add value</button>
          <br />
          <button onClick={removevalue}>remove value</button>
        </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
