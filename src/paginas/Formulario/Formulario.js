import React from "react";
import { Form } from "lc-react-essentials";
const Formulario = () => {
  return (
    <Form
      buttonBackgroundColor="darkgoldenrod" //color de fondo de boton
      buttonFontColor="white"//color de letra de boton
      fields={[
          //campos que quieres mostrar en un formulario
        {
          accessor: `input`,//nombre de campo
          label: "Normal input with rules (max and min)",//lo que le mostrar al usuario
          required: true,//si es obligatorio o no
          rules: [
         //son las reglas que tienes aplicada
            {
              type: "minLength",//es el tipo de regla es tamaño minimo
              value: 2,//dice cual es el tamaño minimo
            },
            {
              type: "maxLength",//es el tipo de regla de el maximo tamaño
              value: 50,//dice cual es el maximo tamaño
            },
          ],
          type: "input",//que tipo de input quieres mandar
        },
        {
          accessor: `number`,
          label: `number`,
          required: true,
          type: `number`,
        },
        {
          accessor: `email`,
          label: `email`,
          required: true,
          type: `email`,
        },
        {
          accessor: "textarea",
          label: "Textarea",
          required: true,
          type: "textarea",
        },
      ]}
      onAccept={function noRefCheck() {}}//lo que quieres que aga cuando hace click en aceptar
      subtitle="This is a subtitle"//es el subtitulo
      title="This is a title"//es el titulo
    />
  );
};
export default Formulario;
