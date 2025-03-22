import React from 'react'

const Button = ({text, style}) => {
  return (
    <button className={`bg-green-700  rounded-3xl py-1.5 px-3 md:px-5 text-white text-center hover:bg-green-900 cursor-pointer ${style}`}>{text}</button>
  )
}

export default Button