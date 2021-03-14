import React from "react";
const PaginaEstado = () => {
  const [nombre, setNombre] = React.useState("nombre");
  const [apellido, setApellido] = React.useState("Cabrera");
  const [contador, setContador] = React.useState(1);
  const [mascota, setMascota] = React.useState("perro");

  const cambiarMascota = (nuevaMascota) => {
    setMascota(nuevaMascota);
  };

  const sumar = () => {
    const nuevoContador = contador + 1;
    setContador(nuevoContador);
  };
  const cambiarNombre = (nuevoNombre) => {
    setNombre(nuevoNombre);
  };
  const cambiarApellido = (nuevoApellido) => {
    setApellido(nuevoApellido);
  };
  const decirHola = () => {
    alert(
      `Hola ${nombre} ${apellido}, tu tienes una mascota que es un ${mascota}`
    );
  };
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <p>{contador}</p>
        <button onClick={sumar}>Sumar</button>
      </div>

      <div style={{ textAlign: "center" }}>
        <input
          value={nombre}
          onChange={(evento) => cambiarNombre(evento.target.value)}
        />
        <p>{`hola ${nombre}`}</p>
      </div>

      <div style={{ textAlign: "center" }}>
        <input
          value={mascota}
          onChange={(evento) => cambiarMascota(evento.target.value)}
        />
        <p>{`esta es mi mascota  ${mascota}`}</p>
      </div>
      <div style={{ textAlign: "center" }}>
        <input
          value={apellido}
          onChange={(evento) => cambiarApellido(evento.target.value)}
        />
        <p>{apellido}</p>
      </div>
      <div>
        <button onClick={decirHola}>Decir Hola</button>
      </div>
    </>
  );
};
export default PaginaEstado;
