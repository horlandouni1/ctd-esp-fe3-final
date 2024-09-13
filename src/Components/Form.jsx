import React, { useContext, useState } from "react";
import { ContextGlobal } from "./utils/global.context";

const Form = () => {
  const { state } = useContext(ContextGlobal);
  const isDarkTheme = state.theme === "dark";
  //Aqui deberan implementar el form completo con sus validaciones
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccessMessage("");

    // Validaciones
    if (name.length <= 5) {
      setError(
        "Por favor verifique su información nuevamente: Nombre completo debe tener más de 5 caracteres."
      );
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setError(
        "Por favor verifique su información nuevamente: Formato de email incorrecto."
      );
      return;
    }

    // Si pasa las validaciones, mostrar mensaje de éxito
    console.log({ name, email }); // Mostrar en la consola los datos del formulario
    setSuccessMessage(
      `Gracias ${name}, te contactaremos cuando antes vía mail.`
    );
    setName("");
    setEmail("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "15px" }}>
          <label
            htmlFor="name"
            style={{
              display: "block",
              marginBottom: "5px",
              color: isDarkTheme ? "#fff" : "#333",
              textAlign: "left",
            }}
          >
            Nombre completo:
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
            required
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label
            htmlFor="email"
            style={{
              display: "block",
              marginBottom: "5px",
              color: isDarkTheme ? "#fff" : "#333",
              textAlign: "left",
            }}
          >
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
            required
          />
        </div>
        <button
          type="submit"
          style={{
            padding: "10px 20px",
            backgroundColor: "#007BFF",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Enviar
        </button>
      </form>

      {/* Mostrar mensajes de error o éxito */}
      {error && <p style={{ color: "red", marginTop: "20px" }}>{error}</p>}
      {successMessage && (
        <p style={{ color: "green", marginTop: "20px" }}>{successMessage}</p>
      )}
    </div>
  );
};

export default Form;
