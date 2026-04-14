import React, { useState, useRef, useEffect } from "react";
import { Button } from "./components/ui/button";
import confetti from "canvas-confetti";
import { getDailyClue } from "./data/dailyClues";

const MAX_ATTEMPTS = 3;
const crocStages = [
  process.env.PUBLIC_URL + "/crypticcroc/CCpixel_stage_water.png",
  process.env.PUBLIC_URL + "/crypticcroc/CCpixel_stage_0.png",
  process.env.PUBLIC_URL + "/crypticcroc/CCpixel_stage_1.png",
  process.env.PUBLIC_URL + "/crypticcroc/CCpixel_stage_final.png"
];

const STORAGE_KEY_PREFIX = "bitcryptic_daily_";
const STREAK_KEY = "bitcryptic_daily_streak";

function getTodayKey() {
  return new Date().toISOString().split("T")[0];
}

function loadDailyState(dateKey) {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY_PREFIX + dateKey));
    if (saved) return saved;
  } catch {}
  return null;
}

function saveDailyState(dateKey, state) {
  try {
    localStorage.setItem(STORAGE_KEY_PREFIX + dateKey, JSON.stringify(state));
  } catch {}
}

function loadStreak() {
  try {
    const saved = JSON.parse(localStorage.getItem(STREAK_KEY));
    if (saved) return saved;
  } catch {}
  return { current: 0, longest: 0, lastSolvedDate: null };
}

function saveStreak(streak) {
  try {
    localStorage.setItem(STREAK_KEY, JSON.stringify(streak));
  } catch {}
}

