import styled from "styled-components";

export const TarjetaContactoLlamadaContainer = styled.div`
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2), 0 4px 20px 0 rgba(0, 0, 0, 0.19);
  color: #fff !important;
  background-color: #616161 !important;
  width: 50%;
`;
export const TarjetaContactoLlamadaContenido = styled.div`
  padding: 0.01em 16px;
  text-align: center !important;
  &:after,
  &:before {
    content: "";
    display: table;
    clear: both;
  }
`;
export const TarjetaContactoLlamadaFoto = styled.img`
  width: 80%;
`;
export const TarjetaContactoLlamadaContenedorDeButton = styled.div`
  margin-top: 16px !important;
  margin-bottom: 16px !important;
`;
export const TarjetaContactoLlamadaButton = styled.button`
  border: none;
  display: inline-block;
  padding: 8px 16px;
  vertical-align: middle;
  overflow: hidden;
  text-decoration: none;
  color: inherit;
  background-color: inherit;
  text-align: center;
  cursor: pointer;
  white-space: nowrap;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  &:hover {
    color: #000 !important;
    background-color: #ccc !important;
  }
  &:disabled {
    cursor: not-allowed;
    opacity: 0.3;
  }
  ${(props) =>
    props.theme === "red" &&
    `
        color: #fff !important;
        background-color:#f44336 !important;
  `}
  ${(props) =>
    props.theme === "green" &&
    `
        color: #fff !important;
        background-color:#0d940d !important;
  `}
`;
