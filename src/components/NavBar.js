import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav className='nav-header'>
      <NavLink to='/' exact className='nav-link'>
        Home
      </NavLink>
      <NavLink to='/about' className='nav-link'>
        About
      </NavLink>
      <NavLink to='/discover' exact className='nav-link'>
        Discover
      </NavLink>
    </nav>
  );
}
