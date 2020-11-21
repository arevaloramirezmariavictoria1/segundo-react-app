import React from "react";
import Album from "../../componentes/Album/Album";
import TarjetaAlbum from "../../componentes/TarjetaAlbum/TarjetaAlbum";
import animal1 from "../../assets/imagenes/imagenes-animales/animal-1.jpg";
import animal2 from "../../assets/imagenes/imagenes-animales/animal-2.jpg";
import animal3 from "../../assets/imagenes/imagenes-animales/animal-3.jpg";
const TarjetasAlbumAnimales = () => (
  <Album titulo="Album de Animales">
    <TarjetaAlbum
      foto={animal1}
      alt="animal-1"
      descripcion="Este es mi animal numero 1"
    />
    <TarjetaAlbum
      foto={animal2}
      alt="animal-2"
      descripcion="Este es mi animal numero 2"
    />
    <TarjetaAlbum
      foto={animal3}
      alt="animal-3"
      descripcion="Este es mi animal numero 3"
    />
  </Album>
);

export default TarjetasAlbumAnimales;
