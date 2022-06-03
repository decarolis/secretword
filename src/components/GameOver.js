import "./GameOver.css";

const GameOver = ({ retry, score }) => {
  return (
    <div className="end">
      <h1>Game over</h1>
      <h2>Palavras corretas: <span>{score}</span></h2>
      <button onClick={retry}>Recomeçar jogo</button>
    </div>
  );
};

export default GameOver;
