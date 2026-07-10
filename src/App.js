import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CrypticCrocGame from "./bitCrypticGame";
import WordPlayIndicators from './components/WordPlayIndicators';

// Local calendar date key (Wordle-style rollover at local midnight)
function getLocalDateKey(date = new Date()) {
  const pad = (n) => String(n).padStart(2, '0');
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
}

function App() {
  const [todayKey, setTodayKey] = useState(() => getLocalDateKey());

  // Roll over to the new puzzle when the local date changes while the tab is open.
  // The game component is keyed on todayKey, so it remounts with fresh state.
  useEffect(() => {
    const checkRollover = () => {
      const currentKey = getLocalDateKey();
      setTodayKey((prev) => (prev === currentKey ? prev : currentKey));
    };
    const intervalId = setInterval(checkRollover, 60 * 1000);
    document.addEventListener('visibilitychange', checkRollover);
    return () => {
      clearInterval(intervalId);
      document.removeEventListener('visibilitychange', checkRollover);
    };
  }, []);

  const [year, month, day] = todayKey.split('-').map(Number);
  const dateString = new Date(year, month - 1, day).toLocaleDateString('en-US', {
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
          <Route
            path="/"
            element={<CrypticCrocGame key={todayKey} todayKey={todayKey} dateString={dateString} />}
          />
          <Route path="/indicators" element={<WordPlayIndicators />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
