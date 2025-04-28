import type { Context } from 'hono';
import * as todoModel from '../models/todo.model.ts';

type createTodoBody = {
  title: string;
  userId: number;
};

const createTodo = async (c: Context) => {
  try {
    const body = await c.req.json<createTodoBody>();
    if (!body.title || !body.userId)
      return c.json(
        {
          success: false,
          data: null,
          msg: 'Missing required fields',
        },
        400
      );
    const newTodo = await todoModel.createTodo(body.title, body.userId);
    return c.json({
      success: true,
      data: newTodo,
      msg: 'Created new Todo!',
    });
  } catch (e) {
    return c.json(
      {
        success: false,
        data: null,
        msg: `${e}`,
      },
      500
    );
  }
};
const getTodo = async (c: Context) => {
  try {
    const param = c.req.query('id');
    if (param !== undefined && param !== null) {
      const data = await todoModel.getTodo(parseInt(param));
      return c.json(data, 200);
    }
    return c.json(
      {
        success: false,
        data: null,
        msg: 'Missing required fields',
      },
      400
    );
  } catch (e) {
    return c.json(
      {
        success: false,
        data: null,
        msg: `${e}`,
      },
      500
    );
  }
};

const markTodoCompleted = async (c: Context) => {
  try {
    const param = c.req.query('id');
    if (param !== undefined && param !== null) {
      const data = await todoModel.markTodoCompleted(parseInt(param));
      return c.json(data, 200);
    }
    return c.json(
      {
        success: false,
        data: null,
        msg: 'Missing required fields',
      },
      400
    );
  } catch (e) {
    return c.json(
      {
        success: false,
        data: null,
        msg: `${e}`,
      },
      500
    );
  }
};

const updateTodoTitle = async (c: Context) => {
  try {
    const param = c.req.query('id');
    const body = await c.req.json<{ title: string }>();
    if (param !== undefined && param !== null) {
      if (!body.title)
        return c.json(
          {
            success: false,
            data: null,
            msg: 'Missing required fields',
          },
          400
        );
      const data = await todoModel.updateTodoTitle(parseInt(param), body.title);
      return c.json(data, 200);
    }
    return c.json(
      {
        success: false,
        data: null,
        msg: 'Missing required fields',
      },
      400
    );
  } catch (e) {
    return c.json(
      {
        success: false,
        data: null,
        msg: `${e}`,
      },
      500
    );
  }
};

const getAllTodosFromUser = async (c: Context) => {
  try {
    const param = c.req.query('userId');
    if (param !== undefined && param !== null) {
      const data = await todoModel.getAllTodosFromUser(parseInt(param));
      return c.json(data, 200);
    }
    return c.json(
      {
        success: false,
        data: null,
        msg: 'Missing required fields',
      },
      400
    );
  } catch (e) {
    return c.json(
      {
        success: false,
        data: null,
        msg: `${e}`,
      },
      500
    );
  }
};

const deleteTodo = async (c: Context) => {
  try {
    const query = c.req.query('id');
    if (query !== undefined && query !== null) {
      const data = await todoModel.deleteTodo(parseInt(query));
      return c.json(data, 200);
    }
    return c.json(
      {
        success: false,
        data: null,
        msg: 'Missing required fields',
      },
      400
    );
  } catch (e) {
    return c.json(
      {
        success: false,
        data: null,
        msg: `${e}`,
      },
      500
    );
  }
};

export {
  createTodo,
  getTodo,
  markTodoCompleted,
  updateTodoTitle,
  getAllTodosFromUser,
  deleteTodo,
};
