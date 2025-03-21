import React from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CrypticCrocGame from "./bitCrypticGame";
import WordPlayIndicators from './components/WordPlayIndicators';

function App() {
  const today = new Date();
  const dateString = today.toLocaleDateString('en-US', { 
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-white shadow-md p-4 mb-4">
          <div className="max-w-4xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
              <Link to="/" className="flex items-center gap-2">
                <img 
                  src={process.env.PUBLIC_URL + "/BC_logo.png"} 
                  alt="BitCryptic Logo" 
                  className="h-8 w-auto mt-1"
                />
                <span className="text-xl font-bold text-gray-800 hover:text-gray-600">
                  BitCryptic
                </span>
              </Link>
            </div>
            <Link to="/indicators" className="text-gray-600 hover:text-gray-800 mt-2 sm:mt-0">
              Word Play Guide
            </Link>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<CrypticCrocGame dateString={dateString} />} />
          <Route path="/indicators" element={<WordPlayIndicators />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
