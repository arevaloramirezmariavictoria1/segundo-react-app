import React from "react";
import "./Tarjeta.css";

const Tarjeta = (props) => {
  return (
    <div className={`w3-panel ${props.tipo}`}>
      <p>{props.titulo}</p>
    </div>
  );

};
export default Tarjeta;
