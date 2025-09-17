import { useContext } from 'react';
import { AppContext } from '../../contexts/AppContext.jsx';
import './FavoriteCard.css';

const FavoriteCard = ({ game }) => {
  const { setFavoriteGames } = useContext(AppContext);

  const getStatusClass = (status) => {
    switch (status) {
      case 'completed': return 'status-completed';
      case 'dropped': return 'status-dropped';
      default: return 'status-not-played';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'completed': return 'Пройдено';
      case 'dropped': return 'Закинута';
      default: return 'Не зіграно';
    }
  };

    const removeFromFavorites = (id) => {
    setFavoriteGames((prev) => prev.filter((game) => game.id !== id));
  };

    const updateStatus = (id, status) => {
    setFavoriteGames((prev) =>
      prev.map((game) =>
        game.id === id ? { ...game, status: status } : game
      )
    );
  };


  return (
    <div className={`favorite-card ${getStatusClass(game.status)}`}>
      <img
        src={game.background_image || 'https://via.placeholder.com/300x200'}
        alt={game.name}
        className="favorite-card-image"
      />
      <div className="favorite-card-content">
        <h3 className="favorite-card-title">{game.name}</h3>
        <p className="favorite-card-status">
          Статус: <span className={getStatusClass(game.status)}>
            {getStatusText(game.status)}
          </span>
        </p>

        <div className="favorite-card-actions">
          <div className="status-buttons">
            <button
              onClick={() => updateStatus(game.id, 'completed')}
              className={`status-btn ${game.status === 'completed' ? 'active-completed' : 'btn-completed'}`}
            >
              Пройдено
            </button>
            <button
              onClick={() => updateStatus(game.id, 'dropped')}
              className={`status-btn ${game.status === 'dropped' ? 'active-dropped' : 'btn-dropped'}`}
            >
              Закинута
            </button>
          </div>
          <button
            onClick={() => removeFromFavorites(game.id)}
            className="remove-btn"
          >
            Видалити з улюблених
          </button>
        </div>
      </div>
    </div>
  );
};

export default FavoriteCard;