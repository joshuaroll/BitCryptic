import React, { useState, useRef, useEffect } from "react";
import { Button } from "./components/ui/button";
import confetti from "canvas-confetti";

const clues = [
  { clue: "Church's first meter echos bright sound", answer: "CHIME" },
  // Add more clues here
];

const MAX_ATTEMPTS = 3;
const crocStages = [
  process.env.PUBLIC_URL + "/crypticcroc/CCpixel_stage_water.png",
  process.env.PUBLIC_URL + "/crypticcroc/CCpixel_stage_0.png",
  process.env.PUBLIC_URL + "/crypticcroc/CCpixel_stage_1.png", // Using stage 1 as fallback for stage 2
  process.env.PUBLIC_URL + "/crypticcroc/CC_Stage_Final.png"
];

export default function CrypticCrocGame() {
    // eslint-disable-next-line
  const [currentClueIndex, setCurrentClueIndex] = useState(0);
  const [userInput, setUserInput] = useState(Array(clues[0].answer.length).fill(""));
  const [message, setMessage] = useState("");
  const [flashColors, setFlashColors] = useState(Array(clues[0].answer.length).fill(""));
  const [attempts, setAttempts] = useState(0);
  const [guessedWords, setGuessedWords] = useState(new Set());
  const [isSolved, setIsSolved] = useState(false);
  const [guessHistory, setGuessHistory] = useState([]);
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
    
    setGuessedWords(prev => new Set(prev).add(userAnswer));
    setGuessHistory([...guessHistory, userAnswer]);
    
    if (userAnswer === clues[currentClueIndex].answer) {
      setFlashColors(Array(clues[currentClueIndex].answer.length).fill("bg-green-500"));
      setMessage(`🎉 Congratulations! You solved it!`);
      setIsSolved(true);
      confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
    } else {
      setFlashColors(Array(clues[currentClueIndex].answer.length).fill("bg-red-500"));
      setAttempts(prev => prev + 1);
      setMessage(
        attempts + 1 >= MAX_ATTEMPTS 
          ? <div>🐊 Better luck tomorrow! 🐊</div>
          : "❌ Try again!"
      );
    }
  };

  return (
    <div className="flex flex-col items-center p-5">
      <h1 className="text-2xl font-bold mb-4">Bit Cryptic</h1>
      
      {/* Clue Window */}
      <div className="clue-window mb-6">
        <div className="clue-title-bar">Today's Bit Cryptic Clue</div>
        <div className="clue-content">
          <p className="text-lg">{clues[currentClueIndex].clue} ({clues[currentClueIndex].answer.length})</p>
        </div>
      </div>
      
      {/* Main game area with flex layout */}
      <div className="flex gap-8 items-start">
        {/* Left side - Bit Tank */}
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

        {/* Right side - Game Controls */}
        <div className="flex flex-col items-center mt-10">
          <div className="flex gap-2 mb-4">
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
            className="w-full mb-4 text-lg py-6" 
            onClick={checkAnswer} 
            disabled={isSolved || attempts >= MAX_ATTEMPTS}
          >
            Check Answer
          </Button>

          {message && <p className="text-lg font-semibold mb-4">{message}</p>}

          <div className="w-full">
            <h2 className="text-xl font-bold mb-2">Previous Guesses:</h2>
            <ul className="bg-gray-50 p-4 rounded-lg border-2 border-gray-200">
              {guessHistory.map((guess, index) => (
                <li key={index} className="text-lg text-gray-700 mb-1 font-mono">{guess}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
