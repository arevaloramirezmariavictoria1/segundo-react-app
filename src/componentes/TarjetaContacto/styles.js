import styled from "styled-components";

export const TarjetaContactoContainer = styled.div`
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2), 0 4px 20px 0 rgba(0, 0, 0, 0.19);
  width: 70%;
`;
export const TarjetaContactoHeader = styled.header`
  padding: 0.01em 16px;
  color: #000 !important;
  background-color: #f1f1f1 !important;
  &:after,
  &:before {
    content: "";
    display: table;
    clear: both;
  }
`;
export const TarjetaContactoContenido = styled.div`
  padding: 0.01em 16px;
  &:after,
  &:before {
    content: "";
    display: table;
    clear: both;
  }
`;
export const TarjetaContactoImg = styled.img`
  float: left !important;
  border-radius: 50%;
  margin-right: 16px !important;
  width: 60px;
`;
export const TarjetaContactoButton = styled.button`
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
  display: block;
  width: 100%;
  color: #fff !important;
  background-color: #616161 !important;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.3;
  }
  &:hover {
    color: #000 !important;
    background-color: #ccc !important;
  }
`;
