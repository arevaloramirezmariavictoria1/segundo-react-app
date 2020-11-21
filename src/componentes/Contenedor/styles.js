import styled from "styled-components";

export const ContenedorContainer = styled.div`
  padding: 0.01em 16px;
  &:after,
  &:before {
    content: "";
    display: table;
    clear: both;
  }
`;
