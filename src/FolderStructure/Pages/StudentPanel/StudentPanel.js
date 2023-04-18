import React from 'react';
import './StudentPanel.css'
import { Link, Outlet } from 'react-router-dom';

import { FaUserGraduate } from 'react-icons/fa';

const StudentPanel = () => {
    return (
        <div className='student-panel '>
            <div className="container shadow-xl">
                <div className="left-section">
                    <div className="navigation-panel">
                        <Link className='shadow-xl' to={'/student-panel/profile'}><span className='icon'><FaUserGraduate></FaUserGraduate></span> Profile</Link>
                        <Link className='shadow-xl' to={'/student-panel/meal'}><span className='icon'><FaUserGraduate></FaUserGraduate></span> Meal</Link>
                        <Link className='shadow-xl' to={'/student-panel/room-status'}><span className='icon'><FaUserGraduate></FaUserGraduate></span> Room Status</Link>
                        <Link className='shadow-xl' to={'/student-panel/payment'}><span className='icon'><FaUserGraduate></FaUserGraduate></span> Payment</Link>
                        <Link className='shadow-xl' to={'/student-panel/visitors'}><span className='icon'><FaUserGraduate></FaUserGraduate></span> Visitors</Link>
                    </div>
                    <div className="student-img flex justify-center items-center mt-6">
                        <img className='w-1/2 rounded-full' src="https://www.westonloangroup.com/wp-content/uploads/2015/09/Headshot-Man.jpg" alt="Student Img" />
                    </div>
                </div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default StudentPanel;