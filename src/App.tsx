import React, {useState,useEffect} from 'react';
import './App.css';
import { Contact, Home, Store} from './pages';
import { NavBar,  SideBarMenu , ShoppingCart, Footer } from './component';
import { ShoppingCartProvider } from './context/ShopingCartContext';
import {Routes , Route ,Navigate } from 'react-router-dom';

function App(){


  return (
    <div className="app h-screen z-10">
      <ShoppingCartProvider>
        
          <NavBar />
          <ShoppingCart />
          <SideBarMenu />
          <Routes>
          <Route path='/' element = {<Home />} />
          <Route path='/store' element = {<Store />} />
            <Route path='/contact' element = {<Contact/>} />
            <Route path="*" element ={<Navigate to ="/"/>}  />
          </Routes>
          <Footer />
          </ShoppingCartProvider>
          
    </div>
  );
}

export default App;
  