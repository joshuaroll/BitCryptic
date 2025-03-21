import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CrypticCrocGame from "./bitCrypticGame";
import WordPlayIndicators from './components/WordPlayIndicators';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-white shadow-md p-4 mb-4">
          <div className="max-w-4xl mx-auto flex justify-between items-center">
            <Link to="/" className="text-xl font-bold text-gray-800 hover:text-gray-600">
              BitCryptic
            </Link>
            <Link to="/indicators" className="text-gray-600 hover:text-gray-800">
              Word Play Guide
            </Link>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<CrypticCrocGame />} />
          <Route path="/indicators" element={<WordPlayIndicators />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
