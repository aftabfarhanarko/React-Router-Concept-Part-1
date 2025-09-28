import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './heders.css'

const Header = () => {
  return (
    <div >
      <h1>This is Header Component</h1>
      <nav className='text-center  bg-gray-400' >
        <NavLink className='mr-5' to="/laptop">Laptop</NavLink>
        <NavLink className='mr-5'  to="/home">Home</NavLink>
        <NavLink className='mr-5' to="/mylist">MyList</NavLink>
      </nav>
    </div>
  );
};

export default Header;
