import styled from "styled-components";

export const ContenedorImagen = styled.div`
  width: 50vw;
  height: 300px; /* [1.1] Set it as per your need */
  overflow: hidden; /* [1.2] Hide the overflowing of child elements */
`;
export const ImagenStyled = styled.img`
  width: 100%;
  transition: transform 0.5s ease;
  :hover {
    transform: scale(1.5);
  }
`;
export const Titulo = styled.h1`
  color: rgb (255, 102, 0);
`;
export const Descripcion = styled.p`
  color: rgb (255, 153, 51);
`;
export const ContenedorDescripcion = styled.div`
  width: 48vw;
  height: 300px; /* [1.1] Set it as per your need */
  overflow: hidden; /* [1.2] Hide the overflowing of child elements */
`;
export const Contenedor = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const ContenedorEfecto = styled.div`
  transition: transform 0.5s ease;
  :hover {
    transform: scale(1.5);
    padding:120px;
  }

`;