import React from 'react';
import './StudentPanel.css'
import { Link, Outlet } from 'react-router-dom';

import { FaUserGraduate } from 'react-icons/fa';

const StudentPanel = () => {
    return (
        <div className='student-panel '>
            <div className="container shadow-xl">
                <div className="navigation-panel">
                    <Link className='shadow-xl' to={'/student-panel/profile'}><span className='icon'><FaUserGraduate></FaUserGraduate></span> Profile</Link>
                    <Link className='shadow-xl' to={'/student-panel/meal'}><span className='icon'><FaUserGraduate></FaUserGraduate></span> Meal</Link>
                    <Link className='shadow-xl' to={'/student-panel/room-status'}><span className='icon'><FaUserGraduate></FaUserGraduate></span> Room Status</Link>
                    <Link className='shadow-xl' to={'/student-panel/payment'}><span className='icon'><FaUserGraduate></FaUserGraduate></span> Payment</Link>
                    <Link className='shadow-xl' to={'/student-panel/visitors'}><span className='icon'><FaUserGraduate></FaUserGraduate></span> Visitors</Link>
                </div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default StudentPanel;