import React from 'react';
import { NavLink } from 'react-router-dom';
import "../Style/Navbar.css";

const Navbar = () => {
  return (
    <nav id='navbar'>
      <NavLink className='link' to="/pokemon">Pokemon Page</NavLink>
      <NavLink className='link' to="/types">Types Page</NavLink>
      <NavLink className='link' to="/favorites">Favourite Page</NavLink>
    </nav>
  )
}

export default Navbar;
