import type { Context } from 'hono';
import * as userModel from '../models/user.model.ts';

type createUserBody = {
  firstName: string;
  lastName: string;
};
const createUser = async (c: Context) => {
  try {
    const body = await c.req.json<createUserBody>();
    if (!body.firstName || !body.lastName)
      return c.json(
        {
          success: false,
          data: null,
          msg: 'Missing required fields',
        },
        400
      );
    if (await userModel.isDuplicate(body.firstName, body.lastName)) {
      return c.json({
        success: false,
        data: null,
        msg: 'firstName or lastName is duplicated',
      });
    }
    const newUser = await userModel.createUser(body.firstName, body.lastName);
    return c.json({
      success: true,
      data: newUser,
      msg: 'Created new User!',
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

const getAllUsers = async (c: Context) => {
  try {
    const data = await userModel.getAllUsers();
    return c.json(data, 200);
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

const getUserById = async (c: Context) => {
  try {
    const query = c.req.query('id');
    if (query !== undefined && query !== null) {
      const data = await userModel.getUserById(parseInt(query));
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

const updateUser = async (c: Context) => {
  try {
    const query = c.req.query('id');
    const body = await c.req.json<createUserBody>();
    if (query !== undefined && query !== null) {
      if (!body.firstName || !body.lastName)
        return c.json(
          {
            success: false,
            data: null,
            msg: 'Missing required fields',
          },
          400
        );
      const data = await userModel.updateUser(
        parseInt(query),
        body.firstName,
        body.lastName
      );
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
    const param = c.req.param('userId');
    if (param !== undefined && param !== null) {
      const data = await userModel.getAllTodosFromUser(parseInt(param));
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
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  getAllTodosFromUser,
};
