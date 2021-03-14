import React from "react";
import {
  TarjetaContactoLlamadaContainer,
  TarjetaContactoLlamadaContenido,
  TarjetaContactoLlamadaFoto,
  TarjetaContactoLlamadaContenedorDeButton,
  TarjetaContactoLlamadaButton,
} from "./styles";

const TarjetaContactoLlamada = (props) => {
  return (
    <TarjetaContactoLlamadaContainer>
      <TarjetaContactoLlamadaContenido>
        <h3>{props.titulo}</h3>
        <TarjetaContactoLlamadaFoto src={props.foto} alt={props.titulo} />
        <h5>{props.contacto}</h5>
        <TarjetaContactoLlamadaContenedorDeButton>
          <TarjetaContactoLlamadaButton theme="green">
            Accept{" "}
          </TarjetaContactoLlamadaButton>
          <TarjetaContactoLlamadaButton theme="red">
            Decline
          </TarjetaContactoLlamadaButton>
        </TarjetaContactoLlamadaContenedorDeButton>
      </TarjetaContactoLlamadaContenido>
    </TarjetaContactoLlamadaContainer>
  );
};
export default TarjetaContactoLlamada;
