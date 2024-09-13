import { useNavigate } from "react-router";
import imgMedico from "../assets/images/doctor.jpg";
import { useContext } from "react";
import { ContextGlobal } from "./utils/global.context";
const Card = ({
  name,
  username,
  id,
  handleFavoriteClick,
  isFavorite,
  user,
}) => {
  const { state } = useContext(ContextGlobal);
  const isDarkTheme = state.theme === "dark";
  const navigate = useNavigate();
  const addFav = (user) => {
    // Aqui iria la logica para agregar la Card en el localStorage
    handleFavoriteClick(user);
  };
  const viewDetail = () => {
    navigate(`/detail/${id}`);
  };
  const cardStyle = {
    with: "20%",
    border: isDarkTheme ? "1px solid white" : "1px solid black",
    fontSize: "13px",
    display: "flex",
    flexDirection: "column",
  };
  return (
    <div className="card" style={cardStyle}>
      {/* En cada card deberan mostrar en name - username y el id */}
      <img src={imgMedico} alt="" style={{ with: "200px", height: "200px" }} />
      <div style={{ padding: "8px", display: "flex", flexDirection: "column" }}>
        <h3 style={{ color: isDarkTheme ? "#fff" : "#000" }}>
          Id: <span>{id}</span>
        </h3>
        <h2 style={{ margin: "8px 0", color: isDarkTheme ? "#fff" : "#000" }}>
          Name: {name}
        </h2>
        <h3 style={{ color: isDarkTheme ? "#fff" : "#000" }}>
          Username:{username}
        </h3>
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
        <button
          style={{ marginBottom: "5px", marginTop: "5px" }}
          onClick={viewDetail}
        >
          ver detalle
        </button>
        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={() => addFav(user)} className="favButton">
          {isFavorite(user.id) ? "Quitar de favoritos" : "Añadir a favoritos"}
        </button>
      </div>
    </div>
  );
};

export default Card;
