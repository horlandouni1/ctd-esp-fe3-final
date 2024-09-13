import React, { useContext } from "react";
import Form from "../Components/Form";
import { ContextGlobal } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  const { state } = useContext(ContextGlobal);
  const isDarkTheme = state.theme === "dark";
  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "0 auto",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <h2
        style={{ color: isDarkTheme ? "#fff" : "#333", marginBottom: "20px" }}
      >
        Contáctanos
      </h2>
      <Form />
    </div>
  );
};

export default Contact;
