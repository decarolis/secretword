import { useState, useRef } from "react";
import "./Game.css";

const Game = ({
  verifyLetter,
  pickedCategory,
  letters,
  guessedLetters,
  wrongLetters,
  guesses,
  score,
}) => {
  const [letter, setLetter] = useState("");
  const letterInputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    verifyLetter(letter);
    setLetter("");
    letterInputRef.current.focus();
  };

  return (
    <div className="game">
      <h1>Adivinhe a palavra:</h1>
      <div className="tip">
        <h3>
          Dica sobre a palavra: <span>{pickedCategory}</span>
        </h3>
        <p>Você ainda tem <span>{guesses}</span> tentativa(s).</p>
      </div>
      <div className="wordContainer">
        {letters.map((letter, i) =>
          guessedLetters.includes(letter) ? (
            <span className="letter" key={i}>
              {letter}
            </span>
          ) : (
            <span className="blankSquare" key={i}></span>
          )
        )}
      </div>
      <div className="letterContainer">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="letter"
            maxLength="1"
            required
            onChange={(e) => setLetter(e.target.value)}
            value={letter}
            ref={letterInputRef}
          />
          <button>Play</button>
        </form>
      </div>
      <div className="wrongLettersContainer">
        <h3>
          Letras já utilizadas:{" "}
          {wrongLetters.map((letter, i) => 
            <><span key={i}>{letter}</span>{wrongLetters.length -1 === i ? "" : ", "} </>
          )}
        </h3>
      </div>
      <p className="points">
        Palavras Corretas: <span>{score}</span>
      </p>
    </div>
  );
};

export default Game;
