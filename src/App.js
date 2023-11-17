import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Nav from './components/nav/Nav';
import Footer from './components/footer/Footer';
import Schedule from './components/Schedule/Schedule';
import Home from './components/Home/Home';
import Groups from './components/Groups/Groups';
import Training from './components/Training/Training';
import About from './components/About/About';
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
        <Routes>
          <Route path='/groups/:group' element={<Groups />} />
          <Route path='/about' element={<About />} />
          <Route path='/training' element={<Training />} />
          <Route path='/schedule' element={<Schedule />} />
          <Route path="/fightgym/" element={<Home />}/>
          <Route path="/" element={<Home />} />
        </Routes>
      <Footer className="footer" />
    </div>
  );
}

export default App;