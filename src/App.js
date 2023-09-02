import React, { useState } from 'react';
import './components/style.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Welcome from "./components/Welcome"; 
import User from "./components/User";
import toast, { Toaster } from 'react-hot-toast';
import Meal from './components/Meal';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="App">
      <Router>
        <Toaster />
        <Routes>
          <Route  path="/Home/:id" element={<Meal/>} />
          <Route  path="/" element={<Welcome/>}/>
          <Route  path="/profile/:id" element={<User />} />
          <Route  path="/Login" element={<Login changeState={setLoggedIn} />} />
          <Route  path="/SignUp" element={<SignUp />} />
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
