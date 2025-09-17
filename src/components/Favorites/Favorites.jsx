import { useState, useContext } from 'react';
import { AppContext } from '../../contexts/AppContext.jsx';
import FavoriteCard from '../FavoriteCard/FavoriteCard.jsx';
import './Favorites.css';

const Favorites = () => {
  const { favoriteGames } = useContext(AppContext);
  const [filter, setFilter] = useState('all');

  const filteredGames = favoriteGames.filter((game) => {
    if (filter === 'all') return true;
    if (filter === 'completed') return game.status === 'completed';
    if (filter === 'dropped') return game.status === 'dropped';
    if (filter === 'not_played') return !game.status || game.status === 'not_played';
    return true;
  });


  return (
    <div className="favorites">
      <div className="favorites-header">
        <h2 className="favorites-title">Улюблені ігри</h2>
        <span className="favorites-counter">({favoriteGames.length})</span>
      </div>

      <div className="filters">
        <button
          onClick={() => setFilter('all')}
          className={`filter-btn ${filter === 'all' ? 'filter-active' : ''}`}
        >
          Всі ({favoriteGames.length})
        </button>
        <button
          onClick={() => setFilter('completed')}
          className={`filter-btn ${filter === 'completed' ? 'filter-active-green' : ''}`}
        >
          Пройдені ({favoriteGames.filter(g => g.status === 'completed').length})
        </button>
        <button
          onClick={() => setFilter('dropped')}
          className={`filter-btn ${filter === 'dropped' ? 'filter-active-red' : ''}`}
        >
          Закинуті ({favoriteGames.filter(g => g.status === 'dropped').length})
        </button>
      </div>

      <div className="favorites-container">
        {filteredGames.length === 0 ? (
          <div className="empty-state">
            <p>Немає ігор у цій категорії</p>
          </div>
        ) : (
            filteredGames.map((game) => (
              <FavoriteCard
                key={game.id}
                game={game}
              />
            ))
        )}
      </div>
    </div>
  );
};

export default Favorites;