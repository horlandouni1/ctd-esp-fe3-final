import { createContext, useMemo, useReducer } from "react";

// Define las acciones
export const ACTIONS = {
  SET_THEME: "SET_THEME",
  SET_USERS: "SET_USERS",
};

// Define el estado inicial
export const initialState = { theme: "ss", users: [] };

// Define el reductor para manejar las acciones
const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_THEME:
      return { ...state, theme: action.payload };
    case ACTIONS.SET_DATA:
      return { ...state, users: action.payload };
    default:
      return state;
  }
};

export const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const value = useMemo(() => ({ state, dispatch }), [state]);
  return (
    <ContextGlobal.Provider value={value}>{children}</ContextGlobal.Provider>
  );
};
