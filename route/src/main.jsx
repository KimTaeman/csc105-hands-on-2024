import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"; //import these modules
import './index.css'
import App from './App.jsx'
import LoginPage from "./pages/LoginPage.jsx";
import FavouritesPage from "./pages/FavouritesPage.jsx";
import FavouriteDetailPage from "./pages/FavouriteDetailPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";


const router = createBrowserRouter([
  {
    path: "/", // Home route
    element: <App />, // Render the App component
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "/fav",
        element: <FavouritesPage />,
      },
      {
        path: "/fav/:number",
        element: <FavouriteDetailPage />,
      },
    ]
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignUpPage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
