import { db } from '../index.ts';

const createTodo = async (title: string, userId: number) => {
  const todo = await db.todo.create({
    data: {
      title: title,
      userId: userId,
    },
  });
  return todo;
};
const getTodo = async (id: number) => {
  const todo = await db.todo.findUnique({
    where: {
      id: id,
    },
    include: {
      user: true,
    },
  });
  return todo;
};

const markTodoCompleted = async (id: number) => {
  const isTodoExist = await db.todo.findUnique({
    where: {
      id: id,
    },
  });
  if (!isTodoExist) {
    throw new Error('Todo not found');
  }
  const todo = await db.todo.update({
    where: {
      id: id,
    },
    data: {
      completed: true,
    },
  });
  return todo;
};

const updateTodoTitle = async (id: number, title: string) => {
  const isTodoExist = await db.todo.findUnique({
    where: {
      id: id,
    },
  });
  if (!isTodoExist) {
    throw new Error('Todo not found');
  }
  const todo = await db.todo.update({
    where: {
      id: id,
    },
    data: {
      title: title,
    },
  });
  return todo;
};

const getAllTodosFromUser = async (userId: number) => {
  const todos = await db.todo.findMany({
    where: {
      userId: userId,
    },
  });
  return todos;
};

export {
  createTodo,
  getTodo,
  markTodoCompleted,
  updateTodoTitle,
  getAllTodosFromUser,
};
