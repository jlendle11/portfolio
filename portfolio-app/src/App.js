import React from 'react';
// import { Route } from 'react-router-dom'

import Nav from './components/Nav'
import Project from './components/Projects'
import './components/Projects/Project.css'
import About from './components/About'
import './components/About/About.css'
import Contact from './components/Contact'
import './components/Contact/Contact.css'
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Nav/>
      <main>
        <About/>
        <Project/>
        <Contact/>
      </main>
    </div>
  );
}

export default App;
