import React from "react";
import Album from "../../componentes/Album/Album";
import TarjetaInformativa from "../../componentes/TarjetaInformativa/TarjetaInformativa";
import paisaje1 from "../../assets/imagenes/imagenes-paisajes/foto-1.jpg";
import paisaje2 from "../../assets/imagenes/imagenes-paisajes/foto-2.jpg";
import paisaje3 from "../../assets/imagenes/imagenes-paisajes/foto-3.jpg";

const TarjetasClimaCiudad = () => (
  <Album titulo="Clima de ciudades">
    <TarjetaInformativa
      foto={paisaje2}
      alt="paisaje-2"
      descripcionCiudad="LONDON 60&deg; F"
    />
    <TarjetaInformativa
      foto={paisaje1}
      alt="paisaje-1"
      descripcionCiudad="LONDON 60&deg; F"
    />
    <TarjetaInformativa
      foto={paisaje3}
      alt="paisaje-3"
      descripcionCiudad="playa 60&deg; F"
    />
  </Album>
);
export default TarjetasClimaCiudad;
