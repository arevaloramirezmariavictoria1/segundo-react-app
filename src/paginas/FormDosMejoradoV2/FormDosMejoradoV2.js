import React from "react";
import FormField from "../../componentes/FormField/FormField";
import { FormContainer, FormRadioField, FormLabel, FormInput } from "./styles";
const FormDosMejoradoV2 = () => {
  const inicialData = {
    nombre: "",
    apellido: "",
    empresa: "",
    cargo: "",
    direccion: "",
    ciudad: "",
    telefono: "",
    celular: "",
    email: "",
  };
  const [data, setData] = React.useState(inicialData);
  const onChange = (value, element) => {
    if (value === "Maria") {
      debugger;
    }
     setData({ ...data, [element]: value })
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
          onChange={(value) => onChange(value, "apellido")}
        />
        <FormField
          theme={{ label: { color: "purple" }, input: { color: "pink" } }}
          label="Empresa:"
          type="text"
          name="empresa"
          value={data.empresa}
          onChange={(value) => onChange(value, "empresa")}
        />
        <FormField
          theme={{ label: { color: "white" }, input: { color: "black" } }}
          label="Cargo:"
          type="text"
          name="cargo"
          value={data.cargo}
          onChange={(value) => onChange(value, "cargo")}
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
          theme={{ label: { color: "red" }, input: { color: "blue" } }}
          label="Ciudad:"
          type="text"
          name="ciudad"
          value={data.ciudad}
          onChange={(value) => onChange(value, "ciudad")}
        />
        <FormField
          theme={{ label: { color: "yellow" }, input: { color: "green" } }}
          label="Telefono:"
          type="number"
          name="telefono"
          value={data.telefono}
          onChange={(value) => onChange(value, "telefono")}
        />
        <FormField
          theme={{ label: { color: "purple" }, input: { color: "green" } }}
          label="Celular:"
          type="text"
          name="celular"
          value={data.celular}
          onChange={(value) => onChange(value, "celular")}
        />
        <FormField
          theme={{ label: { color: "white" }, input: { color: "green" } }}
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
export default FormDosMejoradoV2;
