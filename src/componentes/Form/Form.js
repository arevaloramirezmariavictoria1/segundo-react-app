import React from "react";
import { FormContainer, FormField, FormLabel } from "./styles";

const Form = (props) => {
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
              value="input-femenino"
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
              value="input-masculino"
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
            />
          </div>
        </FormField>
        <FormField>
          <FormLabel>
            <label for="input-pasaporte">Pasaporte: </label>
          </FormLabel>
          <div>
            <input type="text" name="input-pasaporte" id="input_pasaporte" />
          </div>
        </FormField>
        <FormField>
          <FormLabel>
            <label for="nacimiento">Fecha de Nacimiento: </label>
          </FormLabel>
          <div>
            <input type="date" name="nacimiento" id="nacimiento" />
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
              value="computacion"
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
              value="gimnasia"
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
              value="Natacion"
            />
          </div>
        </FormField>
        <FormField>
          <FormLabel>
            <label for="pasatiempo-4">Bailarina</label>
          </FormLabel>
          <div>
            <input
              type="checkbox"
              name="pasatiempo-4"
              id="pasatiempo-4"
              value="Bailarina"
            />
          </div>
        </FormField>
      </FormContainer>
    </form>
  );
};
export default Form;
