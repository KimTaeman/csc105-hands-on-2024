import React from 'react';
import AddForm from "./AddForm";
import AddList from "./AddList";
import { v4 as uuidv4 } from 'uuid';
import { useState } from "react";
import "../styles/ListWrapper.css";

const ListWrapper = () => {
  const [items, setItems] = useState([]);

  // Adding an item to the list
  const addItem = (item) => { 
    setItems([
      ...items, 
      {
        id: uuidv4(),
        name: item,
        isCompleted: false
      }
    ]);
  }

  // Deleting an item from the list
  const deleteItem = (id) => {  
    setItems(items.filter(item => item.id !== id));
  }

  // Toggling an item's completion status
  const toggleCompleteStat = (id) => {
    setItems(
      items.map(item => item.id === id ? {...item, isCompleted: !item.isCompleted} : item)
    );
  }

  return (
    <div className="WrapperContainer">
      <AddForm addItem={addItem}/>
      {items.map((item) => (
        <AddList
          key={item.id} 
          item={item}
          deleteItem={deleteItem} 
          toggleCompleteStat={toggleCompleteStat} 
        />
      ))}
    </div>
  );
}

export default ListWrapper;