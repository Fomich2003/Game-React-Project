import GameCard from '../GameCard/GameCard.jsx';
import './GameList.css';
import { AppContext } from '../../contexts/AppContext.jsx';
import { useContext } from 'react';

const GameList = () => {
  const { games } = useContext(AppContext);

  return (
    <div className="game-list">
      <h2 className="game-list-title">Всі ігри</h2>
      <div className="games-container">
        {games.map((game) => (
          <GameCard
            key={game.id}
            game={game}
          />
        ))}
      </div>
    </div>
  );
};

export default GameList;