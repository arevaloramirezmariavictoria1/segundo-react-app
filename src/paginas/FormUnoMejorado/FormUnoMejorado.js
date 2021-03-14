import React, { useCallback, useState } from "react";
import { FormContainer } from "./styles";
import FormField from "../../componentes/FormField/FormField";

const FormUnoMejorado = (props) => {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [reEnterEmail, setReEnterEmail] = React.useState("");
  const [newPassword, setNewPassword] = React.useState("");
  const [iAm, setIAm] = React.useState("");
  const [birthday, setBirthday] = React.useState("");
  const [data, setData] = React.useState("");

  const mostrarInformacion = () => {
    const newData = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      reEnterEmail: reEnterEmail,
      newPassword: newPassword,
      iAm: iAm,
      birthday: birthday,
    };
    setData(newData);
  };
  return (
    <>
      <FormContainer>
        <FormField
          theme={{ label: { color: "red" }, input: { color: "blue" } }}
          label="First Name:"
          type="text"
          name="input-first-name"
          value={firstName}
          onChange={(value) => setFirstName(value)}
        />
        <FormField
          theme={{ label: { color: "yellow" }, input: { color: "green" } }}
          label="Last Name:"
          type="text"
          name="input-last-name"
          value={lastName}
          onChange={(value) => setLastName(value)}
        />
        <FormField
          theme={{ label: { color: "purple" }, input: { color: "pink" } }}
          label="Email:"
          type="email"
          name="input-email"
          value={email}
          onChange={(value) => setEmail(value)}
        />
        <FormField
          theme={{ label: { color: "white" }, input: { color: "black" } }}
          label="Re Enter Email:"
          type="email"
          name="input-re-enter-email"
          value={reEnterEmail}
          onChange={(value) => setReEnterEmail(value)}
        />
        <FormField
          theme={{ label: { color: "red" }, input: { color: "blue" } }}
          label="New Password:"
          type="password"
          name="input-new-password"
          value={newPassword}
          onChange={(value) => setNewPassword(value)}
        />

        <FormField
          theme={{ label: { color: "yellow" }, input: { color: "green" } }}
          label="Birthday:"
          type="date"
          name="input-birthday"
          value={birthday}
          onChange={(value) => setBirthday(value)}
        />
      </FormContainer>
      <div>
        <button onClick={mostrarInformacion}>Mostrar Informacion</button>
      </div>
      <pre>{JSON.stringify(data, undefined, 2)}</pre>
    </>
  );
};
export default FormUnoMejorado;
