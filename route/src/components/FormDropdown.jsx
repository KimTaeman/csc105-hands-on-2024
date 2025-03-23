import { Dropdown } from "primereact/dropdown";
import React from 'react'

const FormDropdown = ({id, label, value, handleFunc, options, optionLabel, error, errFunc}) => {
  return (
    <div className="flex flex-col gap-2 focus:outline-solid">
      <label htmlFor={id} className="font-bold">{label}</label>
      <Dropdown 
        {...errFunc}
        value={value} 
        onChange={(e) => handleFunc(e.value)} 
        options={options} 
        optionLabel={optionLabel} 
        placeholder="Select" 
        className="w-full md:w-14rem bg-white border-1 border-gray-400 px-3 py-2 rounded-md" 
        id={id}
        panelClassName="bg-white border-1 border-gray-400 px-3 py-2 rounded-md hover:"
      />
      {error && <span style={{color: "red"}}>{error.message}</span>}
    </div>
  )
}

export default FormDropdown