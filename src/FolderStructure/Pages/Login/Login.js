import React from 'react';
import './Login.css';
import { CgProfile } from 'react-icons/cg';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='login-section'>
            <form className='login-form shadow-lg mt-8'>
                <div className="icon text-6xl mb-4"><CgProfile></CgProfile></div>
                <h2 className='text-4xl mb-4'>User Login</h2>
                <input type="email" placeholder="Type email here" className="w-96 mb-5 input input-bordered w-full max-w-xs" />
                <input type="password" placeholder="Type password here" className=" mb-5 input input-bordered w-full max-w-xs" />
                <button className="btn btn-info mb-6">Login</button>

                <div className='text-center' >
                    <div className="reg-navigate highlighted-text"><Link to={'/'}>Reset Password</Link></div>
                    <div className="reg-navigate">Don't have an account? <Link to={'/registration'}><span className='highlighted-text'>Register</span></Link></div>
                </div>
            </form>
        </div>
    );
};

export default Login;

