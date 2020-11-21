import React from "react";
import TarjetaContacto from "../../componentes/TarjetaContacto/TarjetaContacto";
import Contenedor from "../../componentes/Contenedor/Contenedor";
import imgAvatarPersona from "../../assets/imagenes/imagenes-avatar/img-avatar-persona.png";

const TarjetaContactoPagina = () => {
  return (
    <Contenedor>
      <TarjetaContacto
        nombreContacto="Maria Victoria"
        descripcionContenido="1 Nuevo contacto"
        foto={imgAvatarPersona}
        buttonText="Nuevo Contacto"
        descripcionAdicional="Estudiante de Computacion"
      />
      <TarjetaContacto
        nombreContacto="Gladys Gregoria"
        descripcionContenido="3 Nuevos mensajes"
        foto={imgAvatarPersona}
        buttonText="Nuevo Mensaje"
        descripcionAdicional="Cocinera en especiasyamor"
      />
    </Contenedor>
  );
};
export default TarjetaContactoPagina;
