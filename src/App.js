import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import NavBar from './NavBar';


function App() {



  return (
    <BrowserRouter>
    
    <div className="App">
      Hello World!
      True Tax Prep
      <NavBar />
    </div>
    
    </BrowserRouter>
  );
}

export default App;
