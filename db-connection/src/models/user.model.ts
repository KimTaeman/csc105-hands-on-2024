import { db } from '../index.ts';

const isDuplicate = async (firstName: string, lastName: string) => {
  const user = await db.user.findFirst({
    where: {
      firstName: firstName,
      lastName: lastName,
    },
  });
  return user;
};

const createUser = async (firstName: string, lastName: string) => {
  const user = await db.user.create({
    data: {
      firstName: firstName,
      lastName: lastName,
    },
  });
  return user;
};

const getAllUsers = async () => {
  const users = await db.user.findMany();
  return users;
};

const getUserById = async (id: number) => {
  const user = await db.user.findUnique({
    where: {
      id: id,
    },
  });
  return user;
};

const updateUser = async (id: number, firstName: string, lastName: string) => {
  const isUserExist = await db.user.findUnique({
    where: {
      id: id,
    },
  });
  if (!isUserExist) {
    throw new Error('User not found');
  }
  const user = await db.user.update({
    where: {
      id: id,
    },
    data: {
      firstName: firstName,
      lastName: lastName,
    },
  });
  return user;
};

const getAllTodosFromUser = async (userId: number) => {
  try {
    const isUserExist = await db.user.findUnique({
      where: {
        id: userId,
      },
    });
    if (!isUserExist) {
      throw new Error('User not found');
    }
    const todos = await db.todo.findMany({
      where: {
        userId: userId,
      },
    });
    return todos;
  } catch (e) {
    throw e;
  }
};

export {
  isDuplicate,
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  getAllTodosFromUser,
};
