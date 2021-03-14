import React from "react"
import "./TarjetaShadow.css"

const TarjetaShadow = (props) => {
 return (
  <div className={`w3-panel w3-green w3-hover-shadow w3-padding-64 w3-center ${props.tipo}`} style={{widht:70}}>
    <p>{props.titulo}</p>
  </div>
 );

};
export default TarjetaShadow;