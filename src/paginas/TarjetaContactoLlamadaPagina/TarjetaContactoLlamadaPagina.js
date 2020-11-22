import React from "react";
import TarjetaContactoLlamada from "../../componentes/TarjetaContactoLlamada/TarjetaContactoLlamada";
import Contenedor from "../../componentes/Contenedor/Contenedor";
import imgAvatar from "../../assets/imagenes/imagenes-avatar/img_avatar3.png";

const TarjetaContactoLlamadaPagina = () => {
  return (
    <Contenedor>
      <TarjetaContactoLlamada
        titulo="Llamada entrante"
        foto={imgAvatar}
        contacto="Maria Victoria"
      />
    </Contenedor>
  );
};
export default TarjetaContactoLlamadaPagina;
