import React, { Component } from 'react';
import Toolbar from './components/Toolbar/Toolbar.jsx';
import Sidebar from './components/Toolbar/Sidebar.jsx';
import './App.css';
import Home from './components/home';  
import Completion from './components/Completion';     
import './app.scss';
import LoginForm from './components/loginForm';
import UserForm from './components/signUpForm/UserForm';
import Orders from './components/YourOrders';
import CurrentOrders from './components/CurrentOrders';     
import Profile from './components/Profile';   
import DriverOrders from './components/DriverOrders';     
import { BrowserRouter, Route } from "react-router-dom";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Sidebar />
        <Toolbar />
        <main >
        
        </main>
        <Route exact path={"/LoginForm"} component={LoginForm}/>
        <Route exact path={"/UserForm"} component={UserForm} className="signUp"/>
        <Route exact path={"/Home"} component={Home} />
        <Route exact path={"/Completion"} component={Completion} />
        <Route exact path={"/Orders"} component={Orders} />
        <Route exact path={"/CurrentOrders"} component={CurrentOrders} />
        {/* <Profile />
        <DriverOrders /> */}
      </div>
    </BrowserRouter>

  );
}
export default App;

