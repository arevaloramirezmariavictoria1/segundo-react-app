import React, { useCallback, useState } from "react";
import { FormContainer } from "./styles";
import FormField from "../../componentes/FormField/FormField";

const FormTresMejorado = (props) => {
  const [nombre, setNombre] = React.useState("");
  const [apellido, setApellido] = React.useState("");
  const [codigoPostal, setCodigoPostal] = React.useState("");
  const [contraseña, setContraseña] = React.useState("");
  const [direccion, setDireccion] = React.useState("");
  const [ciudad, setCiudad] = React.useState("");
  const [telefono, setTelefono] = React.useState("");
  const [celular, setCelular] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [data, setData] = React.useState("");

  const mostrarInformacion = () => {
    const newData = {
      nombre: nombre,
      apellido: apellido,
      codigoPostal: codigoPostal,
      contraseña: contraseña,
      direccion: direccion,
      ciudad: ciudad,
      telefono: telefono,
      celular: celular,
      email: email,
    };
    setData(newData);
  };
  return (
    <>
      <FormContainer>
        <FormField
          theme={{ label: { color: "red" }, input: { color: "blue" } }}
          label="Nombre:"
          type="text"
          name="input-nombre"
          value={nombre}
          onChange={(value) => setNombre(value)}
        />
        <FormField
          theme={{ label: { color: "yellow" }, input: { color: "green" } }}
          label="Apellido:"
          type="text"
          name="input-Apellido"
          value={apellido}
          onChange={(value) => setApellido(value)}
        />
        <FormField
          theme={{ label: { color: "purple" }, input: { color: "pink" } }}
          label="Codigo Postal:"
          type="text"
          name="input-codigo-postal"
          value={codigoPostal}
          onChange={(value) => setCodigoPostal(value)}
        />
        <FormField
          theme={{ label: { color: "white" }, input: { color: "black" } }}
          label="Contraseña:"
          type="password"
          name="input-contraseña"
          value={contraseña}
          onChange={(value) => setContraseña(value)}
        />
        <FormField
          theme={{ label: { color: "red" }, input: { color: "blue" } }}
          label="Direccion:"
          type="text"
          name="input-direccion"
          value={direccion}
          onChange={(value) => setDireccion(value)}
        />
        <FormField
          theme={{ label: { color: "yellow" }, input: { color: "green" } }}
          label="Ciudad:"
          type="text"
          name="input-ciudad"
          value={ciudad}
          onChange={(value) => setCiudad(value)}
        />
        <FormField
          theme={{ label: { color: "purple" }, input: { color: "pink" } }}
          label="Telefono:"
          type="number"
          name="input-telefono"
          value={telefono}
          onChange={(value) => setTelefono(value)}
        />
        <FormField
          theme={{ label: { color: "white" }, input: { color: "black" } }}
          label="Celular:"
          type="text"
          name="input-celular"
          value={celular}
          onChange={(value) => setCelular(value)}
        />
        <FormField
          theme={{ label: { color: "red" }, input: { color: "blue" } }}
          label="Email:"
          type="email"
          name="input-email"
          value={email}
          onChange={(value) => setEmail(value)}
        />
      </FormContainer>
      <div>
        <button onClick={mostrarInformacion}>Mostrar Informacion</button>
      </div>
      <pre>{JSON.stringify(data, undefined, 2)}</pre>
    </>
  );
};
export default FormTresMejorado;
