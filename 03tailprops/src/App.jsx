import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  
  let myobg={
    userName:"Asif Modnal",
    age:25
  }

  return (
    <>
      
     <Card userName="AsifMondal" age={25} /> 
     <br />
     <Card userName='Soaif Mondal'/> 
      
    </>
  )
}

export default App
