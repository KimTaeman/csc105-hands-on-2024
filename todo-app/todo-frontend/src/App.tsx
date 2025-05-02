import React, { useState, useEffect } from 'react';
import { Button } from './components/ui/button';
import { IoIosAdd } from 'react-icons/io';
import TodoCard from './components/my-components/TodoCard.jsx';
import { Axios } from '../axiosInstance.ts';
import {
  createTodo,
  getTodo,
  updateTodoName,
  deleteTodo,
  updateTodoStatus,
} from './api/todo.ts';

import './App.css';

const App = () => {
  const testConnection = async () => {
    try {
      const data = await Axios.get('/');
      console.log(data.data);
    } catch (e) {
      console.log(`Error fetching backend server: ${e}`);
    }
  };

  const fetchTodoData = async () => {
    const data = await getTodo();
    if (data.success) {
      console.log(data.data.data);
      setTodo(data.data.data);
    }
  };

  useEffect(() => {
    testConnection();
  }, []);

  useEffect(() => {
    fetchTodoData();
  }, []);

  type Todo = {
    id: number;
    name: string;
    success: boolean;
  };

  const [todo, setTodo] = useState<Todo[]>([]);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editingText, setEditingText] = useState<string>('');
  const [newTodoText, setNewTodoText] = useState<string>('');

  // Separate todos into active and completed
  const incompletedTodos = todo.filter((todo) => !todo.success);
  const completedTodos = todo.filter((todo) => todo.success);

  const handleAddTodo = async () => {
    if (newTodoText.trim() === '') return;

    const result = await createTodo(newTodoText);
    if (result.success) {
      setTodo((prev) => [...prev, result.data.data]);
      setNewTodoText('');
    }
  };

  const handleEditClick = (todo: Todo) => {
    setEditingId(todo.id);
    setEditingText(todo.name);
  };

  const handleSaveClick = async (id: number) => {
    const updatedTodo = await updateTodoName(id, editingText);

    if (updatedTodo) {
      setTodo((prev) =>
        prev.map((todo) =>
          todo.id === id ? { ...todo, name: editingText } : todo
        )
      );
      setEditingId(null);
      setEditingText('');
    } else {
      alert('Failed to save the edited todo.');
    }
  };

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

  const toggleSuccess = async (id: number) => {
    const toggle = await updateTodoStatus(id);
    if (toggle) {
      setTodo((prev) =>
        prev.map((todo) =>
          todo.id === id ? { ...todo, success: !todo.success } : todo
        )
      );
    } else {
      alert('Failed to update status');
    }
  };

  const handleDelete = async (id: number) => {
    const removeTodo = await deleteTodo(id);
    if (removeTodo) {
      setTodo((prev) => prev.filter((todo) => todo.id !== id));
    } else {
      alert('Failed to delete the edited todo.');
    }
  };

  return (
    <div className='flex items-center justify-center h-screen main-bg bg-cover w-screen p-3 sm:p-8 lg:p-15'>
      {/* Todo Form Container */}
      <div className='bg-[var(--todo-container-bg)] flex flex-col gap-10 md:gap-15 justify-center p-10 w-full rounded-2xl'>
        <h1 className='text-2xl lg:text-4xl font-bold'>Todo List</h1>
        <div className='text-xs md:text-lg lg:text-xl flex flex-col gap-5'>
          {/* Add Todo Section */}
          <div className='flex bg-violet-400 text-white rounded-2xl px-10 py-2 gap-2'>
            <Button variant='none' onClick={handleAddTodo}>
              <IoIosAdd style={{ fontSize: 'px' }} />
            </Button>
            <input
              type='text'
              className='px-2 py-1 rounded-md placeholder:text-gray-200 text-white outline-none selection:text-white selection:bg-purple-300 text-sm lg:text-xl w-full'
              placeholder='Add new todo...'
              value={newTodoText}
              onChange={(e) => setNewTodoText(e.target.value)}
              onKeyDown={(e) => handleInputKeyDown(e)}
            />
          </div>

          {/* Incompleted Todos Section */}
          <div className='flex flex-col gap-5'>
            {incompletedTodos.length === 0 && todo.length > 0 ? (
              <div className='text-center text-gray-500 bg-[#ffffff64] w-40 h-40 mx-auto flex justify-center items-center rounded-2xl font-semibold text-gray-400'>
                All tasks completed!
              </div>
            ) : (
              <>
                {incompletedTodos.length > 0 && (
                  <>
                    {incompletedTodos.map((todo) => (
                      <TodoCard
                        key={todo.id}
                        id={todo.id}
                        success={todo.success}
                        name={todo.name}
                        handleSuccessToggle={() => toggleSuccess(todo.id)}
                        handleSave={() => handleSaveClick(todo.id)}
                        handleEdit={() => handleEditClick(todo)}
                        handleDelete={() => handleDelete(todo.id)}
                        editingId={editingId}
                        editingText={editingText}
                        handleInputChange={(e) =>
                          setEditingText(e.target.value)
                        }
                        handleKeyDown={(e) => handleInputKeyDown(e, todo.id)}
                      />
                    ))}
                  </>
                )}
              </>
            )}
          </div>

          {/* Completed Todos Section */}
          {completedTodos.length > 0 && (
            <div className='flex flex-col gap-5 mt-5'>
              <h2 className='font-semibold text-gray-700'>Completed</h2>
              {completedTodos.map((todo) => (
                <TodoCard
                  key={todo.id}
                  id={todo.id}
                  success={todo.success}
                  name={todo.name}
                  handleSuccessToggle={() => toggleSuccess(todo.id)}
                  handleSave={() => handleSaveClick(todo.id)}
                  handleEdit={() => handleEditClick(todo)}
                  handleDelete={() => handleDelete(todo.id)}
                  editingId={editingId}
                  editingText={editingText}
                  handleInputChange={(e) => setEditingText(e.target.value)}
                  handleKeyDown={(e) => handleInputKeyDown(e, todo.id)}
                />
              ))}
            </div>
          )}

          {/* No todos at all */}
          {todo.length === 0 && (
            <div className='text-center text-gray-500 bg-[#ffffff64] w-40 h-40 mx-auto flex justify-center items-center rounded-2xl font-semibold text-gray-400'>
              No todos available :(
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
