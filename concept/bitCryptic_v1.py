import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import confetti from "canvas-confetti";

const clues = [
  { clue: "Church's first meter echos bright sound", answer: "CHIME" },
  // Add more clues here
];

export default function CrosswordGame() {
  const [currentClueIndex, setCurrentClueIndex] = useState(0);
  const [userInput, setUserInput] = useState(Array(clues[0].answer.length).fill(""));
  const [message, setMessage] = useState("");
  const [flashColors, setFlashColors] = useState(Array(clues[0].answer.length).fill(""));
  const [attempts, setAttempts] = useState(0);
  const [guessedWords, setGuessedWords] = useState(new Set());
  const [isSolved, setIsSolved] = useState(false);
  const inputRefs = useRef([]);

  useEffect(() => {
    if (flashColors.some(color => color)) {
      setTimeout(() => setFlashColors(Array(clues[0].answer.length).fill("")), 500);
    }
  }, [flashColors]);

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
    
    if (userAnswer === clues[currentClueIndex].answer) {
      setFlashColors(Array(clues[currentClueIndex].answer.length).fill("bg-green-500"));
      setMessage(`Congratulations! You guessed it on attempt ${attempts + 1}`);
      setIsSolved(true);
      confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
    } else {
      setFlashColors(Array(clues[currentClueIndex].answer.length).fill("bg-red-500"));
      setMessage("Try again!");
    }
  };

  return (
    <div className="flex flex-col items-center p-5">
      <h1 className="text-2xl font-bold">Crossword Game</h1>
      <p className="text-lg mt-2">{clues[currentClueIndex].clue} ({clues[currentClueIndex].answer.length} letters)</p>
      <p className="text-lg mt-2">Attempts: {attempts}</p>
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
            className={`w-10 h-10 text-center border border-gray-400 mx-1 text-lg transition-colors duration-500 ${flashColors[index]}`}
            disabled={isSolved}
          />
        ))}
      </div>
      <Button className="mt-4" onClick={checkAnswer} disabled={isSolved}>Check Answer</Button>
      {message && <p className="mt-2 text-lg font-semibold">{message}</p>}
    </div>
  );
}
