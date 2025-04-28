import React from 'react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

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
    <div className='w-screen h-screen bg-blue-300 flex items-center justify-center'>
      <div className='flex flex-col items-center justify-center min-h-svh'>
        <Button>Click me</Button>
      </div>
      <div className='flex flex-col gap-10'>
        {todos.map((todo) => (
          <div key={todo.id} className='flex gap-10 bg-white rounded-2xl p-10'>
            <h1>{todo.name}</h1>
            <p>{todo.success ? 'Success' : 'Not Success'}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
