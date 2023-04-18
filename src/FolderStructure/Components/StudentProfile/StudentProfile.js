import React, { useEffect, useState } from 'react';
import './StudentProfile.css';

const StudentProfile = () => {
    const [studentInfo, setStudentInfo] = useState({});

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users/1")
            .then(res => res.json())
            .then(data => setStudentInfo(data))
    }, []);

    console.log(studentInfo.name)

    return (
        <div className='student-profile'>
            <h1 className='text-center font-medium text-2xl'>Student Profile</h1>

            <div className="info-container">
                <div className="overflow-x-auto">
                    <h2 className='text-xl my-4'>Student's Info</h2>
                    <table className="table w-full">
                        <tbody>
                            <tr>
                                <td className='font-bold w-80'>Student Name</td>
                                <td className='w-1/2'>{} {}</td>
                                <td><button className="btn btn-outline btn-info update-btn btn-sm">Update</button></td>
                            </tr>
                            <tr>
                                <td className='font-bold w-80'>Student ID</td>
                                <td className='w-1/2'>Desktop Support Technician</td>
                                <td><button className="btn btn-outline btn-info update-btn btn-sm">Update</button></td>
                            </tr>
                            <tr>
                                <td className='font-bold w-80'>Student's Email</td>
                                <td className='w-1/2'>abc@email.com</td>
                                <td><button className="btn btn-outline btn-info update-btn btn-sm">Update</button></td>
                            </tr>
                            <tr>
                                <td className='font-bold w-80'>Blood Group</td>
                                <td className='w-1/2'>B+</td>
                                <td><button className="btn btn-outline btn-info update-btn btn-sm">Update</button></td>
                            </tr>
                            <tr>
                                <td className='font-bold w-80'>Gender</td>
                                <td className='w-1/2'>Male</td>
                                <td><button className="btn btn-outline btn-info update-btn btn-sm">Update</button></td>
                            </tr>
                            <tr>
                                <td className='font-bold w-80'>Address</td>
                                <td className='w-1/2'>address</td>
                                <td><button className="btn btn-outline btn-info update-btn btn-sm">Update</button></td>
                            </tr>
                        </tbody>
                    </table>

                    <h2 className='text-xl my-4'>Guardian's Info</h2>
                    <table className="table w-full">
                        <tbody>
                            <tr>
                                <td className='font-bold w-80'>Father's Name</td>
                                <td className='w-1/2'>Abul Kalam Azad</td>
                                <td><button className="btn btn-outline btn-info update-btn btn-sm">Update</button></td>
                            </tr>
                            <tr>
                                <td className='font-bold w-80'>Mothers's Name</td>
                                <td className='w-1/2'>Abul Kalam Azad</td>
                                <td><button className="btn btn-outline btn-info update-btn btn-sm">Update</button></td>
                            </tr>
                            <tr>
                                <td className='font-bold w-80'>Parent's Email</td>
                                <td className='w-1/2'>abc@email.com</td>
                                <td><button className="btn btn-outline btn-info update-btn btn-sm">Update</button></td>
                            </tr>
                            <tr>
                                <td className='font-bold w-80'>Parent's Phone</td>
                                <td className='w-1/2'>1212121212121</td>
                                <td><button className="btn btn-outline btn-info update-btn btn-sm">Update</button></td>
                            </tr>
                        </tbody>
                    </table>

                    <h2 className='text-xl my-4'>Academin Info</h2>
                    <table className="table w-full">
                        <tbody>
                            <tr>
                                <td className='font-bold w-80'>Department</td>
                                <td className='w-1/2'>Department of CSE</td>
                                <td><button className="btn btn-outline btn-info update-btn btn-sm">Update</button></td>
                            </tr>
                            <tr>
                                <td className='font-bold w-80'>Academic Year</td>
                                <td className='w-1/2'>2020</td>
                                <td><button className="btn btn-outline btn-info update-btn btn-sm">Update</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default StudentProfile;