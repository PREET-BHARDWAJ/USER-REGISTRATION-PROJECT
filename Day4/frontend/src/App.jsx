import React from 'react'
import Register from './components/Register'
import View from './components/View'
import Update from './components/Update'
import Delete from './components/Delete'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css'
const App = () => {

  return (
    <>
  <Router>
      <h1 align="center"><u>USER REGISTRATION SYSTEM</u></h1>
      <div className="container">
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/view" element={<View />} />
          <Route path="/update" element={<Update />} />
          <Route path="/Delete" element={<Delete />} />
        </Routes>
      </div>
      <div className='nav'>
      <Link to="/">
          <button>Register</button></Link>
      <Link to="/view">
          <button>View user</button></Link>
      <Link to="/update">
          <button>Update</button></Link>
      <Link to="/Delete">
          <button>Delete</button></Link>
      </div>
    </Router>
    </>
  );
};

export default App