import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { PrismaClient } from "./generated/prisma/index.js";
import { mainRouter } from "./router/index.routes.ts";
import { logger } from "hono/logger";
import { cors } from "hono/cors";

const app = new Hono();
export const db = new PrismaClient();

app.use(
  cors({
    origin: "http://localhost:5173", // Your frontend URL
  })
);
app.use(logger());

app.get("/", async (c) => {
  try {
    await db.todo.findFirst(); // or any small query
    console.log("✅ Connected to Prisma DB");
    return c.text("Hello Hono! Prisma DB connected successfully.");
  } catch (err) {
    console.error("❌ Failed to connect to DB:", err);
    return c.text("❌ Failed to connect to Prisma DB.");
  }
});

app.route("", mainRouter);

app.get("/test-db", async (c) => {
  try {
    const todos = await db.todo.findMany(); // change 'todo' to your actual model
    return c.json({ success: true, data: todos });
  } catch (error) {
    console.error(error);
    return c.json({ success: false, error: error.message });
  }
});

serve(
  {
    fetch: app.fetch,
    port: 8000,
  },
  (info) => {
    console.log(`Server is running on http://localhost:${info.port}`);
  }
);
