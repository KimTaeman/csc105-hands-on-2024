import React from 'react'
import { useState } from "react";
import "../styles/AddList.css";

const AddList = ({item, deleteItem, toggleCompleteStat}) => {

  const itemNameContainer = {
    width: '100%',
    height: 'auto',
    backgroundColor: item.isCompleted ? '#17964c42' : 'transparent',
    cursor: 'pointer',
    borderRadius: '5px',
  };


  return (
    <div className="AddList" style={itemNameContainer}>
      <div onClick={() => toggleCompleteStat(item.id)}>
          <p className={`${item.isCompleted ? 'complete' : ''}`}>{item.name}</p>
      </div>
      <div>
        <button style={{backgroundColor: "yellow", color: "black"}}>Edit</button>
        <button style={{backgroundColor: "red", color: "white"}}>Delete</button>
      </div>
    </div>
  )
}

export default AddList;