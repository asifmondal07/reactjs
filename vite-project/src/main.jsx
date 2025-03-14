import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
const anotherElments=" visit Google"
const reactElement=React.createElement(
  "a",
  {href:'https://www.google.com',target:'_blank'},
  <button>click </button>,
  anotherElments
)
createRoot(document.getElementById('root')).render(
  reactElement
)
