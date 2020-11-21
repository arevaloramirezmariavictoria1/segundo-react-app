import React from "react";
import "./Contenedor.css";

const Contenedor = (props) => {
  return (
    <div className={`w3-container`}>
      <h2>{props.titulo}</h2>
      <p>{props.mensaje}</p>
      {props.children}
    </div>
  );
};
export default Contenedor;
