import React, { useContext } from "react";
import Card from "../Components/Card";
import { ACTIONS, ContextGlobal } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const { state, dispatch } = useContext(ContextGlobal);
  const handleRemoveFavorite = (userId) => {
    dispatch({ type: ACTIONS.REMOVE_FROM_FAVORITES, payload: userId });
  };
  const isFavorite = (userId) => {
    return state.favorites.some((user) => user.id === userId);
  };

  const handleFavoriteClick = (user) => {
    if (isFavorite(user.id)) {
      dispatch({ type: ACTIONS.REMOVE_FROM_FAVORITES, payload: user.id });
    } else {
      dispatch({ type: ACTIONS.ADD_TO_FAVORITES, payload: user });
    }
  };
  return (
    <>
      <div
        className=""
        style={{ width: "100%", maxWidth: "1250px", margin: "0 auto" }}
      >
        <h1>Favorites dentists</h1>
        <div
          className="card-grid"
          style={{
            width: "100%",
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "10px",
            margin: "0 auto",
          }}
        >
          {/* Aqui deberias renderizar las cards */}
          {state.favorites.map((e) => (
            <Card
              key={e.id}
              id={e.id}
              name={e.name}
              username={e.username}
              user={e}
              handleFavoriteClick={handleFavoriteClick}
              isFavorite={isFavorite}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Favs;
