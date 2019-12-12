import React, { Component } from 'react';
import NavBar from './components/Toolbar/Toolbar.jsx';
import Sidebar from './components/Toolbar/Sidebar.jsx';
import './App.css';
import Home from './components/home';  
import Completion from './components/Completion';     
import './app.scss';
import LoginForm from './components/loginForm';
import UserForm from './components/signUpForm/UserForm';
import NavbarUser from './components/Toolbar/NavbarUser';
import Orders from './components/YourOrders';
import CurrentOrders from './components/CurrentOrders';     
import Profile from './components/Profile';   
import DriverOrders from './components/DriverOrders';     
import { BrowserRouter, Route } from "react-router-dom";
import DrawerIcon from "./components/Toolbar/Drawer";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <Sidebar /> */}
        <NavBar />
        <DrawerIcon />
        <main >
        
        </main>
        <Route exact path={"/NavbarUser"} component={NavbarUser} />
        <Route exact path={"/DrawerIcon"} component={DrawerIcon}/>
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
