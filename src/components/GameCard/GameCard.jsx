import './GameCard.css';
import { useContext, useState } from 'react';
import { AppContext } from '../../contexts/AppContext';
import { Info } from 'lucide-react';
import Modal from '../Modal/Modal';
import GameInModal from '../GameInModal/GameInModal';

const GameCard = ({ game }) => {
  const { favoriteGames, setFavoriteGames } = useContext(AppContext);
  const [isOpenModal, setIsOpenModal] = useState(false);

  console.log(game);

  const isInFavorites = favoriteGames.some((g) => g.id === game.id);

  const addToFavorites = () => {
    if (!favoriteGames.find((g) => g.id === game.id)) {
      setFavoriteGames([...favoriteGames, { ...game, status: 'not_played' }]);
    }
  };

  const showGameInfo = () => {
    setIsOpenModal(true);
  };

  const closeGameInfo = () => {
    setIsOpenModal(false);
  };

  return (
    <div className="game-card">
      <img
        src={game.background_image || 'https://via.placeholder.com/300x200'}
        alt={game.name}
        className="game-card-image"
      />
      <div className="game-card-content">
        <h3 className="game-card-title">{game.name}</h3>
        <p className="game-card-rating">Рейтинг: {game.rating || 'N/A'}</p>

        <div className="game-card-buttons">
          <button
            onClick={() => addToFavorites(game)}
            disabled={isInFavorites}
            className={`game-card-button ${isInFavorites ? 'button-disabled' : 'button-active'}`}
          >
            {isInFavorites ? 'Вже в улюблених' : 'Додати в улюблені'}
          </button>
          <button className="game-card-more" onClick={showGameInfo}>
            <Info />
          </button>
        </div>
      </div>

      <Modal children={<GameInModal game={game} />} isOpen={isOpenModal} onClose={closeGameInfo} />
    </div>
  );
};

export default GameCard;
