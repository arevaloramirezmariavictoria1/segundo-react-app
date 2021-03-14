import React from "react";
import FormField from "../../componentes/FormField/FormField";
import { FormContainer, FormRadioField, FormLabel, FormInput } from "./styles";
const FormUnoMejoradoV2 = () => {
  const inicialData = {
    firstName: "",
    lastName: "",
    email: "",
    reEnterEmail: "",
    newPassword: "",
    iAm: "",
    birthday: "",
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
          label="First Name:"
          type="text"
          name="firstName"
          value={data.firstName}
          onChange={(value) => onChange(value, "firstName")}
        />
        <FormField
          theme={{ label: { color: "yellow" }, input: { color: "green" } }}
          label="Last Name:"
          type="text"
          name="lastName"
          value={data.lastName}
          onChange={(value) => onChange(value, "lastName")}
        />
        <FormField
          theme={{ label: { color: "purple" }, input: { color: "pink" } }}
          label="Email:"
          type="email"
          name="email"
          value={data.email}
          onChange={(value) => onChange(value, "email")}
        />
        <FormField
          theme={{ label: { color: "white" }, input: { color: "black" } }}
          label="Re Enter Email:"
          type="email"
          name="reEnterEmail"
          value={data.reEnterEmail}
          onChange={(value) => onChange(value, "reEnterEmail")}
        />
        <FormField
          theme={{ label: { color: "red" }, input: { color: "blue" } }}
          label="New Password:"
          type="password"
          name="newPassword"
          value={data.newPassword}
          onChange={(value) => onChange(value, "newPassword")}
        />
        <FormRadioField>
          <FormLabel>I am:</FormLabel>
          <label for="input-femenino">Femenino</label>
          <FormInput
            type="radio"
            name="iAm"
            id="input-femenino"
            value="femenino"
            checked={data.iAm === "femenino"}
            onChange={(evento) =>
              setData({ ...data, [evento.target.name]: evento.target.value })
            }
          />
          <label for="input-masculino">Masculino</label>
          <FormInput
            type="radio"
            name="iAm"
            id="input-masculino"
            value="masculino"
            checked={data.iAm === "masculino"}
            onChange={(evento) =>
              setData({ ...data, [evento.target.name]: evento.target.value })
            }
          />
        </FormRadioField>
        <FormField
          theme={{ label: { color: "yellow" }, input: { color: "green" } }}
          label="Birthday:"
          type="date"
          name="birthday"
          value={data.birthday}
          onChange={(value) => onChange(value, "birthday")}
        />
      </FormContainer>
      <pre>{JSON.stringify(data, undefined, 2)}</pre>
    </>
  );
};
export default FormUnoMejoradoV2;
