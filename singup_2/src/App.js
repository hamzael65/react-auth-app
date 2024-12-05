import React, { useState } from 'react';
import './App.css'

import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'; 
import Signin from './components/singin';
import Signup from './components/Signup';
import Welcome from './components/welcom';

function App() {
  const [username, setUsername] = useState('');  

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/signin" />} />  
        <Route path="/signin" element={<Signin setUsername={setUsername} />} />  
        <Route path="/signup" element={<Signup />} />
        <Route path="/welcome" element={<Welcome username={username} />} />
      </Routes>
    </Router>
  );
}

export default App;
