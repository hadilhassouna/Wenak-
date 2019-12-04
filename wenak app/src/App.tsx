import React from 'react';
import Home from './components/home';      
import './app.scss';
import LoginForm from './components/loginForm';
import { UserForm } from './components/signUpForm/UserForm.js';

const App: React.FC = () => {
  return (
    <div className="App">

      <LoginForm />
      <UserForm />
      <Home />

    </div>
  );
}
export default App;
