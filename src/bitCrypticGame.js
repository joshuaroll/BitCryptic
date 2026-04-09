import React, { useState, useRef, useEffect } from "react";
import { Button } from "./components/ui/button";
import confetti from "canvas-confetti";

const clues = [
  { 
    clue: "Tracked train takes in light", 
    answer: "tan",
    definition: "takes in light"
  },
  // { clue: "Church's first meter echos bright sound", answer: "CHIME" },
  // Add more clues here
];

const MAX_ATTEMPTS = 3;
const crocStages = [
  process.env.PUBLIC_URL + "/crypticcroc/CCpixel_stage_water.png",
  process.env.PUBLIC_URL + "/crypticcroc/CCpixel_stage_0.png",
  process.env.PUBLIC_URL + "/crypticcroc/CCpixel_stage_1.png",
  process.env.PUBLIC_URL + "/crypticcroc/CCpixel_stage_final.png"
];

export default function CrypticCrocGame({ dateString }) {
    // eslint-disable-next-line
  const [currentClueIndex, setCurrentClueIndex] = useState(0);
  const [userInput, setUserInput] = useState(Array(clues[0].answer.length).fill(""));
  const [message, setMessage] = useState("");
  const [flashColors, setFlashColors] = useState(Array(clues[0].answer.length).fill(""));
  const [attempts, setAttempts] = useState(0);
  const [guessedWords, setGuessedWords] = useState(new Set());
  const [isSolved, setIsSolved] = useState(false);
  const [guessHistory, setGuessHistory] = useState([]);
  const [showDefinition, setShowDefinition] = useState(false);
  const inputRefs = useRef([]);

  useEffect(() => {
    if (flashColors.some(color => color)) {
      setTimeout(() => setFlashColors(Array(clues[0].answer.length).fill("")), 500);
    }
  }, [flashColors]);

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
    if (userAnswer.length < clues[currentClueIndex].answer.length) {
      setFlashColors(Array(clues[currentClueIndex].answer.length).fill("bg-red-500"));
      return;
    }
    
    if (isSolved || guessedWords.has(userAnswer)) {
      return;
    }
    
    if (userAnswer === clues[currentClueIndex].answer) {
      setFlashColors(Array(clues[currentClueIndex].answer.length).fill("bg-green-500"));
      setMessage(`🎉 Congratulations! You solved it!`);
      setIsSolved(true);
      setGuessedWords(prev => new Set(prev).add(userAnswer));
      setGuessHistory([...guessHistory, userAnswer]);
      confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
    } else {
      setFlashColors(Array(clues[currentClueIndex].answer.length).fill("bg-red-500"));
      setAttempts(prev => prev + 1);
      // Only add to guess history if it's not the last attempt
      if (attempts < MAX_ATTEMPTS - 1) {
        setGuessedWords(prev => new Set(prev).add(userAnswer));
        setGuessHistory([...guessHistory, userAnswer]);
      }
      setMessage(
        attempts + 1 >= MAX_ATTEMPTS 
          ? <div>🐊 Better luck tomorrow! 🐊</div>
          : "❌ Try again!"
      );
    }
  };

  return (
    <div className="flex flex-col items-center p-5">
      {/* Clue Window */}
      <div className="clue-window mb-6">
        <div className="clue-title-bar flex flex-col items-center">
          <div className="text-lg font-semibold">Tuesday, March 25, 2025</div>
          <div className="text-xs text-gray-500 bg-gray-100 border border-gray-300 rounded-full px-4 py-1 mt-1">by Joshua Rollins</div>
        </div>
        <div className="clue-content">
          <p className="text-lg">
            {showDefinition ? (
              <>
                <span className="definition-highlight">{clues[currentClueIndex].definition}</span>
                {clues[currentClueIndex].clue.slice(clues[currentClueIndex].definition.length)}
              </>
            ) : (
              clues[currentClueIndex].clue
            )}
            {" "}({clues[currentClueIndex].answer.length})
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
