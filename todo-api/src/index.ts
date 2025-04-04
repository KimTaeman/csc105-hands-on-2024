import { Hono } from 'hono';
import { logger } from 'hono/logger';
import todoRoutes from './routes/todo.routes.ts';
import { serve } from '@hono/node-server';

// Create a new Hono app
const app = new Hono();

// Add middleware for logging requests
app.use('*', logger());

// Root route
app.get('/', (c) => {
  return c.json({
    message: 'Welcome to our Todo API!',
    status: 'Server is running',
  });
});

// Mount todo routes
app.route('/todos', todoRoutes);

// Start the server
const port = 3000;

serve(
  {
    fetch: app.fetch,
    port,
  },
  (info) => console.log(`Server running at http://localhost:${info.port}`)
);
