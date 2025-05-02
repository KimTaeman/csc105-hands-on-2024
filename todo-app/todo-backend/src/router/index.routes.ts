import { Hono } from "hono";
import { todoRouter } from "./todo.routes.ts";

const mainRouter = new Hono();

mainRouter.route("/todo", todoRouter);

export { mainRouter };
