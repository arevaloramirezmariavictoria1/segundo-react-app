import React, { useState } from "react";
import { FormContainer, FormField, FormLabel, FormInput } from "./styles";
const Form1 = (props) => {
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
        <FormField>
          <FormLabel for="input-first-name">First Name:</FormLabel>
          <FormInput
            type="text"
            name="input-first-name"
            id="input-first-name"
            value={firstName}
            onChange={(evento) => setFirstName(evento.target.value)}
          />
        </FormField>
        <FormField>
          <FormLabel for="input-last-name">Last Name:</FormLabel>
          <FormInput
            type="text"
            name="input-last-name"
            id="input-last-name"
            value={lastName}
            onChange={(evento) => setLastName(evento.target.value)}
          />
        </FormField>
        <FormField>
          <FormLabel for="input-email">Email:</FormLabel>
          <FormInput
            type="email"
            name="input-email"
            id="input-email"
            value={email}
            onChange={(evento) => setEmail(evento.target.value)}
          />
        </FormField>
        <FormField>
          <FormLabel for="input-re-enter-email">Re-enter Email:</FormLabel>
          <FormInput
            type="email"
            name="input-re-enter-email"
            id="input-re-enter-email"
            value={reEnterEmail}
            onChange={(evento) => setReEnterEmail(evento.target.value)}
          />
        </FormField>
        <FormField>
          <FormLabel for="input-new-password">New Password:</FormLabel>
          <FormInput
            type="password"
            name="input-new-password"
            id="input-new-password"
            value={newPassword}
            onChange={(evento) => setNewPassword(evento.target.value)}
          />
        </FormField>
        <FormField>
          <FormLabel>I am:</FormLabel>
          <label for="input-femenino">Femenino</label>
          <FormInput
            type="radio"
            name="input-i-am"
            id="input-femenino"
            value="femenino"
            checked={iAm === "femenino"}
            onChange={(evento) => setIAm(evento.target.value)}
          />
          <label for="input-masculino">Masculino</label>
          <FormInput
            type="radio"
            name="input-i-am"
            id="input-masculino"
            value="masculino"
            checked={iAm === "masculino"}
            onChange={(evento) => setIAm(evento.target.value)}
          />
        </FormField>
        <FormField>
          <FormLabel for="input-birthday">Birthday:</FormLabel>
          <FormInput
            type="date"
            name="input-birthday"
            id="input-birthday"
            value={birthday}
            onChange={(evento) => setBirthday(evento.target.value)}
          />
        </FormField>
      </FormContainer>
      <div>
        <button onClick={mostrarInformacion}>Mostrar Informacion</button>
      </div>
      <pre>{JSON.stringify(data, undefined, 2)}</pre>
    </>
  );
};
export default Form1;
