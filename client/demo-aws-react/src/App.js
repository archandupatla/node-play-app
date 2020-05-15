import React, { useContext } from 'react';
import logo from './logo.svg';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Login from './components/login';
import './App.css';
import SignUp from './components/sign-up';
import Home from './components/home';
import {Auth0Context} from './context/auth0-context';
import randomBytes from 'randombytes';

function App() {
  const {loginWithRedirect,user, isAuthenticated,logout} = useContext(Auth0Context);
  console.log(useContext(Auth0Context))

  return (
    <div>
      <div>
        {/* {isAuthenticated?user:'wef'} */}
        {/* {isAuthenticated?user.then(val=>val.name):'xyz'} */}
       {/* {!isAuthenticated && <button onClick={loginWithRedirect}>Login</button>}
        {isAuthenticated && <button
                onClick={() => logout({ returnTo: window.location.origin })}
                className="button is-small is-dark"
              >
                Logout
          </button>} */}
          {/* <a href={`https://dev-91amchcz.auth0.com/authorize?audience=API_AUDIENCE&scope=SCOPE&response_type=code&client_id=VGWCC7tCi01L1g1Pqh9zn8AgMNLmGi10&code_challenge=${challenge}&code_challenge_method=S256&redirect_uri=https://demo-portal.net`}>Sign in</a> */}
        <BrowserRouter>
          <Route component={SignUp} path={`/sign-up`} />
          <Route component={Home} path='/home' />
          <Route exact path='/' render={props=><Login {...props} logout = {logout} isAuthenticated={isAuthenticated} loginWithRedirect={loginWithRedirect} user={user}/>}/>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
