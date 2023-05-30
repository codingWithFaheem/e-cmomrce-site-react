import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Home } from './pages';
import { NavBar } from './component';

function App() {
  return (
    <div className="app h-screen z-10">
      <NavBar />
      <Home />
      
    </div>
  );
}

export default App;
  