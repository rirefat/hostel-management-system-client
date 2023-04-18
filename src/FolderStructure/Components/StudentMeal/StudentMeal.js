import React, { useState } from 'react';
import './StudentMeal.css'
import { MdFreeBreakfast } from 'react-icons/md';
import { GiHotMeal, GiMeal } from 'react-icons/gi';

const StudentMeal = () => {
    const [meals, setMeals] = useState([]);
    // const [day, setDay] = useState('');
    // const [date, setDate] = useState('');
    // const [month, setMonth] = useState('');
    // const [year, setYear] = useState('');

    const today = new Date();    

    // const dayList = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    // const monthList = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    // let currentday = today.getDay();
    let currentDate = today.getDate();
    let currentMonth = today.getMonth();
    let currentYear = today.getFullYear();

    // setDay(dayList[currentday]);
    // setDate(currentDate);
    // setMonth(monthList[currentMonth]);
    // setYear(currentYear);

    return (
        <div className='student-meal'>
            <h1 className='text-center font-medium text-2xl my-10'>Daily Meal</h1>
            <div className="meal-container flex items-center justify-center gap-8 my-14">
                <div className="meal rounded-xl shadow-lg">
                    <span className="icon text-center text-6xl"><MdFreeBreakfast></MdFreeBreakfast></span>
                    <h3 className='text-center text-2xl my-4'>Breakfast</h3>
                    <select className="select select-bordered w-full max-w-xs">
                        <option disabled selected>Take breakfast today?</option>
                        <option>Yes</option>
                        <option>No</option>
                    </select>
                </div>
                <div className="meal rounded-xl shadow-lg">
                    <span className="icon text-center text-6xl"><GiHotMeal></GiHotMeal></span>
                    <h3 className='text-center text-2xl my-4'>Lunch</h3>
                    <select className="select select-bordered w-full max-w-xs">
                        <option disabled selected>Take lunch today?</option>
                        <option>Yes</option>
                        <option>No</option>
                    </select>
                </div>
                <div className="meal rounded-xl shadow-lg">
                    <span className="icon text-center text-6xl"><GiMeal></GiMeal></span>
                    <h3 className='text-center text-2xl my-4'>Dinner</h3>
                    <select className="select select-bordered w-full max-w-xs">
                        <option disabled selected>Take dinner today?</option>
                        <option>Yes</option>
                        <option>No</option>
                    </select>
                </div>
            </div>

            <h2 className='text-center font-light text-2xl'>Today's Date: {currentDate}/{currentMonth+1}/{currentYear}</h2>
        </div>
    );
};

export default StudentMeal;