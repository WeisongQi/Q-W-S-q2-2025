import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Store from './components/Store';
import Kontakt from './components/Kontakt';
import FaQ from './components/FaQ';
import About from './components/About';

function Navbar() {
  return (
    <>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/faq">FAQ</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/store">Store</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<App></App>}></Route>
        <Route path="/contact" element={<Kontakt></Kontakt>}></Route>
        <Route path="/faq" element={<FaQ></FaQ>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/store" element={<Store></Store>}></Route>
      </Routes>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Navbar />
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
