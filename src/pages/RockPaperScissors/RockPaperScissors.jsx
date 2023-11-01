import { useState } from "react";
import { Helmet } from "react-helmet-async";

const CHOICES = [
  { name: "rock", emoji: "✊" },
  { name: "paper", emoji: "✋" },
  { name: "scissors", emoji: "✌️" },
];

const RockPaperScissors = () => {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [codeyChoice, setCodeyChoice] = useState(null);
  const [result, setResult] = useState(null);

  const handlePlayerChoice = (choice) => {
    const codeyChoice = CHOICES[Math.floor(Math.random() * CHOICES.length)];
    setPlayerChoice(choice);
    setCodeyChoice(codeyChoice);
    if (choice.name === codeyChoice.name) {
      setResult("Tie!");
    } else if (
      (choice.name === "rock" && codeyChoice.name === "scissors") ||
      (choice.name === "paper" && codeyChoice.name === "rock") ||
      (choice.name === "scissors" && codeyChoice.name === "paper")
    ) {
      setResult("You win!");
    } else {
      setResult("You lose!");
    }
  };

  const resetGame = () => {
    setPlayerChoice(null);
    setCodeyChoice(null);
    setResult(null);
  };

  return (
    <div>
      <Helmet>
        <title>Rock, Paper, Scissors</title>
      </Helmet>
      <h1>Rock Paper Scissors</h1>
      <div>
        {CHOICES.map((choice) => (
          <button
            key={choice.name}
            onClick={() => handlePlayerChoice(choice)}
            aria-label={choice.name}
          >
            {choice.emoji}
          </button>
        ))}
      </div>
      {playerChoice && codeyChoice && (
        <div>
          <div>
            <span>{playerChoice.emoji}</span>
            <p>You chose {playerChoice.name}</p>
          </div>
          <div>
            <span>{codeyChoice.emoji}</span>
            <p>The computer chose {codeyChoice.name}</p>
          </div>
          <h2>{result}</h2>
          <button onClick={resetGame}>Play again</button>
        </div>
      )}
    </div>
  );
};

export default RockPaperScissors;
