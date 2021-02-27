import React from "react";
import {
  FormContainer,
  FormField,
  FormLabel,
  FormInput,
  FormH3,
} from "./styles";
const Form2 = (props) => {
  const [nombre, setNombre] = React.useState("");
  const [apellido, setApellido] = React.useState("");
  const [empresa, setEmpresa] = React.useState("");
  const [cargo, setCargo] = React.useState("");
  const [direccion, setDireccion] = React.useState("");
  const [ciudad, setCiudad] = React.useState("");
  const [telefono, setTelefono] = React.useState("");
  const [celular, setCelular] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [data, setData] = React.useState("");

  const mostrarInformacion = () => {
    const newData = {
      nombre: nombre,
      apellido: apellido,
      empresa: empresa,
      cargo: cargo,
      direccion: direccion,
      ciudad: ciudad,
      telefono: telefono,
      celular: celular,
      email: email,
    };
    setData(newData);
  };
  return (
    <>
      <FormContainer>
        <FormH3>Formulario de inscripcion</FormH3>
        <FormField>
          <FormLabel for="input-nombre">Nombre:</FormLabel>
          <FormInput
            type="text"
            name="input-nombre"
            id="Input-nombre"
            value={nombre}
            onChange={(evento) => setNombre(evento.target.value)}
          />
        </FormField>
        <FormField>
          <FormLabel for="input-apellido">Apellido:</FormLabel>
          <FormInput
            type="text"
            name="input-apellido"
            id="input-apellido"
            value={apellido}
            onChange={(evento) => setApellido(evento.target.value)}
          />
        </FormField>
        <FormField>
          <FormLabel for="input-empresa">Empresa:</FormLabel>
          <FormInput
            type="text"
            name="input-empresa"
            id="input-empresa"
            value={empresa}
            onChange={(evento) => setEmpresa(evento.target.value)}
          />
        </FormField>
        <FormField>
          <FormLabel for="input-cargo">Cargo:</FormLabel>
          <FormInput
            type="text"
            name="input-cargo"
            id="input-cargo"
            value={cargo}
            onChange={(evento) => setCargo(evento.target.value)}
          />
        </FormField>
        <FormField>
          <FormLabel for="input-direccion">Direccion:</FormLabel>
          <FormInput
            type="text"
            name="input-direccion"
            id="input-direccion"
            value={direccion}
            onChange={(evento) => setDireccion(evento.target.value)}
          />
        </FormField>
        <FormField>
          <FormLabel for="input-ciudad">Ciudad:</FormLabel>
          <FormInput
            type="text"
            name="input-ciudad"
            id="input-ciudad"
            value={ciudad}
            onChange={(evento) => setCiudad(evento.target.value)}
          />
        </FormField>
        <FormField>
          <FormLabel for="input-telefonos">Telefonos:</FormLabel>
          <FormInput
            type="number"
            name="input-telefono"
            id="input-telefono"
            value={telefono}
            onChange={(evento) => setTelefono(evento.target.value)}
          />
        </FormField>
        <FormField>
          <FormLabel for="input-celular">Celular:</FormLabel>
          <FormInput
            type="text"
            name="input-celular"
            id="input-celular"
            value={celular}
            onChange={(evento) => setCelular(evento.target.value)}
          />
        </FormField>
        <FormField>
          <FormLabel for="input-email">Email:</FormLabel>
          <FormInput
            type="email"
            name="input-email"
            id="input-email"
            value={email}
            onChange={(evento) => setEmail(evento.target.value)}
          />
        </FormField>
      </FormContainer>
      <div>
        <button onClick={mostrarInformacion}>mostrar Informacion</button>
      </div>
      <pre>{JSON.stringify(data, undefined, 2)}</pre>
    </>
  );
};
export default Form2;
