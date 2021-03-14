import styled from "styled-components";

export const FormFieldContainer = styled.div`
  display: flex;
  margin-bottom: 8px;
`;
export const FormFieldLabel = styled.label`
  width: 50%;
  text-align: right;
  margin-right: 8px;
  color: ${(props) => props.theme.label.color};
`;
export const FormFieldInput = styled.input`
  color: ${(props) => props.theme.input.color};
`;
