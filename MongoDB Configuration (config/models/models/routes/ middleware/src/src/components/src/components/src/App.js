import React from 'react';
import './App.css';
import AuthForm from './components/AuthForm';
import Dashboard from './components/Dashboard';

const App = () => {
  return (
    <div className="App">
      <h1>MERN Stack Application</h1>
      <AuthForm />
      <Dashboard />
    </div>
  );
};

export default App;
