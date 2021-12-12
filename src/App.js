import React from 'react';
import Header from './components/Header';
import './App.css';
import Home from './components/Home';
import Detail from "./components/Detail";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // add Link


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/detail" element={ <Detail /> } />
          <Route path="/" element={ <Home /> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
