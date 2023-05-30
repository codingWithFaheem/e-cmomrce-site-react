import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Contact, Home } from './pages';
import { NavBar } from './component';

function App() {
  return (
    <div className="app h-screen z-10">
      <NavBar />
      <Home />
      <Contact />
    </div>
  );
}

export default App;
  