import React from "react";
import { FormFieldContainer, FormFieldLabel, FormFieldInput } from "./styles";

const FormField = (props) => {
  const [value, setValue] = React.useState("");
  return (
    <FormFieldContainer>
      <FormFieldLabel theme={props.theme}>
        {props.label}
      </FormFieldLabel>
      <FormFieldInput
        type={props.type}
        name={props.name}
        id={props.name}
        value={value}
        onChange={(evento) => {
          setValue(evento.target.value);
        }}
        theme={props.theme}
        onBlur={()=>props.onChange(value)}
      />
    </FormFieldContainer>
  );
};
export default FormField;
