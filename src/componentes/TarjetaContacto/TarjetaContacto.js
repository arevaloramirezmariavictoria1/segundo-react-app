import React from "react";
import {
  TarjetaContactoButton,
  TarjetaContactoContainer,
  TarjetaContactoContenido,
  TarjetaContactoHeader,
  TarjetaContactoImg,
} from "./styles";

const TarjetaContacto = (props) => {
  return (
    <TarjetaContactoContainer>
      <TarjetaContactoHeader>
        <h3>{props.nombreContacto}</h3>
      </TarjetaContactoHeader>
      <TarjetaContactoContenido>
        <p>{props.descripcionContenido}</p>
        <TarjetaContactoImg src={props.foto} alt="img-Avatar-Persona" />
        <p>{props.descripcionAdicional}</p>
      </TarjetaContactoContenido>
      <TarjetaContactoButton>{props.buttonText}</TarjetaContactoButton>
    </TarjetaContactoContainer>
  );
};
export default TarjetaContacto;
