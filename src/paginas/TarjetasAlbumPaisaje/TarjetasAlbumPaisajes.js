import React from "react";
import Album from "../../componentes/Album/Album";
import TarjetaAlbum from "../../componentes/TarjetaAlbum/TarjetaAlbum";
import paisaje1 from "../../assets/imagenes/imagenes-paisajes/foto-1.jpg";
import paisaje2 from "../../assets/imagenes/imagenes-paisajes/foto-2.jpg";
import paisaje3 from "../../assets/imagenes/imagenes-paisajes/foto-3.jpg";
const TarjetasAlbumPaisajes = () => (
  <Album titulo="Album de Paisajes">
    <TarjetaAlbum
      foto={paisaje1}
      alt="paisaje-1"
      descripcion="Este es mi paisaje numero 1"
    />
    <TarjetaAlbum
      foto={paisaje2}
      alt="paisaje-2"
      descripcion="Este es mi paisaje numero 2"
    />
    <TarjetaAlbum
      foto={paisaje3}
      alt="paisaje-3"
      descripcion="Este es mi paisaje numero 3"
    />
  </Album>
);
export default TarjetasAlbumPaisajes;
