import React, { useContext } from 'react';
import logo from './logo.svg';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Login from './components/login';
import './App.css';
import SignUp from './components/sign-up';
import Home from './components/home';
import {Auth0Context} from './context/auth0-context';

function App() {
  const {loginWithRedirect,user, isAuthenticated,logout} = useContext(Auth0Context);
  console.log(useContext(Auth0Context))
  
  return (
    <div>
      <div>
        {/* {isAuthenticated?user:'wef'} */}
        {/* {isAuthenticated?user.then(val=>val.name):'xyz'} */}
       {!isAuthenticated && <button onClick={loginWithRedirect}>Login</button>}
        {isAuthenticated && <button
                onClick={() => logout({ returnTo: window.location.origin })}
                className="button is-small is-dark"
              >
                Logout
          </button>}
        <BrowserRouter>
          <Route component={SignUp} path='/sign-up' />
          <Route component={Home} path='/home' />
          <Route exact component={Login} path='/' />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
