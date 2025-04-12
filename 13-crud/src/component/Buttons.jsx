import React from 'react'

function Buttons({
    ButtonsText,
    type = 'button',
    bgColor = 'bg-blue-500',
    textColor = 'text-white',
    className = '',
    ...props
}) {
  return (
    <div className={`px-06 py-2 rounded-lg ${bgColor} ${className} ${textColor}`}{...props}>{ButtonsText}</div>
  )
}

export default Buttons