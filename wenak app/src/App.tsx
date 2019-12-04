import React from 'react';
import './app.scss';
import LoginForm from './components/loginForm';
import { UserForm } from './components/signUpForm/UserForm.js';

const App: React.FC = () => {
  return (
    <div className="App">
      <LoginForm />
      <UserForm />
      

    </div>
  );
}

export default App;
