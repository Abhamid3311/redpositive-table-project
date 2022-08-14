import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const menuItems = <>
        <li className='hover:text-orange-700'><Link to={'/'}>Home</Link></li>
        <li className='hover:text-orange-700'><a href="#">New Entry</a></li>
        <li className='hover:text-orange-700'><a href="#">Table</a></li>
    </>
    return (
        <header class="navbar bg-base-100">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to={'/'} class="btn btn-ghost normal-case text-2xl text-orange-700">Red Positive</Link>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>

            <div class="navbar-end">
                <button href='#' class="btn btn-ghost hover:text-orange-700 mr-3">Login</button>
            </div>
        </header>
    );
};

export default Header;