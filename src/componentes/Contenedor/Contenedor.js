import React from "react";
import { ContenedorContainer } from "./styles.js";

const Contenedor = (props) => {
  return (
    <ContenedorContainer>
      <h2>{props.titulo}</h2>
      <p>{props.mensaje}</p>
      {props.children}
    </ContenedorContainer>
  );
};
export default Contenedor;
