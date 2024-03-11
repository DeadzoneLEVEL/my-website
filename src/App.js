import './App.css';
import React, { useState } from "react";
import NavBar from './components/NavigationBar.js';
import Main from './components/Main.js';
import Footer from './components/Footer.js';
import Header from './components/Header.js';

function App() {
  return (
    <div className = 'Container'>
      <Header></Header>
      <NavBar></NavBar>
      <Main></Main> 
      <Footer></Footer>
    </div>
  );
}

export default App;
