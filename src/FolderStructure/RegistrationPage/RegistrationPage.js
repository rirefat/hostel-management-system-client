import React from 'react';
import './RegistrationPage.css'
import { CgProfile } from 'react-icons/cg';
import { Link } from 'react-router-dom';

const RegistrationPage = () => {
    return (
        <div className='registration-section'>
            <form className='registration-form shadow-lg mt-8'>
                <div className="icon text-6xl mb-4"><CgProfile></CgProfile></div>
                <h2 className='text-4xl mb-10'>User Registration</h2>

                <div className='main-container mt-4'>
                    <input required type='text' placeholder="First name" className="w-96 mb-5 input input-bordered w-full max-w-xs" />
                    <input required type='text' placeholder="Last name" className="w-96 mb-5 input input-bordered w-full max-w-xs" />
                    <input required type='email' placeholder="Email Address" className="w-96 mb-5 input input-bordered w-full max-w-xs" />
                    <input required type='number' placeholder="Student ID" className="w-96 mb-5 input input-bordered w-full max-w-xs" />

                    <input required type='number' placeholder="Self phone no." className="w-96 mb-5 input input-bordered w-full max-w-xs" />
                    <input required type='number' placeholder="Guardian phone no." className="w-96 mb-5 input input-bordered w-full max-w-xs" />

                    <select required className="select select-bordered w-full max-w-xs">
                        <option disabled selected>Department name</option>
                        <option>Han Solo</option>
                        <option>Greedo</option>
                    </select>
                    <select required className="select select-bordered w-full max-w-xs">
                        <option disabled selected>Year Of Study</option>
                        <option>Han Solo</option>
                        <option>Greedo</option>
                    </select>
                    <select required className="select select-bordered w-full max-w-xs">
                        <option disabled selected>Blood Group</option>
                        <option>Han Solo</option>
                        <option>Greedo</option>
                    </select>
                    <select required className="select select-bordered w-full max-w-xs">
                        <option disabled selected>Gender</option>
                        <option>Male</option>
                        <option>Female</option>
                    </select>

                    <input required type="password" placeholder="Type password here" className=" mb-5 input input-bordered w-full max-w-xs" />
                    <input required type="password" placeholder="Confirm password" className=" mb-5 input input-bordered w-full max-w-xs" />
                </div>

                <button className="btn btn-info mb-6">Sign Up</button>

                <div className='text-center' >
                    {/* <div className="reg-navigate highlighted-text"><Link to={'/'}>Reset Password</Link></div> */}
                    <div className="reg-navigate">Have an account? <Link to={'/'}><span className='highlighted-text'>Login</span></Link></div>
                </div>
            </form>
        </div>
    );
};

export default RegistrationPage;