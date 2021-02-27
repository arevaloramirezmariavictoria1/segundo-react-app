import React from "react";
import FormField from "../../componentes/FormField/FormField";
import { FormContainer } from "./styles";

const FormTresMejoradoV3 = () => {
  const inicialData = {
    nombre: "",
    apellido: "",
    codigoPostal: "",
    contraseña: "",
    ciudad: "",
    telefono: "",
    celular: "",
    email: "",
  };
  const campos = [
    { label: "Nombre:", type: "text", name: "nombre" },
    { label: "Apellido:", type: "text", name: "apellido" },
    { label: "Codigo Postal:", type: "text", name: "codigoPostal" },
    { label: "Contraseña:", type: "password", name: "contraseña" },
    { label: "Ciudad:", type: "text", name: "ciudad" },
    { label: "Telefono:", type: "number", name: "telefono" },
    { label: "Celular:", type: "text", name: "celular" },
    { label: "Email:", type: "email", name: "email" },
  ];
  const [data, setData] = React.useState(inicialData);
  const onChange = (value, element) => {
    setData({ ...data, [element]: value });
  };
  return (
    <>
      <FormContainer>
        {campos.map((campo) => 
          <FormField
            key={campo.name}
            theme={{ label: { color: "red" }, input: { color: "blue" } }}
            label={campo.label}
            type={campo.type}
            name={campo.name}
            value={data[campo.name]}
            onChange={(value) => onChange(value, campo.name)}
          />
        )}
      </FormContainer>
      <pre>{JSON.stringify(data, undefined, 2)}</pre>
    </>
  );
};
export default FormTresMejoradoV3;