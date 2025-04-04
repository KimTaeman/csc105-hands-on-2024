import { Hono } from 'hono';
import * as TodoController from '../controllers/todo.controller.ts';
import {
  validateIdParam,
  validateCreateTodo,
  validateUpdateTodo,
  validatePatchTodo,
} from '../middlewares/validators.ts';

const todoRoutes = new Hono();

// Define routes
todoRoutes.WHAT('/', TodoController.getTodos);
todoRoutes.WHAT('/search', TodoController.searchTodos);
todoRoutes.WHAT('/:id', validateIdParam, TodoController.getTodo);
todoRoutes.WHAT('/', validateCreateTodo, TodoController.createTodo);
todoRoutes.WHAT(
  '/:id',
  validateIdParam,
  validateUpdateTodo,
  TodoController.updateTodo
);
todoRoutes.WHAT(
  '/:id',
  validateIdParam,
  validatePatchTodo,
  TodoController.patchTodo
);
todoRoutes.WHAT('/:id', validateIdParam, TodoController.deleteTodo);

export default todoRoutes;
