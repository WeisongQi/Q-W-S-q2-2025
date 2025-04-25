import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import DetailPage from './DetailPage';
import reportWebVitals from './reportWebVitals';
import EditAnimal from './EditAnimal';
import AddAnimal from './AddAnimal';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/tiere/new" element={<AddAnimal />} />
        <Route path="/tiere/:id" element={<DetailPage />} />
        <Route path="/tiere/:id/edit" element={<EditAnimal />} />
      </Routes>
    </Router>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
