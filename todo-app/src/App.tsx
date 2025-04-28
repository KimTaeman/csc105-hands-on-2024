import React, { useState } from 'react';
import { Button } from './components/ui/button';
import { IoIosAdd } from 'react-icons/io';
import { FaRegCircle } from 'react-icons/fa';
import { FaRegDotCircle } from 'react-icons/fa';

import './App.css';

type Todo = {
  id: number;
  name: string;
  success: boolean;
};

const initialTodos: Todo[] = [
  {
    id: 1,
    name: 'Learn Frontend',
    success: true,
  },
  {
    id: 2,
    name: 'Learn Backend',
    success: false,
  },
];

const App = () => {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editingText, setEditingText] = useState<string>('');
  const [newTodoText, setNewTodoText] = useState<string>('');

  // Handle adding new todo
  const handleAddTodo = () => {
    if (newTodoText.trim() === '') return;
    const newTodo: Todo = {
      id: Date.now(),
      name: newTodoText,
      success: false,
    };
    setTodos((prev) => [...prev, newTodo]);
    setNewTodoText('');
  };

  // Start editing a todo
  const handleEditClick = (todo: Todo) => {
    setEditingId(todo.id);
    setEditingText(todo.name);
  };

  // Save edited todo
  const handleSaveClick = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, name: editingText } : todo
      )
    );
    setEditingId(null);
    setEditingText('');
  };

  // Handle input key events (Enter to save or add)
  const handleInputKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    id?: number
  ) => {
    if (e.key === 'Enter') {
      if (editingId !== null && id !== undefined) {
        handleSaveClick(id);
      } else {
        handleAddTodo();
      }
    }
  };

  // Toggle success status
  const toggleSuccess = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, success: !todo.success } : todo
      )
    );
  };

  // Delete a todo
  const handleDelete = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='bg-blue-300 flex flex-col gap-5 items-center justify-center p-10 w-100 h-100 rounded-2xl'>
        {/* Add Todo Section */}
        <div className='flex bg-white rounded-2xl px-10 py-2 gap-2'>
          <Button variant='outline' size='sm' onClick={handleAddTodo}>
            <IoIosAdd />
          </Button>
          <input
            type='text'
            className='px-2 py-1 rounded-md'
            placeholder='Add new todo...'
            value={newTodoText}
            onChange={(e) => setNewTodoText(e.target.value)}
            onKeyDown={(e) => handleInputKeyDown(e)}
          />
        </div>

        {/* Todo List */}
        <div className='flex flex-col gap-5'>
          {todos.map((todo) => (
            <div
              key={todo.id}
              className='flex gap-5 items-center bg-white rounded-2xl p-5'
            >
              {/* Success Toggle */}
              <span
                onClick={() => toggleSuccess(todo.id)}
                className='cursor-pointer text-2xl'
              >
                {todo.success ? <FaRegDotCircle /> : <FaRegCircle />}
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
                <h1 className={todo.success ? 'line-through' : ''}>
                  {todo.name}
                </h1>
              )}

              {/* Buttons */}
              {editingId === todo.id ? (
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

              <Button
                variant='outline'
                size='sm'
                onClick={() => handleDelete(todo.id)}
              >
                X
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
