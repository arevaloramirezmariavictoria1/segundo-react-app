import React from "react";
import Imagen1 from "../../assets/imagenes/imagenes-contenido-horizontal-1/imagen-1.jpg";
import Imagen2 from "../../assets/imagenes/imagenes-contenido-horizontal-1/imagen-2.jpg";
import Imagen3 from "../../assets/imagenes/imagenes-contenido-horizontal-1/imagen-3.jpg";
import Imagen4 from "../../assets/imagenes/imagenes-contenido-horizontal-1/imagen-4.jpg";
import Imagen5 from "../../assets/imagenes/imagenes-contenido-horizontal-1/imagen-5.jpg";
import Imagen6 from "../../assets/imagenes/imagenes-contenido-horizontal-1/imagen-6.jpg";
import Imagen7 from "../../assets/imagenes/imagenes-contenido-horizontal-1/imagen-7.jpg";
import Imagen8 from "../../assets/imagenes/imagenes-contenido-horizontal-1/imagen-8.jpg";
import Imagen9 from "../../assets/imagenes/imagenes-contenido-horizontal-1/imagen-9.jpg";
import Imagen10 from "../../assets/imagenes/imagenes-contenido-horizontal-1/imagen-10.jpg";
import {
  ContenedorImagen,
  ImagenStyled,
  Titulo,
  ContenedorDescripcion,
  Contenedor,
  Descripcion,
  ContenedorEfecto,
  Vidrio,
} from "./styles";
const ContenidoHorizontalUno = () => {
  return (
    <>
      <Contenedor>
        <ContenedorImagen>
          <Vidrio backgroundImage={Imagen1}><div>Este es mi vidrio</div></Vidrio>
        </ContenedorImagen>
        <ContenedorDescripcion>
          <ContenedorEfecto>
            <Titulo>Lobo</Titulo>
            <Descripcion>Es un Lobo con diferentes colores</Descripcion>
          </ContenedorEfecto>
        </ContenedorDescripcion>
      </Contenedor>
      <Contenedor>
        <ContenedorImagen>
          <ImagenStyled src={Imagen2} alt="" />
        </ContenedorImagen>
        <ContenedorDescripcion>
          <ContenedorEfecto>
            <Titulo>sonic</Titulo>
            <Descripcion>Es una caricatura de un erizo</Descripcion>
          </ContenedorEfecto>
        </ContenedorDescripcion>
      </Contenedor>
      <Contenedor>
        <ContenedorImagen>
          <ImagenStyled src={Imagen3} alt="" />
        </ContenedorImagen>
        <ContenedorDescripcion>
          <ContenedorEfecto>
            <Titulo>Imagen 3</Titulo>
            <Descripcion>Imagen 3</Descripcion>
          </ContenedorEfecto>
        </ContenedorDescripcion>
      </Contenedor>
      <Contenedor>
        <ContenedorImagen>
          <ImagenStyled src={Imagen4} alt="" />
        </ContenedorImagen>
        <ContenedorDescripcion>
          <ContenedorEfecto>
            <Titulo>Imagen 4</Titulo>
            <Descripcion> Imagen 4</Descripcion>
          </ContenedorEfecto>
        </ContenedorDescripcion>
      </Contenedor>
      <Contenedor>
        <ContenedorImagen>
          <ImagenStyled src={Imagen5} alt="" />
        </ContenedorImagen>
        <ContenedorDescripcion>
          <ContenedorEfecto>
            <Titulo>Lobo Morado</Titulo>
            <Descripcion>Es un Lobo morado</Descripcion>
          </ContenedorEfecto>
        </ContenedorDescripcion>
      </Contenedor>
      <Contenedor>
        <ContenedorImagen>
          <ImagenStyled src={Imagen6} alt="" />
        </ContenedorImagen>
        <ContenedorDescripcion>
          <ContenedorEfecto>
            <Titulo>Musica</Titulo>
            <Descripcion>Es un Dibujo de un chico escuchando musica</Descripcion>
          </ContenedorEfecto>
        </ContenedorDescripcion>
      </Contenedor>
      <Contenedor>
        <ContenedorImagen>
          <ImagenStyled src={Imagen7} alt="" />
        </ContenedorImagen>
        <ContenedorDescripcion>
          <ContenedorEfecto>
            <Titulo>Escuchando Musica</Titulo>
            <Descripcion>Es un anime </Descripcion>
          </ContenedorEfecto>
        </ContenedorDescripcion>
      </Contenedor>
      <Contenedor>
        <ContenedorImagen>
          <ImagenStyled src={Imagen8} alt="" />
        </ContenedorImagen>
        <ContenedorDescripcion>
          <ContenedorEfecto>
            <Titulo>Mitad Lobo Mitad Humano</Titulo>
            <Descripcion>Es un anime que es mitad lobo mitad humano</Descripcion>
          </ContenedorEfecto>
        </ContenedorDescripcion>
      </Contenedor>
      <Contenedor>
        <ContenedorImagen>
          <ImagenStyled src={Imagen9} alt="" />
        </ContenedorImagen>
        <ContenedorDescripcion>
          <ContenedorEfecto>
            <Titulo>Chica Gato</Titulo>
            <Descripcion>Es una chica que con una mascara se puede convertir en gato</Descripcion>
          </ContenedorEfecto>
        </ContenedorDescripcion>
      </Contenedor>
      <Contenedor>
        <ContenedorImagen>
          <ImagenStyled src={Imagen10} alt="" />
        </ContenedorImagen>
        <ContenedorDescripcion>
          <ContenedorEfecto>
            <Titulo>Chica</Titulo>
            <Descripcion>Es una chica de anime</Descripcion>
          </ContenedorEfecto>
        </ContenedorDescripcion>
      </Contenedor>
    </>
  );
};

export default ContenidoHorizontalUno;
