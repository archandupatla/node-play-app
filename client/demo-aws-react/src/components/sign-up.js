import React from 'react';

const SignUp = () =>
    <div className='signup'>
        <h1>Sign Up Form</h1>
        <div className='signup-email'>
            <label>Email</label>
            <input type='text' />
        </div>
        <div className='signup-password'>
            <label>Password</label> <input type='password' />
        </div>
        <div className='signup-confirm-password'>
            <label>Confirm Password</label> <input type='password' />
        </div>
        <div className='signup-submit'>
            <button>Register</button>
        </div>

    </div>

export default SignUp;