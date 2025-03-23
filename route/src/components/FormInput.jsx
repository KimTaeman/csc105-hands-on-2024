import React from 'react'

const FormInput = ({id, text, placeholder, error, func, type, min, max}) => {
  return (
    <div className="flex flex-col gap-2">
            <label htmlFor={id} className="font-semibold">{text}</label>
            <input 
            {...func}
            type={type} 
            placeholder={placeholder} 
            id={id} 
            min = {type === "number" ? min : {min}}
            max = {type === "number" ? max : {max}}
            className="px-3 py-2 border-1 border-gray-400 rounded-md" />
      
            {error && <span style={{color: "red"}}>{error.message}</span>}
          </div>
  )
}

export default FormInput