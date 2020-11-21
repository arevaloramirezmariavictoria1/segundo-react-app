import React from "react";
import "./TarjetaInformativa.css";
import imagenClimaSol from "../../assets/imagenes/imagenes-clima/img_weather_sun.jpg";
import imagenClimaSolyNube from "../../assets/imagenes/imagenes-clima/img_weather_cloud.jpg";
import imagenClimaNube from "../../assets/imagenes/imagenes-clima/img_weather_clouds.jpg";
const TarjetaInformativa = (props) => {
  return (
    <div className={`tarjeta-informativa-w3-card-4`}>
      <div className={`w3-display-container w3-text-white`}>
        <img src={props.foto} alt={props.alt} className={`full`} />
        <div className="w3-xlarge w3-display-bottomleft w3-padding">
          {props.descripcionCiudad}
        </div>
      </div>
      <div className={`w3-row`}>
        <div className={`w3-third w3-center`}>
          <h3>lunes</h3>
          <img src={imagenClimaSol} alt="sol" style={{ width: "60px" }} />
        </div>
        <div className={`w3-third w3-center`}>
          <h3>Martes</h3>
          <img src={imagenClimaSolyNube} alt="solynube" style={{ width: "60px" }} />
        </div>
        <div className={`w3-third w3-center w3-margin-bottom`}>
          <h3>Miercoles</h3>
          <img src={imagenClimaNube} alt="nube" style={{ width: "60px" }} />
        </div>
      </div>
    </div>
  );
};
export default TarjetaInformativa;
