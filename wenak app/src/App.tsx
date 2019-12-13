import React from 'react';
import Home from './components/home';  
import Completion from './components/Completion';     
import './app.scss';
import LoginForm from './components/loginForm';
import { UserForm } from './components/signUpForm/UserForm.js';
import Orders from './components/YourOrders';
import CurrentOrders from './components/CurrentOrders';     
import Profile from './components/Profile';   
import DriverOrders from './components/DriverOrders';  
import Trial from './components/Trial';   






class App extends React.Component{
  render() {
  return (
    <div className="App">
      <LoginForm />
      <UserForm />
      <Home />
      <Completion />
      <Orders />
      <CurrentOrders />
      <Profile />
      <DriverOrders />
      
    </div>
  );
}
}
export default App;

