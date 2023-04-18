import React from 'react';
import './StudentPanel.css'
import { Link, Outlet } from 'react-router-dom';

import { FaUserGraduate } from 'react-icons/fa';
import { MdFoodBank } from 'react-icons/md';
import { AiTwotoneHome, AiOutlineSchedule } from 'react-icons/ai';
import { BsCashCoin, BsFillPeopleFill } from 'react-icons/bs';

const StudentPanel = () => {
    return (
        <div className='student-panel '>
            <div className="container shadow-xl">
                <div className="left-section">
                    <div className="student-img flex justify-center items-center my-6">
                        <img className='w-1/2 rounded-full' src="https://www.westonloangroup.com/wp-content/uploads/2015/09/Headshot-Man.jpg" alt="Student Img" />
                    </div>
                    <div className="navigation-panel">
                        <Link className='shadow-xl' to={'/student-panel/profile'}><span className='icon'><FaUserGraduate></FaUserGraduate></span> Profile</Link>
                        <Link className='shadow-xl' to={'/student-panel/meal'}><span className='icon'><MdFoodBank></MdFoodBank></span> Meal</Link>
                        <Link className='shadow-xl' to={'/student-panel/room-status'}><span className='icon'><AiTwotoneHome></AiTwotoneHome></span> Room Status</Link>
                        <Link className='shadow-xl' to={'/student-panel/payment'}><span className='icon'><BsCashCoin></BsCashCoin></span> Payment</Link>
                        <Link className='shadow-xl' to={'/student-panel/visitors'}><span className='icon'><BsFillPeopleFill></BsFillPeopleFill></span> Visitors</Link>
                        <Link className='shadow-xl' to={'/student-panel/schedule'}><span className='icon'><AiOutlineSchedule></AiOutlineSchedule></span> Schedule</Link>
                    </div>
                </div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default StudentPanel;