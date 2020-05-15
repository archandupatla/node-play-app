import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import axios from 'axios';
class Login extends React.Component {
    state = {

    }
    handleSubmit() {
        //this.props.history.push('/home');
        
    }
    componentDidMount(){
        const body = {"client_id":"XIC4Eg6m7bJmsLMZoGe5qmBDqANRnV3O",
        "client_secret":"zGbBJUcXUFa9pB1VvfD5JlPGkmB7imEil5dWHQzsYk2b4e1dLdWJQlERBEokJg8l",
        "audience":"https://dev-91amchcz.auth0.com/api/v2/",
        "grant_type":"client_credentials"
        };

axios.post('https://dev-91amchcz.auth0.com/oauth/token',body).then(data => {
    debugger
})
    }
  
 
    render() {
        return (
            <div className='home'>
                {/* <header>
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
                </div> */}
    {!this.props.isAuthenticated && 
    <div className='not-authenticated'>
        <button className='poc-button' onClick={this.props.loginWithRedirect}>Login</button>
    </div>        
    }
    {
        this.props.isAuthenticated && 
        <div className='is-authenticated'>
            <h1>
                {`Hello ${this.props.user.name}, Welcome to AWS POC`}
            </h1>
            <button
                onClick={() => this.props.logout({ returnTo: window.location.origin })}
                className="button is-small is-dark"
              >
                Logout
          </button>
            </div>
    }
            </div>
        )
    }
}

export default withRouter(Login)