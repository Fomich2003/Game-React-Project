import './GameInModal.css';

const GameInModal = ({ game }) => {
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('uk-UA', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    const formatPlaytime = (hours) => {
        if (hours < 1) return 'Менше години';
        if (hours === 1) return '1 година';
        if (hours < 5) return `${hours} години`;
        return `${hours} годин`;
    };

    const getRatingColor = (rating) => {
        if (rating >= 4.5) return 'game-in-modal__rating--excellent';
        if (rating >= 4) return 'game-in-modal__rating--good';
        if (rating >= 3) return 'game-in-modal__rating--average';
        return 'game-in-modal__rating--poor';
    };

    return (
        <div className="game-in-modal">
            {/* Header з зображенням та основною інформацією */}
            <div className="game-in-modal__header">
                <div className="game-in-modal__image-container">
                    <img 
                        src={game.background_image} 
                        alt={game.name}
                        className="game-in-modal__image"
                    />
                </div>
                <div className="game-in-modal__main-info">
                    <h3 className="game-in-modal__title">{game.name}</h3>
                    <div className="game-in-modal__meta">
                        <span className="game-in-modal__release-date">
                            Дата виходу: {formatDate(game.released)}
                        </span>
                        {game.esrb_rating && (
                            <span className="game-in-modal__esrb">
                                ESRB: {game.esrb_rating.name}
                            </span>
                        )}
                    </div>
                </div>
            </div>

            {/* Рейтинг та статистика */}
            <div className="game-in-modal__stats">
                <div className="game-in-modal__rating-section">
                    <div className={`game-in-modal__rating ${getRatingColor(game.rating)}`}>
                        <span className="game-in-modal__rating-value">{game.rating}</span>
                        <span className="game-in-modal__rating-max">/5</span>
                    </div>
                    <div className="game-in-modal__rating-details">
                        <span className="game-in-modal__reviews-count">
                            {game.reviews_count.toLocaleString()} відгуків
                        </span>
                        {game.metacritic && (
                            <span className="game-in-modal__metacritic">
                                Metacritic: {game.metacritic}
                            </span>
                        )}
                    </div>
                </div>
                
                <div className="game-in-modal__playtime">
                    <span className="game-in-modal__playtime-label">Час гри:</span>
                    <span className="game-in-modal__playtime-value">
                        {formatPlaytime(game.playtime)}
                    </span>
                </div>
            </div>

            {/* Рейтинги користувачів */}
            <div className="game-in-modal__user-ratings">
                <h4 className="game-in-modal__section-title">Оцінки користувачів</h4>
                <div className="game-in-modal__ratings-list">
                    {game.ratings.map((rating) => (
                        <div key={rating.id} className="game-in-modal__rating-item">
                            <span className="game-in-modal__rating-title">
                                {rating.title === 'exceptional' ? 'Чудова' :
                                 rating.title === 'recommended' ? 'Рекомендована' :
                                 rating.title === 'meh' ? 'Середня' : 'Пропустити'}
                            </span>
                            <div className="game-in-modal__rating-bar">
                                <div 
                                    className="game-in-modal__rating-fill"
                                    style={{ width: `${rating.percent}%` }}
                                ></div>
                            </div>
                            <span className="game-in-modal__rating-percent">
                                {rating.percent}%
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Жанри */}
            {game.genres && game.genres.length > 0 && (
                <div className="game-in-modal__genres">
                    <h4 className="game-in-modal__section-title">Жанри</h4>
                    <div className="game-in-modal__tags">
                        {game.genres.map((genre) => (
                            <span key={genre.id} className="game-in-modal__tag">
                                {genre.name}
                            </span>
                        ))}
                    </div>
                </div>
            )}

            {/* Платформи */}
            <div className="game-in-modal__platforms">
                <h4 className="game-in-modal__section-title">Платформи</h4>
                <div className="game-in-modal__platforms-list">
                    {game.parent_platforms.map((platform) => (
                        <span key={platform.platform.id} className="game-in-modal__platform">
                            {platform.platform.name}
                        </span>
                    ))}
                </div>
            </div>

            {/* Магазини */}
            {game.stores && game.stores.length > 0 && (
                <div className="game-in-modal__stores">
                    <h4 className="game-in-modal__section-title">Доступно в</h4>
                    <div className="game-in-modal__stores-list">
                        {game.stores.map((store) => (
                            <span key={store.id} className="game-in-modal__store">
                                {store.store.name}
                            </span>
                        ))}
                    </div>
                </div>
            )}

            {/* Теги */}
            {game.tags && game.tags.length > 0 && (
                <div className="game-in-modal__game-tags">
                    <h4 className="game-in-modal__section-title">Теги</h4>
                    <div className="game-in-modal__tags">
                        {game.tags.slice(0, 10).map((tag) => (
                            <span key={tag.id} className="game-in-modal__tag game-in-modal__tag--small">
                                {tag.name}
                            </span>
                        ))}
                    </div>
                </div>
            )}

            {/* Додаткові скріншоти */}
            {game.short_screenshots && game.short_screenshots.length > 1 && (
                <div className="game-in-modal__screenshots">
                    <h4 className="game-in-modal__section-title">Скріншоти</h4>
                    <div className="game-in-modal__screenshots-grid">
                        {game.short_screenshots.slice(1, 5).map((screenshot) => (
                            <img
                                key={screenshot.id}
                                src={screenshot.image}
                                alt="Скріншот гри"
                                className="game-in-modal__screenshot"
                            />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default GameInModal;