import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [isLoginForm, setIsLoginForm] = useState(true);

  const handleToggleForm = () => {
    setIsLoginForm(!isLoginForm);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    alert('Login form submitted');
  };

  const handleRegister = (e) => {
    e.preventDefault();
    alert('Registration form submitted');
  };

  return (
    <div className='Logiphase'>
    <div className="login">
      <h1>{isLoginForm ? 'Login' : 'Register'}</h1>

      {isLoginForm ? (
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label>Email:</label>
            <input type="email" placeholder="Enter your email" required />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input type="password" placeholder="Enter your password" required />
          </div>
          <button type="submit" className="submit-btn">Login</button>
          <p onClick={handleToggleForm} className="toggle-link">
            Don't have an account? Register here
          </p>
        </form>
      ) : (
        <form onSubmit={handleRegister}>
          <div className="form-group">
            <label>First Name:</label>
            <input type="text" placeholder="Enter your first name" required />
          </div>
          <div className="form-group">
            <label>Middle Name:</label>
            <input type="text" placeholder="Enter your middle name" />
          </div>
          <div className="form-group">
            <label>Last Name:</label>
            <input type="text" placeholder="Enter your last name" required />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input type="email" placeholder="Enter your email" required />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input type="password" placeholder="Enter your password" required />
          </div>
          <button type="submit" className="submit-btn">Register</button>
          <p onClick={handleToggleForm} className="toggle-link">
            Already have an account? Login here
          </p>
        </form>
      )}
    </div>
    </div>
  );
};

export default Login;