export default function CrypticCrocGame({ dateString }) {
  const todayKey = getTodayKey();
  const dailyClue = getDailyClue(todayKey);
  const clue = {
    clue: dailyClue.clue,
    answer: dailyClue.answer.toUpperCase(),
    definition: dailyClue.definition
  };

  const savedState = loadDailyState(todayKey);
  const [userInput, setUserInput] = useState(Array(clue.answer.length).fill(""));
  const [message, setMessage] = useState(savedState?.isSolved ? "Already solved today!" : "");
  const [flashColors, setFlashColors] = useState(Array(clue.answer.length).fill(""));
  const [attempts, setAttempts] = useState(savedState?.attempts || 0);
  const [guessedWords, setGuessedWords] = useState(new Set(savedState?.guessHistory || []));
  const [isSolved, setIsSolved] = useState(savedState?.isSolved || false);
  const [guessHistory, setGuessHistory] = useState(savedState?.guessHistory || []);
  const [showDefinition, setShowDefinition] = useState(false);
  const inputRefs = useRef([]);

  useEffect(() => {
    if (flashColors.some(color => color)) {
      setTimeout(() => setFlashColors(Array(clue.answer.length).fill("")), 500);
    }
  }, [flashColors, clue.answer.length]);

  const getCrocodileStage = () => {
    return crocStages[Math.min(attempts, MAX_ATTEMPTS)];
  };

  const handleChange = (index, value) => {
    let newInput = [...userInput];
    newInput[index] = value.toUpperCase();
    setUserInput(newInput);
    
    if (value && index < userInput.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index, event) => {
    if (event.key === "Backspace" && !userInput[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    } else if (event.key === "Enter" && !isSolved) {
      checkAnswer();
    }
  };

  const checkAnswer = () => {
    if (attempts >= MAX_ATTEMPTS) return;

    const userAnswer = userInput.join("");
    if (userAnswer.length < clue.answer.length) {
      setFlashColors(Array(clue.answer.length).fill("bg-red-500"));
      return;
    }

    if (isSolved || guessedWords.has(userAnswer)) {
      return;
    }

    if (userAnswer === clue.answer) {
      setFlashColors(Array(clue.answer.length).fill("bg-green-500"));
      setMessage(`Congratulations! You solved it!`);
      setIsSolved(true);
      const newHistory = [...guessHistory, userAnswer];
      setGuessedWords(prev => new Set(prev).add(userAnswer));
      setGuessHistory(newHistory);
      confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
      // Persist solved state
      saveDailyState(todayKey, { isSolved: true, attempts, guessHistory: newHistory });
      // Update streak
      const streak = loadStreak();
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      const yesterdayKey = yesterday.toISOString().split("T")[0];
      if (streak.lastSolvedDate === yesterdayKey) {
        streak.current += 1;
      } else if (streak.lastSolvedDate !== todayKey) {
        streak.current = 1;
      }
      streak.longest = Math.max(streak.longest, streak.current);
      streak.lastSolvedDate = todayKey;
      saveStreak(streak);
    } else {
      setFlashColors(Array(clue.answer.length).fill("bg-red-500"));
      const newAttempts = attempts + 1;
      setAttempts(newAttempts);
      const newHistory = [...guessHistory, userAnswer];
      setGuessedWords(prev => new Set(prev).add(userAnswer));
      setGuessHistory(newHistory);
      saveDailyState(todayKey, { isSolved: false, attempts: newAttempts, guessHistory: newHistory });
      setMessage(
        newAttempts >= MAX_ATTEMPTS
          ? <div>Better luck tomorrow!</div>
          : "Try again!"
      );
    }
  };

  return (
    <div className="flex flex-col items-center p-5">
      {/* Clue Window */}
      <div className="clue-window mb-6">
        <div className="clue-title-bar flex flex-col items-center">
          <div className="text-lg font-semibold">{dateString}</div>
          <div className="text-xs text-gray-500 bg-gray-100 border border-gray-300 rounded-full px-4 py-1 mt-1">by Joshua Rollins</div>
        </div>
        <div className="clue-content">
          <p className="text-lg">
            {showDefinition ? (
              <>
                <span className="definition-highlight">{clue.definition}</span>
                {clue.clue.slice(clue.definition.length)}
              </>
            ) : (
              clue.clue
            )}
            {" "}({clue.answer.length})
          </p>
          <button 
            className="definition-button"
            onClick={() => setShowDefinition(!showDefinition)}
          >
            {showDefinition ? "Hide Definition" : "Show Definition"}
          </button>
        </div>
      </div>
      
      {/* Main game area with flex layout */}
      <div className="flex flex-col lg:flex-row gap-8 items-center justify-center">
        {/* Game Controls */}
        <div className="flex flex-col items-center w-full lg:w-auto lg:mt-10">
          <div className="flex gap-2 mb-4 justify-center">
            {userInput.map((char, index) => (
              <input
                key={index}
                type="text"
                maxLength="1"
                value={char}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                ref={(el) => (inputRefs.current[index] = el)}
                className={`w-12 h-12 text-center border-2 border-gray-400 rounded-md text-xl font-bold transition-transform duration-300 transform ${flashColors[index]} ${flashColors[index] === 'bg-red-500' ? 'shake' : ''}`}
                disabled={isSolved || attempts >= MAX_ATTEMPTS}
              />
            ))}
          </div>
          
          <Button 
            className="w-full max-w-xs mb-4 text-lg py-6" 
            onClick={checkAnswer} 
            disabled={isSolved || attempts >= MAX_ATTEMPTS}
          >
            Check Answer
          </Button>

          {message && <p className="text-lg font-semibold mb-4 text-center">{message}</p>}

          <div className="w-full max-w-xs">
            <h2 className="text-xl font-bold mb-2">Previous Guesses:</h2>
            <ul className="bg-gray-50 p-4 rounded-lg border-2 border-gray-200">
              {guessHistory.map((guess, index) => (
                <li key={index} className="text-lg text-gray-700 mb-1 font-mono text-center">{guess}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bit Tank */}
        <div className={`croc-window ${attempts === 1 ? 'danger-1' : attempts === 2 ? 'danger-2' : attempts >= 3 ? 'danger-3' : ''}`}>
          <div className="croc-title-bar">
            {attempts === 0 && "The Bit Tank is still"}
            {attempts === 1 && "Cryptic Croc approaches"}
            {attempts === 2 && "He's getting close!"}
            {attempts >= 3 && "Cryptic Croc has CHOMPED your clues!"}
          </div>
          <div className="croc-content">
            <img 
              src={getCrocodileStage()} 
              alt="Crocodile Danger Level" 
              className="croc-image"
              onError={(e) => {
                console.error('Failed to load image:', e.target.src);
                e.target.onerror = null;
                e.target.src = process.env.PUBLIC_URL + '/crypticcroc/CCpixel_stage_0.png';
              }}
            />
          </div>
          <p className="text-lg mt-2 text-center">Attempts: <span className="text-blue-500 font-bold">{attempts} / {MAX_ATTEMPTS}</span></p>
        </div>
      </div>
    </div>
  );
}
