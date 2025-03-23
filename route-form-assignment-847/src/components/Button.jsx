import React from 'react'

const Button = ({text}) => {
  return (
    <button className="bg-blue-700 text-white p-2 rounded-lg w-full cursor-pointer" type="submit">{text}</button>
  )
}

export default Button