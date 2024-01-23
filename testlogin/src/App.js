
import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Login from './components/Login';
import Signup from './components/Signup';
import './App.css'


function App() {
  return (
    <>
    <div>
      <Routes>
        <Route path="/Login" element={<Login />}></Route>
      <Route path="/*" element={<Signup />} />
      </Routes>
    </div>
     
    </>
  );
}

export default App;
