import React from 'react';
import './App.css';
import { Navbar } from './Nav-Components/Navbar';
import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
      <BrowserRouter>
        <Navbar/>
      </BrowserRouter>
  );
}

export default App;
