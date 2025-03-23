import React from 'react'
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/fav">Favourite</NavLink>
      </nav>
  )
}

export default Navbar