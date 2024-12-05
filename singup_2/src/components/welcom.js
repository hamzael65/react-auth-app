import React from 'react';
import { Link } from 'react-router-dom';

function Welcome({ username }) {
  return (
    <div className="wrapper welcome-container">
      <h1>Welcome, {username}!</h1>
      <p>You are successfully logged in.</p>
      <Link to="/signin">Log out</Link>
    </div>
  );
}

export default Welcome;
