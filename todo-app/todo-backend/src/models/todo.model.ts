import { db } from '../index.ts';

const GetTodo = async () => {
  const todo = await db.todo.findMany();
  return todo;
};

const AddTodo = async (newTodoName: string) => {
  const newtodo = await db.todo.create({
    data: {
      name: newTodoName,
    },
  });
  return newtodo;
};

const EditTodo = async (id: number, editTodoName: string) => {
  const editedTodo = await db.todo.update({
    where: {
      id: id,
    },
    data: {
      name: editTodoName,
    },
  });
  return editedTodo;
};

const SuccessTodo = async (id: number) => {
  // Fetch the current todo to check the current value of 'success'
  const currentTodo = await db.todo.findUnique({
    where: {
      id: id,
    },
  });

  if (!currentTodo) {
    throw new Error('Todo not found');
  }

  // Toggle the 'success' field
  const updatedTodo = await db.todo.update({
    where: {
      id: id,
    },
    data: {
      success: !currentTodo.success,
    },
  });

  return updatedTodo;
};

const DeleteTodo = async (id: number) => {
  const deletedTodo = await db.todo.delete({
    where: {
      id: id,
    },
  });
  return deletedTodo;
};

export { GetTodo, AddTodo, EditTodo, SuccessTodo, DeleteTodo };
