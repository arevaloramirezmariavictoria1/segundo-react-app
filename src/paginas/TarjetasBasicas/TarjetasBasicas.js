import React from "react";
import Tarjeta from "../../componentes/Tarjeta/Tarjeta";
import Contenedor from "../../componentes/Contenedor/Contenedor";
const TarjetasBasicas = () => (
  <Contenedor
    titulo="mi contenedor"
    mensaje="este es mi primer contenedor creado en react"
  >
    <Tarjeta titulo="Este es mi primer componente en react" tipo="w3-card" />
    <Tarjeta titulo="w3-card" tipo="w3-card" />
    <Tarjeta titulo="w3-card-2" tipo="w3-card-2" />
    <Tarjeta titulo="w3-card-4" tipo="w3-card-4" />
  </Contenedor>
);
export default TarjetasBasicas;
