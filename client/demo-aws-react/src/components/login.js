import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import axios from 'axios';
class Login extends React.Component {
    state = {

    }
    handleSubmit() {
        this.props.history.push('/home')
    }
 
    render() {
        return (
            <div className='login'>
                <header>
                    <h1>Welcome to AWS POC</h1>
                </header>
                <div className='login-email'>
                    <label>Email</label>
                    <input type='text' />
                </div>
                <div className='login-password'>
                    <label>Password</label> <input type='password' />
                </div>

                <div className='login-submit'>
                    <button onClick={() => this.handleSubmit()}>Submit</button>
                </div>
                <div className='login-new-user'>
                    <p>If you are new user, please <Link to='/sign-up'>Sign Up</Link></p>
                </div>
            </div>
        )
    }
}

export default withRouter(Login)