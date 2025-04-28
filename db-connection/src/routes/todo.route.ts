import { Hono } from 'hono';
import * as todoController from '../controllers/todo.controller.ts';

const todoRouter = new Hono();
todoRouter.post('/', todoController.createTodo);
// POST: http://localhost:3000/todos
//  {
//   "title": "hahah",
//   "userId": 2
// }
todoRouter.get('/', todoController.getTodo);
// GET: http://localhost:3000/todos?id=1
todoRouter.patch('/complete', todoController.markTodoCompleted);
// PATCH: http://localhost:3000/todos/complete?id=1
todoRouter.patch('/newtitle', todoController.updateTodoTitle);
// PATCH: http://localhost:3000/todos/newtitle?id=1
// {
//   "title": "hahah"
// }

// Getting all todos from a user using todo route
todoRouter.get('/user', todoController.getAllTodosFromUser);
// GET: http://localhost:3000/todos/user?userId=1

// delete a todo using todo route
todoRouter.delete('/', todoController.deleteTodo);
// DELETE: http://localhost:3000/todos?id=1

export { todoRouter };
