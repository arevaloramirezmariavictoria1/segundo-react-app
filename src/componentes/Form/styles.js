import styled from "styled-components";

export const FormContainer = styled.div`
  padding-bottom: 20px;
  padding-top: 42px;
  ${(props) =>
    props.theme === "purple" &&
    `border:1px solid rgb(213, 114, 233);
     background-color: rgb(250, 208, 246);
  `}
  ${(props) =>
    props.theme === "blue" &&
    `
     border:1px solid rgb(114, 233, 174);
    background-color: rgb(208, 250, 230);
  `}
  ${(props) =>
    props.theme === "salmon" &&
    `
    border:1px solid rgb(233, 114, 114);
    background-color: rgb(250, 208, 208);
  `}
  ${(props) =>
    props.theme === "pink" &&
    `
    border:1px solid rgb(233, 114, 203);
    background-color: rgb(250, 208, 243);
  `}
`;
export const FormField = styled.div`
  display: flex;
  margin-bottom: 8px;
`;
export const FormLabel = styled.div`
  width: 50%;
  text-align: right;
  margin-right: 8px;
`;
