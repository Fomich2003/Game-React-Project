import { createContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [games, setGames] = useState([]);
  const [favoriteGames, setFavoriteGames] = useState([]);

  return (
    <AppContext.Provider value={{ games, setGames, favoriteGames, setFavoriteGames }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };