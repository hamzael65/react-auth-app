import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function Signin({ setUsername }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/signin', { email, password });
      setMessage(response.data.message);
      if (response.status === 200) {
        setUsername(response.data.username); 
        navigate('/welcome');
      }
    } catch (error) {
      setMessage(error.response?.data?.message || 'Error');
    }
  };

  return (
    <div className="wrapper">
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-field">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Email</label>
        </div>
        <div className="input-field">
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label>Password</label>
        </div>
        <button type="submit">Sign In</button>
      </form>
      <p className="register">
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </p>
      {message && <p>{message}</p>}
    </div>
  );
}

export default Signin;
