import React from "react";
import FormField from "../../componentes/FormField/FormField";
import { FormContainer } from "./styles";

const FormDosMejoradoV3 = () => {
  const inicialData = {
    firstName: "",
    lastName: "",
    email: "",
    reEnterEmail: "",
    newPassword: "",
    birthday: "",
  };
  const campos = [
    { label: "First Name:", type: "text", name: "firstName" },
    { label: "Last Name:", type: "text", name: "lastName" },
    { label: "Email:", type: "email", name: "email" },
    { label: "Re Enter Email:", type: "email", name: "reEnterEmail" },
    { label: "New Password:", type: "password", name: "newPassword" },
    { label: "Birthday:", type: "date", name: "birthday" },
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
export default FormDosMejoradoV3;