import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='navbar-section'>
            <div className="navbar bg-base-100 shadow-lg my-5 rounded-xl">
                <div className="flex-1">
                    <Link className="btn btn-ghost normal-case text-xl">HMS</Link>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src="https://img.freepik.com/free-icon/user_318-159711.jpg" />
                                </div>
                            </label>
                            <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                                <li><Link to={'/student-panel'} className="justify-between">Student Panel</Link></li>
                                <li><Link to={'/admin-panel'} className="justify-between">Admin Panel</Link></li>
                                <li><Link>Update Profile</Link></li>
                                <li><Link>Logout</Link></li>
                            </ul>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;