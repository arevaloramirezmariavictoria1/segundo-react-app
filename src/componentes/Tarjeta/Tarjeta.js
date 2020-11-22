import React from "react";
import { TarjetaContainerStyled } from "./styles.js";

const Tarjeta = (props) => {
  return (
    <TarjetaContainerStyled>
      <p>{props.titulo}</p>
    </TarjetaContainerStyled>
  );
};
export default Tarjeta;
