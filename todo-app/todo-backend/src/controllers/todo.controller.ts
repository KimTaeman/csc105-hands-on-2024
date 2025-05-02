import type { Context } from 'hono';
import * as todoModel from '../models/todo.model.ts';
import type {
  AddTodoRequestBody,
  EditTodoRequestBody,
} from '../types/todo.types.ts';

const GetTodo = async (c: Context) => {
  try {
    const todos = await todoModel.GetTodo();
    return c.json({
      success: true,
      data: todos,
      msg: 'Successfully get all todo',
    });
  } catch (e) {
    return c.json(
      {
        success: false,
        data: null,
        msg: `Internal Server Error : ${e}`,
      },
      500
    );
  }
};

const AddTodo = async (c: Context) => {
  try {
    const body = await c.req.json<AddTodoRequestBody>();
    if (!body.name) {
      return c.json({
        success: false,
        data: null,
        msg: 'Missing Required Field',
      });
    }
    const newTodo = await todoModel.AddTodo(body.name);
    return c.json({
      success: true,
      data: newTodo,
      msg: 'Successfully created new todo',
    });
  } catch (e) {
    return c.json(
      {
        success: false,
        data: null,
        msg: `Internal Server Error : ${e}`,
      },
      500
    );
  }
};

const EditTodoName = async (c: Context) => {
  try {
    const body = await c.req.json<EditTodoRequestBody>();
    if (!body.name || !body.id) {
      return c.json({
        success: false,
        data: null,
        msg: 'Missing required fields',
      });
    }
    const editedTodo = await todoModel.EditTodo(body.id, body.name);
    return c.json({
      success: true,
      data: editedTodo,
      msg: 'Successfully edited todo data',
    });
  } catch (e) {
    return c.json(
      {
        success: false,
        data: null,
        msg: `Internal Server Error : ${e}`,
      },
      500
    );
  }
};

const CompleteTodo = async (c: Context) => {
  try {
    const id = c.req.param('id');
    if (isNaN(parseInt(id)))
      return c.json({
        success: false,
        data: null,
        msg: 'Wrong data format',
      });
    const completedTodo = await todoModel.SuccessTodo(parseInt(id));
    return c.json({
      success: true,
      data: completedTodo,
      msg: 'Successfully set todo status to completed',
    });
  } catch (e) {
    return c.json(
      {
        success: false,
        data: null,
        msg: `Internal Server Error : ${e}`,
      },
      500
    );
  }
};

const DeleteTodo = async (c: Context) => {
  try {
    const id = c.req.param('id');
    if (isNaN(parseInt(id))) {
      return c.json({
        success: false,
        data: null,
        msg: 'Wrong data format',
      });
    }
    const deletedTodo = await todoModel.DeleteTodo(parseInt(id));
    return c.json({
      success: true,
      data: deletedTodo,
      msg: 'Deleted Todo',
    });
  } catch (e) {
    return c.json(
      {
        success: false,
        data: null,
        msg: `Internal Server Error : ${e}`,
      },
      500
    );
  }
};

export { GetTodo, AddTodo, EditTodoName, CompleteTodo, DeleteTodo };
