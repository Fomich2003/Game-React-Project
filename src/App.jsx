import { useState, useEffect, useContext } from "react";
import GameList from "./components/GameList/GameList.jsx";
import Favorites from "./components/Favorites/Favorites.jsx";
import gameService from "./services/gameService.js";
import Loader from "./components/Loader/Loader.jsx";
import Error from "./components/Error/Error.jsx";
import { AppContext } from "./contexts/AppContext.jsx";
import "./index.css";

function App() {
  const { setGames } = useContext(AppContext);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!loading) return;

    gameService.getAllGames()
      .then((games) => setGames(games))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [loading]);

  if (loading) return <Loader />;
  if (error) return <Error message={error} />;

  return (
    <div className="app">
      <GameList />
      <Favorites />
    </div>
  );
}

export default App;