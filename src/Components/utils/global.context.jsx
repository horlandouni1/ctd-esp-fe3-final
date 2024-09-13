import { createContext, useEffect, useMemo, useReducer } from "react";

// Define las acciones
export const ACTIONS = {
  SET_THEME: "SET_THEME",
  ADD_TO_FAVORITES: "ADD_TO_FAVORITES",
  REMOVE_FROM_FAVORITES: "REMOVE_FROM_FAVORITES",
};

// Define el estado inicial
export const initialState = {
  theme: "light",
  favorites: JSON.parse(localStorage.getItem("favorites")) || [],
};

// Define el reductor para manejar las acciones
const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_THEME:
      return { ...state, theme: action.payload };
    case ACTIONS.ADD_TO_FAVORITES:
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    case ACTIONS.REMOVE_FROM_FAVORITES:
      return {
        ...state,
        favorites: state.favorites.filter((user) => user.id !== action.payload),
      };
    default:
      return state;
  }
};

export const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const value = useMemo(() => ({ state, dispatch }), [state]);
  // Guardar en localStorage cuando el estado cambie
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(state.favorites));
  }, [state.favorites]);
  return (
    <ContextGlobal.Provider value={value}>{children}</ContextGlobal.Provider>
  );
};
