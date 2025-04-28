import React from 'react';
import { Button } from './components/ui/button';
import { FaRegCircle } from 'react-icons/fa';
import { FaRegDotCircle } from 'react-icons/fa';

const TodoCard = ({ id, success, name }) => {
  return (
    <div key={id} className='flex gap-5 items-center bg-white rounded-2xl p-5'>
      {/* Success Toggle */}
      <span
        onClick={() => toggleSuccess(id)}
        className='cursor-pointer text-2xl'
      >
        {success ? <FaRegDotCircle /> : <FaRegCircle />}
      </span>

      {/* Todo Text or Edit Input */}
      {editingId === todo.id ? (
        <input
          value={editingText}
          onChange={(e) => setEditingText(e.target.value)}
          onKeyDown={(e) => handleInputKeyDown(e, todo.id)}
          className='border-b border-gray-400 outline-none'
        />
      ) : (
        <h1 className={success ? 'line-through' : ''}>{name}</h1>
      )}

      {/* Buttons */}
      {editingId === id ? (
        <Button
          variant='outline'
          size='sm'
          onClick={() => handleSaveClick(todo.id)}
        >
          Save
        </Button>
      ) : (
        <Button
          variant='outline'
          size='sm'
          onClick={() => handleEditClick(todo)}
        >
          Edit
        </Button>
      )}

      <Button variant='outline' size='sm' onClick={() => handleDelete(todo.id)}>
        X
      </Button>
    </div>
  );
};

export default TodoCard;
