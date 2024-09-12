import logoDigital from "../assets/images/DH.png";
const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#f0f4f7",
        padding: "10px 20px",
        marginTop: "30px",
        textAlign: "center",
      }}
    >
      <p>Powered by</p>
      <img
        src={logoDigital}
        alt="DH-logo"
        style={{ width: "250px", height: "100px" }}
      />
    </footer>
  );
};

export default Footer;
