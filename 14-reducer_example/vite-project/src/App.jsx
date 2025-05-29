import { useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { increment,decrement,reset } from './store/slice.js'

function App() {
  const [count, setCount] = useState(0)
  const despath = useDispatch()
  const count1 = useSelector((state) => state.counter.count)

  const inc = () => {
    despath(increment(1))
    setCount(count + 1)
  }
  const dec = () => {
    despath(decrement(1))
    setCount(count - 1)
  }
  const rest = () => {
    despath(reset())
    setCount(0)
  }
  console.log(count1)

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
      <div className="card">
        <button className="btn" onClick={() => inc()}>increment {count1}</button>
        <button className="btn" onClick={() => dec()}>decrement {count1}</button>
        <button className="btn" onClick={() => rest()}>reset {count1}</button>
      </div>
      
    </>
  )
}

export default App
