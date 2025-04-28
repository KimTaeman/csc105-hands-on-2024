import { Hono } from 'hono';
import * as userController from '../controllers/user.controller.ts';

const userRouter = new Hono();

userRouter.post('/', userController.createUser);
// POST: http://localhost:3000/users
//  {
//   "firstName": "hahah",
//   "lastName": "hahah"
// }
userRouter.get('/all', userController.getAllUsers);
// GET: http://localhost:3000/users/all
userRouter.get('/', userController.getUserById); // GET: http://localhost:3000/users?id=1
userRouter.patch('/', userController.updateUser);
// PATCH: http://localhost:3000/users?id=1
//  {
//   "firstName": "hahah",
//   "lastName": "hahah"
// }
// Getting all todos from a user using user route
userRouter.get('/:userId/todos', userController.getAllTodosFromUser);
// GET: http://localhost:3000/users/1/todos

export { userRouter };
