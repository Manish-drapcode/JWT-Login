import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Login, {login} from './components/Login';
import signup from './components/signup';
function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Login />
        
      </header>
    </div>
  );
}

export default App;
