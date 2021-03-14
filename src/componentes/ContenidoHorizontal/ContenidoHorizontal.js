import React from "react";
import BokuNoHero1 from "../../assets/imagenes/imagenes-con-formas/BokuNoHero1.jpg";
import {
  ContenedorImagen,
  ImagenStyled,
  Titulo,
  ContenedorDescripcion,
  Contenedor,
  Descripcion,
  ContenedorEfecto
} from "./styles";
const ContenidoHorizontal = () => {
  return (
    <Contenedor>
      <ContenedorImagen>
        <ImagenStyled src={BokuNoHero1} alt="" />
      </ContenedorImagen>
      <ContenedorDescripcion>
          <ContenedorEfecto>
        <Titulo>Boku no Hero Academia</Titulo>
        <Descripcion>
            Es una serie de Anime muy famosa de heroes con super poderes.
        </Descripcion>
        </ContenedorEfecto>
      </ContenedorDescripcion>
    </Contenedor>
  );
};

export default ContenidoHorizontal;
