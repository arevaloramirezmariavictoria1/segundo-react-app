import React from "react";
import {TarjetaAlbumContainer, TarjetaAlbumDescripcion, TarjetaAlbumFoto} from "./styles.js"

const TarjetaAlbum = (props) => {
  return (
    <TarjetaAlbumContainer>
      <TarjetaAlbumFoto src={props.foto} alt={props.alt}/>
      <TarjetaAlbumDescripcion>
        <p>{props.descripcion}</p>
      </TarjetaAlbumDescripcion>
    </TarjetaAlbumContainer>
  );
};
export default TarjetaAlbum;
