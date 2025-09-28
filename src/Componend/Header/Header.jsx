import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './heders.css'

const Header = () => {
  return (
    <div >
      <nav className='text-center  bg-gray-400' >
        <NavLink className='mr-5' to="/laptop">Laptop</NavLink>
        <NavLink className='mr-5'  to="/home">Home</NavLink>
        <NavLink className='mr-5' to="/mylist">MyList</NavLink>
        <NavLink className='mr-5' to="/users">Users</NavLink>
        <NavLink className='mr-5' to="/users2">Users2</NavLink>
        <NavLink className='mr-5' to="/post">Post</NavLink>
      </nav>
    </div>
  );
};

export default Header;
