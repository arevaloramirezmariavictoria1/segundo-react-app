import React from "react";
import { TarjetaTitulo, TarjetaChildren} from "./styles.js";

const Album = (props) => {
  return (
    <>
      {" "}
      <TarjetaTitulo>
        <h2>{props.titulo}</h2>
      </TarjetaTitulo>
      <TarjetaChildren className={`container`}>
        {props.children}
      </TarjetaChildren>
    </>
  );
};
export default Album;
