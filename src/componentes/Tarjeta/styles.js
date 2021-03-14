import styled from "styled-components";

export const TarjetaContainerStyled = styled.div`
  margin-top: 16px;
  margin-bottom: 16px;
  padding: 0.01em 16px;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);

  &:after,
  &:before {
    content: "";
    display: table;
    clear: both;
  }
`;
