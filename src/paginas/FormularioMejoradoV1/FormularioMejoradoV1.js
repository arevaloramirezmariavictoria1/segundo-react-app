import React from "react";
import { Form } from "lc-react-essentials";
const FormularioMejoradoV1 = () => {
  return (
    <Form
      buttonBackgroundColor="darkgoldenrod"
      buttonFontColor="blue"
      labelFontColor="green"
      fields={[
        {
          accessor: `nombre`,
          label: `Nombre`,
          required: true,
          type: `text`,
          rules: [
            {
              type: "minLength",
              value: 5,
            },
            {
              type: "maxLength",
              value: 50,
            },
          ],
        },
        {
          accessor: `apellido`,
          label: `Apellido`,
          required: true,
          type: `text`,
          rules: [
            {
              type: "minLength",
              value: 5,
            },
            {
              type: "maxLength",
              value: 50,
            },
          ],
        },
        {
          accessor: `codigoPostal`,
          label: `Codigo Postal`,
          required: true,
          type: `text`,
          rules: [
            {
              type: "minLength",
              value: 5,
            },
            {
              type: "maxLength",
              value: 50,
            },
          ],
        },
        {
          accessor: `contraseña`,
          label: `Contraseña`,
          required: true,
          type: `password`,
          rules: [
            {
              type: "minLength",
              value: 5,
            },
            {
              type: "maxLength",
              value: 50,
            },
          ],
        },
        {
          accessor: `ciudad`,
          label: `Cudad`,
          required: true,
          type: `text`,
          rules: [
            {
              type: "minLength",
              value: 5,
            },
            {
              type: "maxLength",
              value: 50,
            },
          ],
        },
        {
          accessor: `telefono`,
          label: `Telefono`,
          required: true,
          type: `number`,
          rules: [
            {
              type: "minLength",
              value: 5,
            },
            {
              type: "maxLength",
              value: 50,
            },
          ],
        },
        {
          accessor: `celular`,
          label: `Celular`,
          required: true,
          type: `text`,
          rules: [
            {
              type: "minLength",
              value: 5,
            },
            {
              type: "maxLength",
              value: 50,
            },
          ],
        },
        {
          accessor: `email`,
          label: `Email`,
          required: true,
          type: `email`,
          rules: [
            {
              type: "minLength",
              value: 5,
            },
            {
              type: "maxLength",
              value: 50,
            },
          ],
        },
      ]}
      onAccept={function noRefCheck() {}}
      subtitle="SubTitulo"
      title="Titulo"
    />
  );
};
export default FormularioMejoradoV1;
