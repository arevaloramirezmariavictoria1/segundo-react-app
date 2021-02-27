import React from "react";
import ImagenConForma from "../../componentes/ImagenConForma/ImagenConForma";
import BokuNoHero1 from "../../assets/imagenes/imagenes-con-formas/BokuNoHero1.jpg";
import BokuNoHero from "../../assets/imagenes/imagenes-con-formas/BokuNoHero.jpg";
import BokuNoHero3 from "../../assets/imagenes/imagenes-con-formas/BokuNoHero3.jpg";
import {Forma} from "./styles"
const ImagenesConFormas = () => {
  return (
    <Forma>
  <ImagenConForma imagenFondo={BokuNoHero1} forma='polygon' />
  <ImagenConForma imagenFondo={BokuNoHero} forma='trepezoid' />
  <ImagenConForma imagenFondo={BokuNoHero3} forma='message' />
  </Forma>
 );
};
export default ImagenesConFormas;
