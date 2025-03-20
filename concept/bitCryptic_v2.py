import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import confetti from "canvas-confetti";

const clues = [
  { clue: "Church's first meter echos bright sound", answer: "CHIME" },
  // Add more clues here
];

const MAX_ATTEMPTS = 3;
const crocStages = [
  "/mnt/data/CrpyticCroc_Stage_0.jpg",
  "/mnt/data/CrpyticCroc_Stage_1.jpg",
  "/mnt/data/CrpyticCroc_Stage_2.jpg",
  "/mnt/data/CrypticCroc_Stage_Final.png",
];

export default function CrypticCrocGame() {
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
    setAttempts(prev => prev + 1);
    setGuessHistory([...guessHistory, userAnswer]);
    
    if (userAnswer === clues[currentClueIndex].answer) {
      setFlashColors(Array(clues[currentClueIndex].answer.length).fill("bg-green-500"));
      setMessage(`🎉 Congratulations! You guessed it on attempt ${attempts + 1}`);
      setIsSolved(true);
      confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
    } else {
      setFlashColors(Array(clues[currentClueIndex].answer.length).fill("bg-red-500"));
      setMessage(attempts + 1 >= MAX_ATTEMPTS ? "🐊 You got Croc'd! Cryptic Croc has come to claim your clues, better luck tomorrow!" : "❌ Try again!");
    }
  };

  return (
    <div className="flex flex-col items-center p-5">
      <h1 className="text-2xl font-bold">Cryptic Croc Game</h1>
      <p className="text-lg mt-2">{clues[currentClueIndex].clue} ({clues[currentClueIndex].answer.length} letters)</p>
      <p className="text-lg mt-2">Attempts: <span className="text-blue-500 font-bold">{attempts} / {MAX_ATTEMPTS}</span></p>
      <img src={getCrocodileStage()} alt="Crocodile Danger Level" className="w-40 h-40 mt-4" />
      <div className="flex mt-4">
        {userInput.map((char, index) => (
          <input
            key={index}
            type="text"
            maxLength="1"
            value={char}
            onChange={(e) => handleChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            ref={(el) => (inputRefs.current[index] = el)}
            className={`w-10 h-10 text-center border border-gray-400 mx-1 text-lg transition-transform duration-300 transform ${flashColors[index]} ${flashColors[index] === 'bg-red-500' ? 'shake' : ''}`}
            disabled={isSolved || attempts >= MAX_ATTEMPTS}
          />
        ))}
      </div>
      <Button className="mt-4" onClick={checkAnswer} disabled={isSolved || attempts >= MAX_ATTEMPTS}>Check Answer</Button>
      {message && <p className="mt-2 text-lg font-semibold">{message}</p>}
      <div className="mt-4">
        <h2 className="text-xl font-bold">Previous Guesses:</h2>
        <ul>
          {guessHistory.map((guess, index) => (
            <li key={index} className="text-lg text-gray-700">{guess}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
