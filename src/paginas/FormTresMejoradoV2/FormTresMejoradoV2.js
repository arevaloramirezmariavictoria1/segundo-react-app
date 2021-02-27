import React from "react";
import { FormContainer } from "./styles";
import FormField from "../../componentes/FormField/FormField";

const FormTresMejoradoV2 = () => {
    const inicialData = {
      nombre:"",
      apellido: "",
      codigoPostal:"",
      contraseña:"",
      direccion:"",
      ciudad:"",
      telefono:"",
      celular:"",
      email:"",
    };
    const [data, setData] = React.useState(inicialData);
    const onChange = (value, element) => {
      setData({ ...data, [element]: value });
  };
  return (
    <>
      <FormContainer>
        <FormField
          theme={{ label: { color: "red" }, input: { color: "blue" } }}
          label="Nombre:"
          type="text"
          name="nombre"
          value={data.nombre}
          onChange={(value) => onChange(value, "nombre")}
        />
        <FormField
          theme={{ label: { color: "yellow" }, input: { color: "green" } }}
          label="Apellido:"
          type="text"
          name="apellido"
          value={data.apellido}
          onChange={(value) =>onChange(value, "apellido")}
        />
        <FormField
          theme={{ label: { color: "purple" }, input: { color: "pink" } }}
          label="Codigo Postal:"
          type="text"
          name="codigoPostal"
          value={data.codigoPostal}
          onChange={(value) => onChange(value, "codigoPostal")}
        />
        <FormField
          theme={{ label: { color: "white" }, input: { color: "black" } }}
          label="Contraseña:"
          type="password"
          name="contraseña"
          value={data.contraseña}
          onChange={(value) => onChange(value, "contraseña")}
        />
        <FormField
          theme={{ label: { color: "red" }, input: { color: "blue" } }}
          label="Direccion:"
          type="text"
          name="direccion"
          value={data.direccion}
          onChange={(value) => onChange(value, "direccion")}
        />
        <FormField
          theme={{ label: { color: "yellow" }, input: { color: "green" } }}
          label="Ciudad:"
          type="text"
          name="ciudad"
          value={data.ciudad}
          onChange={(value) => onChange(value, "ciudad")}
        />
        <FormField
          theme={{ label: { color: "purple" }, input: { color: "pink" } }}
          label="Telefono:"
          type="number"
          name="telefono"
          value={data.telefono}
          onChange={(value) => onChange(value, "telefono")}
        />
        <FormField
          theme={{ label: { color: "white" }, input: { color: "black" } }}
          label="Celular:"
          type="text"
          name="celular"
          value={data.celular}
          onChange={(value) => onChange(value, "celular")}
        />
        <FormField
          theme={{ label: { color: "red" }, input: { color: "blue" } }}
          label="Email:"
          type="email"
          name="email"
          value={data.email}
          onChange={(value) => onChange(value, "email")}
        />
      </FormContainer>
      <pre>{JSON.stringify(data, undefined, 2)}</pre>
    </>
  );
};
export default FormTresMejoradoV2;
