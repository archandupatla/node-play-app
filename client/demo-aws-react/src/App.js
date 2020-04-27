import React from 'react';
import logo from './logo.svg';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Login from './components/login';
import './App.css';
import SignUp from './components/sign-up';
import Home from './components/home';

function App() {
  return (
    <div>
      <div>
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
