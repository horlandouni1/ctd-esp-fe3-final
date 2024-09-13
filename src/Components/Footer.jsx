import { useContext } from "react";
import logoDigital from "../assets/images/DH.png";
import { ContextGlobal } from "./utils/global.context";
const Footer = () => {
  const { state } = useContext(ContextGlobal);
  const isDarkTheme = state.theme === "dark";
  return (
    <footer
      style={{
        backgroundColor: isDarkTheme ? "#333" : "#f0f4f7",
        padding: "10px 20px",
        marginTop: "30px",
        textAlign: "center",
      }}
    >
      <p style={{ color: isDarkTheme ? "#fff" : "#333" }}>Powered by</p>
      <img
        src={logoDigital}
        alt="DH-logo"
        style={{ width: "250px", height: "100px" }}
      />
    </footer>
  );
};

export default Footer;
