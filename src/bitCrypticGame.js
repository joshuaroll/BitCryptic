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

function pad2(n) {
  return String(n).padStart(2, "0");
}

// Local calendar date (Wordle-style rollover at local midnight)
function getTodayKey() {
  const now = new Date();
  return `${now.getFullYear()}-${pad2(now.getMonth() + 1)}-${pad2(now.getDate())}`;
}

function getYesterdayKey(todayKey) {
  const [y, m, d] = todayKey.split("-").map(Number);
  const yesterday = new Date(y, m - 1, d - 1);
  return `${yesterday.getFullYear()}-${pad2(yesterday.getMonth() + 1)}-${pad2(yesterday.getDate())}`;
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

export default function CrypticCrocGame({ dateString, todayKey: todayKeyProp }) {
  const todayKey = todayKeyProp || getTodayKey();
  const dailyClue = getDailyClue(todayKey);
  const clue = {
    clue: dailyClue.clue,
    answer: dailyClue.answer.toUpperCase(),
    definition: dailyClue.definition
  };

  const savedState = loadDailyState(todayKey);
  const savedLost = Boolean(savedState) && !savedState.isSolved && savedState.attempts >= MAX_ATTEMPTS;
  const [userInput, setUserInput] = useState(
    savedState?.isSolved ? clue.answer.split("") : Array(clue.answer.length).fill("")
  );
  const [message, setMessage] = useState(
    savedState?.isSolved
      ? "Already solved today!"
      : savedLost
        ? "Better luck tomorrow!"
        : ""
  );
  const [flashColors, setFlashColors] = useState(Array(clue.answer.length).fill(""));
  const [attempts, setAttempts] = useState(savedState?.attempts || 0);
  const [guessedWords, setGuessedWords] = useState(new Set(savedState?.guessHistory || []));
  const [isSolved, setIsSolved] = useState(savedState?.isSolved || false);
  const [guessHistory, setGuessHistory] = useState(savedState?.guessHistory || []);
  const [showDefinition, setShowDefinition] = useState(false);
  const inputRefs = useRef([]);

  const isLost = !isSolved && attempts >= MAX_ATTEMPTS;
  const isOver = isSolved || isLost;

  // Locate the definition inside the clue text (case-insensitive) for highlighting
  const definitionIndex = clue.clue.toLowerCase().indexOf(clue.definition.toLowerCase());

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
    if (isSolved || attempts >= MAX_ATTEMPTS) return;

    const userAnswer = userInput.join("");
    if (userAnswer.length < clue.answer.length) {
      setFlashColors(Array(clue.answer.length).fill("bg-red-500"));
      return;
    }

    if (guessedWords.has(userAnswer)) {
      setMessage(`Already tried ${userAnswer}`);
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
      // Update streak (all keys are local calendar dates)
      const streak = loadStreak();
      const yesterdayKey = getYesterdayKey(todayKey);
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
      setMessage(newAttempts >= MAX_ATTEMPTS ? "Better luck tomorrow!" : "Try again!");
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
            {showDefinition && definitionIndex !== -1 ? (
              <>
                {clue.clue.slice(0, definitionIndex)}
                <span className="definition-highlight">
                  {clue.clue.slice(definitionIndex, definitionIndex + clue.definition.length)}
                </span>
                {clue.clue.slice(definitionIndex + clue.definition.length)}
              </>
            ) : (
              clue.clue
            )}
            {" "}({clue.answer.length})
          </p>
          {showDefinition && definitionIndex === -1 && (
            <p className="text-base text-gray-600">Definition: {clue.definition}</p>
          )}
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

          {message && <div className="text-lg font-semibold mb-4 text-center">{message}</div>}

          {isOver && (
            <div className="w-full max-w-xs mb-4 p-4 bg-gray-50 border-2 border-gray-200 rounded-lg text-center">
              <div className="text-lg font-bold mb-1">
                The answer was <span className="text-blue-600">{clue.answer}</span>
              </div>
              <div className="text-sm text-gray-600">{dailyClue.explanation}</div>
            </div>
          )}

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
