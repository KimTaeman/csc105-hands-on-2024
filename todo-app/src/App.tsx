import React from 'react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { IoIosAdd } from 'react-icons/io';
import { FaRegCircle } from 'react-icons/fa';
import { FaRegDotCircle } from 'react-icons/fa';

import './App.css';

type Todo = {
  id: number;
  name: string;
  success: boolean;
};

const todos: Todo[] = [
  {
    id: 1,
    name: 'Learn Frontend',
    success: false,
  },
  {
    id: 2,
    name: 'Learn Backend',
    success: false,
  },
];

const App = () => {
  return (
    <div className='w-screen h-screen bg-blue-300 flex flex-col gap-3 items-center justify-center'>
      {/* Add Todo Button */}
      <div className='flex bg-white rounded-2xl px-10 py-2'>
        <Button variant='outline' size='sm'>
          <IoIosAdd />
        </Button>
        {/* Input for new todo */}
        <input type='text' className='bg-purple-400' />
      </div>
      {/* Todo lists */}
      <div className='flex flex-col gap-10'>
        {todos.map((todo) => (
          <div key={todo.id} className='flex gap-10 bg-white rounded-2xl p-10'>
            {/* <span>
              <FaRegCircle />
              <FaRegDotCircle />
            </span> */}
            <h1>{todo.name}</h1>
            <p>{todo.success ? 'Success' : 'Not Success'}</p>
            <Button variant='outline' size='sm'>
              Edit
            </Button>
            <Button variant='outline' size='sm'>
              X
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
