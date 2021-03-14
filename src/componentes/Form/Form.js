import React from "react";
import { FormContainer, FormField, FormLabel } from "./styles";

const Form = (props) => {
  const [primerNombre, setPrimerNombre] = React.useState("");
  const [segundoNombre, setSegundoNombre] = React.useState("");
  const [primerApellido, setPrimerApellido] = React.useState("");
  const [segundoApellido, setSegundoApellido] = React.useState("");
  const [genero, setGenero] = React.useState("");
  const [numeroDeTelefono, setNumeroDeTelefono] = React.useState("");
  const [pasaporte, setPasaporte] = React.useState("");
  const [fechaDeNacimiento, setFechaDeNacimiento] = React.useState("");
  const [computacion, setComputacion] = React.useState("");
  const [gimnasia, setGimnasia] = React.useState("");
  const [natacion, setNatacion] = React.useState("");
  const [bailar, setBailar] = React.useState("");
  const mostrarInformacion = () => {
    alert(
      `Hola ${primerNombre} ${segundoNombre} ${primerApellido} ${segundoApellido} de genero ${genero} numero de telefono ${numeroDeTelefono} con pasaporte ${pasaporte} Fecha de nacimiento ${fechaDeNacimiento}; le gusta computacion ${computacion} le gusta gimnasia ${gimnasia} le gusta natacion ${natacion} le gusta bailar ${bailar}`
    );
  };

  return (
    <form>
      <FormContainer theme="purple">
        <FormField>
          <FormLabel>
            <label for="input-primer-nombre">Primer Nombre: </label>
          </FormLabel>
          <div>
            <input
              type="text"
              name="input-primer-nombre"
              id="input-primer-nombre"
              value={primerNombre}
              onChange={(evento) => setPrimerNombre(evento.target.value)}
            />
          </div>
        </FormField>
        <FormField>
          <FormLabel>
            <label for="input-segundo-nombre">Segundo Nombre: </label>
          </FormLabel>
          <div>
            <input
              type="text"
              name="input-segundo-nombre"
              id="input-segundo-nombre"
              value={segundoNombre}
              onChange={(evento) => setSegundoNombre(evento.target.value)}
            />
          </div>
        </FormField>
        <FormField>
          <FormLabel>
            <label for="input-primer-apellido">Primer Apellido: </label>
          </FormLabel>
          <div>
            <input
              type="text"
              name="input-primer-apellido"
              id="input-primer-apellido"
              value={primerApellido}
              onChange={(evento) => setPrimerApellido(evento.target.value)}
            />
          </div>
        </FormField>
        <FormField>
          <FormLabel>
            <label for="input-segundo-apellido">Segundo Apellido: </label>
          </FormLabel>
          <div>
            <input
              type="text"
              name="input-segundo-apellido"
              id="input-segundo-apellido"
              value={segundoApellido}
              onChange={(evento) => setSegundoApellido(evento.target.value)}
            />
          </div>
        </FormField>
        <FormField>
          <FormLabel>
            <label>Genero: </label>
          </FormLabel>
          <div>
            <label for="input-femenino">Femenino</label>
          </div>
          <div>
            <input
              type="radio"
              name="input-genero"
              id="input-femenino"
              value="femenino"
              checked={genero === "femenino"}
              onChange={(evento) => setGenero(evento.target.value)}
            />
          </div>
          <div>
            <label for="input-masculino">Masculino</label>
          </div>
          <div>
            <input
              type="radio"
              name="input-genero"
              id="input-masculino"
              value="masculino"
              checked={genero === "masculino"}
              onChange={(evento) => setGenero(evento.target.value)}
            />
          </div>
        </FormField>
      </FormContainer>

      <FormContainer theme="blue">
        <FormField>
          <FormLabel>
            <label for="input-numero-de-telefono">Numero de Telefono: </label>
          </FormLabel>
          <div>
            <input
              type="number"
              name="input-numero"
              id="input-numero-de-telefono"
              value={numeroDeTelefono}
              onChange={(evento) => setNumeroDeTelefono(evento.target.value)}
            />
          </div>
        </FormField>
        <FormField>
          <FormLabel>
            <label for="input-pasaporte">Pasaporte: </label>
          </FormLabel>
          <div>
            <input
              type="text"
              name="input-pasaporte"
              id="input-pasaporte"
              value={pasaporte}
              onChange={(evento) => setPasaporte(evento.target.value)}
            />
          </div>
        </FormField>
        <FormField>
          <FormLabel>
            <label for="nacimiento">Fecha de Nacimiento: </label>
          </FormLabel>
          <div>
            <input
              type="date"
              name="nacimiento"
              id="nacimiento"
              value={fechaDeNacimiento}
              onChange={(evento) => setFechaDeNacimiento(evento.target.value)}
            />
          </div>
        </FormField>
      </FormContainer>
      <FormContainer theme="salmon">
        <FormField>
          <FormLabel>
            <label for="pasatiempo-1">Computacion</label>
          </FormLabel>
          <div>
            <input
              type="checkbox"
              name="pasatiempo-1"
              id="pasatiempo-1"
              checked={computacion}
              onChange={(evento) => setComputacion(evento.target.checked)}
            />
          </div>
          <div>
            <label for="pasatiempo-2">Gimnasia</label>
          </div>
          <div>
            <input
              type="checkbox"
              name="pasatiempo-2"
              id="pasatiempo-2"
              checked={gimnasia}
              onChange={(evento) => setGimnasia(evento.target.checked)}
            />
          </div>
          <div>
            <label for="pasatiempo-3">Natacion</label>
          </div>
          <div>
            <input
              type="checkbox"
              name="pasatiempo-3"
              id="pasatiempo-3" 
              checked={natacion}
              onChange={(evento) => setNatacion(evento.target.checked)}
            />
          </div>
        </FormField>
        <FormField>
          <FormLabel>
            <label for="pasatiempo-4">Bailar</label>
          </FormLabel>
          <div>
            <input
              type="checkbox"
              name="pasatiempo-4"
              id="pasatiempo-4"
              checked={bailar}
              onChange={(evento) => setBailar(evento.target.checked)}
            />
          </div>
        </FormField>
      </FormContainer>
      <FormContainer theme="pink">
        <div>
          <button onClick={mostrarInformacion}>Mostrar Informacion</button>
        </div>
      </FormContainer>
    </form>
  );
};
export default Form;
