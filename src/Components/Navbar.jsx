import { useContext } from "react";
import { Link } from "react-router-dom";
import { ACTIONS, ContextGlobal } from "./utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { state, dispatch } = useContext(ContextGlobal);
  const isDarkTheme = state.theme === "dark";
  const toggleTheme = () => {
    dispatch({
      type: ACTIONS.SET_THEME,
      payload: state.theme === "dark" ? "light" : "dark",
    });
  };
  const navbarStyle = {
    padding: "10px 20px",
    backgroundColor: isDarkTheme ? "#333" : "#f0f4f7", // Color de fondo claro
    borderBottom: "2px solid #e0e0e0",
  };

  const logoStyle = {
    fontSize: "1.5rem",
    color: "#007BFF", // Color de acento para el logo
    textDecoration: "none",
    fontWeight: "bold",
  };

  const navLinksStyle = {
    display: "flex",
    gap: "20px",
  };

  const linkStyle = {
    color: isDarkTheme ? "#fff" : "#333", // Color de texto
    textDecoration: "none",
    fontSize: "1.1rem",
    fontWeight: "500",
    padding: "8px 16px",
    borderRadius: "4px",
    transition: "background-color 0.3s",
  };

  return (
    <nav style={navbarStyle}>
      <div
        style={{
          maxWidth: "1250px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "0 auto",
        }}
      >
        <button onClick={toggleTheme}>
          Switch to {state.theme === "dark" ? "light" : "dark"} theme
        </button>
        <Link to="/home" style={logoStyle}>
          MedicalApp
        </Link>
        <div style={navLinksStyle}>
          <Link to="/home" style={linkStyle}>
            Home
          </Link>
          <Link to="/contact" style={linkStyle}>
            Contact
          </Link>
          {/* <Link to="/detail" style={linkStyle}>
          Detail
        </Link> */}
          <Link to="/favs" style={linkStyle}>
            Favs
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
