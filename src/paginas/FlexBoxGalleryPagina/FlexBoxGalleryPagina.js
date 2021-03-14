import React from "react";
import FlexBoxGallery from "../../componentes/FlexBoxGallery/FlexBoxGallery";
import { FlexColumn, FlexImg } from "../../componentes/FlexBoxGallery/styles";
import BokuNoHero from "../../assets/imagenes/imagenes-con-formas/BokuNoHero.jpg";
import BokuNoHero1 from "../../assets/imagenes/imagenes-con-formas/BokuNoHero1.jpg";
import BokuNoHero2 from "../../assets/imagenes/imagenes-con-formas/BokuNoHero2.jpg";
import BokuNoHero3 from "../../assets/imagenes/imagenes-con-formas/BokuNoHero3.jpg";
import imagen1 from "../../assets/imagenes/imagenes-contenido-horizontal-1/imagen-1.jpg";
import imagen2 from "../../assets/imagenes/imagenes-contenido-horizontal-1/imagen-2.jpg";
import imagen3 from "../../assets/imagenes/imagenes-contenido-horizontal-1/imagen-3.jpg";
import imagen4 from "../../assets/imagenes/imagenes-contenido-horizontal-1/imagen-4.jpg";
import animal1 from "../../assets/imagenes/imagenes-animales/animal-1.jpg";
import animal2 from "../../assets/imagenes/imagenes-animales/animal-2.jpg";
import animal3 from "../../assets/imagenes/imagenes-animales/animal-3.jpg";
import animal4 from "../../assets/imagenes/imagenes-animales/animal-4.jpg";
const FlexBoxGalleryPagina = () => {
  const images = [
    { img: BokuNoHero },
    { img: BokuNoHero1 },
    { img: BokuNoHero2 },
    { img: BokuNoHero3 },
  ];
  const images2 = [
    { img:imagen1 },
    { img:imagen2 },
    { img:imagen3 },
    { img:imagen4 },
  ];
  const animales = [
    { img:animal1 },
    { img:animal2 },
    { img:animal3 },
    { img:animal4 },
  ];
  return (
    <FlexBoxGallery title="Mi Galeria" subtitle="Galeria">
      <FlexColumn>
        {images.map((img, i) => (
          <FlexImg src={img.img} key={`img-${i}`} />
        ))}
      </FlexColumn>
      <FlexColumn>
        {images2.map((img, i) => (
          <FlexImg src={img.img} key={`img-${i}`} />
        ))}
      </FlexColumn>
      <FlexColumn>
        {animales.map((img, i) => (
          <FlexImg src={img.img} key={`img-${i}`} />
        ))}
      </FlexColumn>
      <FlexColumn>
        {images.map((img, i) => (
          <FlexImg src={img.img} key={`img-${i}`} />
        ))}
      </FlexColumn>
    </FlexBoxGallery>
  );
};
export default FlexBoxGalleryPagina;
