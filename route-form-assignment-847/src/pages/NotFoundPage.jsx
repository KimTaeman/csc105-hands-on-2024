import React from 'react'
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="flex justify-center items-center w-screen h-screen bg-gray-200">
      <div className="w-xs p-10 bg-white flex flex-col gap-5 text-center items-center rounded-lg shadow-lg">
        <h1 className="text-red-600 text-2xl font-bold">404 - Page Not Found</h1>
        <p>Oops! The page you're looking for doesn't exist.</p>
        <Link className="bg-blue-700 text-white p-2 rounded-lg w-50" to="/">Go back Home</Link>
      </div>
    </div>
  )
}

export default NotFoundPage