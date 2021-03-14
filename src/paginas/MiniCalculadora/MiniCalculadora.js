import React from "react";
import { CalculadoraInput } from "./styles";

const MiniCalculadora = () => {
  const [primerValor, setPrimerValor] = React.useState(0);
  const [segundoValor, setSegundoValor] = React.useState(0);
  const [tercerValor, setTercerValor] = React.useState(0);

  const sumarNumero = () => {
    const resultado = parseFloat(primerValor) + parseFloat(segundoValor);
    setTercerValor(resultado);
  };
  const restarNumero = () => {
    const resultado = parseFloat(primerValor) - parseFloat(segundoValor);
    setTercerValor(resultado);
  };
  const multiplicarNumero = () => {
    const resultado = parseFloat(primerValor) * parseFloat(segundoValor);
    setTercerValor(resultado);
  };
  const dividirNumero = () => {
    const resultado = parseFloat(primerValor) / parseFloat(segundoValor);
    setTercerValor(resultado);
  };
  const borrar = () => {
    setPrimerValor(0);
    setSegundoValor(0);
    setTercerValor(0);
  };

  return (
    <>
      <CalculadoraInput>
        <input
          type="number"
          value={primerValor}
          onChange={(evento) => setPrimerValor(evento.target.value)}
        />
      </CalculadoraInput>

      <CalculadoraInput>
        <input
          type="number"
          value={segundoValor}
          onChange={(evento) => setSegundoValor(evento.target.value)}
        />
      </CalculadoraInput>
      <CalculadoraInput>
        <p>{tercerValor}</p>
      </CalculadoraInput>

      <CalculadoraInput>
        <button onClick={sumarNumero}>+</button>
        <button onClick={restarNumero}>-</button>
        <button onClick={multiplicarNumero}>*</button>
        <button onClick={dividirNumero}>/</button>
        <button onClick={borrar}>Borrar</button>
      </CalculadoraInput>
    </>
  );
};
export default MiniCalculadora;
