import React from 'react'

function Buttons({
    buttonText,
    type='button',
    bgColor='bg-blue-600',
    textColor='text-white',
    className='',
    ...props
}) {
  return (
    <button className={`px-6 py-2 rounded-lg ${bgColor} ${className} ${textColor}`}{...props}>
        {buttonText}
    </button>
  )
}

export default Buttons