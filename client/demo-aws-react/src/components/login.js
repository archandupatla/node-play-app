import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import axios from 'axios';
import Admin from './admin';
import PolicyHolder from './policy-holder';
class Login extends React.Component {
    state = {

    }
    handleSubmit() {
        //this.props.history.push('/home');

    }
    componentDidMount() {

        const body = {
            "client_id": "XIC4Eg6m7bJmsLMZoGe5qmBDqANRnV3O",
            "client_secret": "zGbBJUcXUFa9pB1VvfD5JlPGkmB7imEil5dWHQzsYk2b4e1dLdWJQlERBEokJg8l",
            "audience": "https://dev-91amchcz.auth0.com/api/v2/",
            "grant_type": "client_credentials"
        };

        // axios.post('https://dev-91amchcz.auth0.com/oauth/token', body).then(data => {
        //     if (data.data) {
        //         localStorage.setItem('access_token', data.data.access_token);
        //         debugger
        //         let url = `https://dev-91amchcz.auth0.com/api/v2/users/${this.props.user && this.props.user.sub}`;
        //         axios.get(url, { headers: { 'Authorization': `Bearer ${data.data.access_token}` } }).then(result => {
        //             const roles = result.data;
                    
        //             this.setState({ roles });
        //         })
        //     }
        // }).catch(error => console.log(error, 'error in fetching the access token'))
    }

    componentDidUpdate(prevprops, prevstate){
        
        const body = {
            "client_id": "XIC4Eg6m7bJmsLMZoGe5qmBDqANRnV3O",
            "client_secret": "zGbBJUcXUFa9pB1VvfD5JlPGkmB7imEil5dWHQzsYk2b4e1dLdWJQlERBEokJg8l",
            "audience": "https://dev-91amchcz.auth0.com/api/v2/",
            "grant_type": "client_credentials"
        };
        console.log(this.props.user && this.props.user.sub);
        if(prevprops.user !== this.props.user){
            axios.post('https://dev-91amchcz.auth0.com/oauth/token', body).then(data => {
            if (data.data) {
                localStorage.setItem('access_token', data.data.access_token);
                
                let url = `https://dev-91amchcz.auth0.com/api/v2/users/${this.props.user && this.props.user.sub}/roles`;
                axios.get(url,{ headers: { 'Authorization': `Bearer ${data.data.access_token}` } }).then(result => {
                    const roles = result.data;
                    
                    this.setState({ roles });
                })
            }
        }).catch(error => console.log(error, 'error in fetching the access token'))
        }
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

                        {this.state.roles && this.state.roles.find(element => element.name === 'admin') &&
                            <div className='admin-access'>
                                <Link to='create-user'>Create User</Link>
                            </div>
                        }
                        {this.state.roles && this.state.roles.find(element => element.name.indexOf('policy')>-1 && element.name !== 'admin') &&
                            <div className='policyholder-access'>
                                <Link to='view-all-claims'>View Claims</Link>
                            </div>

                        }

                    </div>

                }
            </div>
        )
    }
}

export default withRouter(Login)