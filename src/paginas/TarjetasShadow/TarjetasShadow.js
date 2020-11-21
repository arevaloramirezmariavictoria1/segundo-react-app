import React from "react";
import Contenedor from "../../componentes/Contenedor/Contenedor";
import TarjetaShadow from "../../componentes/TarjetaShadow/TarjetaShadow";
const TarjetasShadow = () => (
  <Contenedor titulo="Este es mi segundo Contenedor">
    <TarjetaShadow
      titulo="Este es mi segundo componente en react"
      tipo="w3-card"
    />
    <TarjetaShadow
      titulo="w3-panel w3-green w3-hover-shadow w3-padding-64 w3-center"
      tipo="w3-card"
    />
  </Contenedor>
);
export default TarjetasShadow;
