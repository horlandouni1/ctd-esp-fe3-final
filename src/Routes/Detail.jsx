import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const { id } = useParams(); // Obtener el ID de la URL
  const [user, setUser] = useState(null); // Estado para almacenar los detalles del usuario

  useEffect(() => {
    // Función para obtener los detalles del usuario
    const fetchUserDetail = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${id}`
        );
        const data = await response.json();
        console.log("dataUser", response);

        setUser(data); // Guardar los detalles en el estado
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };

    fetchUserDetail();
  }, [id]); // Ejecutar cuando el ID cambie

  if (!user) {
    return <div>Loading...</div>; // Mostrar un mensaje de carga mientras se obtienen los datos
  }
  return (
    <>
      <div
        style={{
          padding: "20px",
          border: "1px solid #ddd",
          margin: "20px auto",
          maxWidth: "500px",
        }}
      >
        <h2>Detalles del Usuario</h2>
        <p>
          <strong>Nombre:</strong> {user.name}
        </p>
        <p>
          <strong>Username:</strong> {user.username}
        </p>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <p>
          <strong>Teléfono:</strong> {user.phone}
        </p>
        <p>
          <strong>Website:</strong> {user.website}
        </p>
        <p>
          <strong>Empresa:</strong> {user.company.name}
        </p>
        <p>
          <strong>Dirección:</strong> {user.address.street}, {user.address.city}
        </p>
      </div>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </>
  );
};

export default Detail;
