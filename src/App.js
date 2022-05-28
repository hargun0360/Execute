import { Routes, Route } from 'react-router-dom'
import React from 'react';
import Login from './components/Auth/Login/Login';
import Signup from './components/Auth/Login/Login';
function App() {
  return (
    <>
        <Routes>
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
