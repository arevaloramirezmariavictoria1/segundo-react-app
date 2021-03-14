import styled from "styled-components";

export const ContenedorImagen = styled.div`
  width: 50vw;
  height: 300px; /* [1.1] Set it as per your need */
  overflow: hidden; /* [1.2] Hide the overflowing of child elements */
`;
export const Titulo = styled.h1`
  color: rgb (255, 102, 0);
`;
export const Descripcion = styled.p`
  color: rgb (255, 153, 51);
`;
export const ContenedorDescripcion = styled.div`
  width: 48vw;
  height: 300px;
  overflow: hidden;
  display: grid;
  place-items: center;
`;
export const Contenedor = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const ContenedorEfecto = styled.div`
  transition: transform 0.5s ease;
  :hover {
    transform: scale(1.5);
    display: grid;
    place-items: center;
  }
`;
export const Vidrio = styled.div`
  background-image: ${(
    props
  ) => `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.5)),
  url(${props.backgroundImage})`};
  height: 100%;
  display: grid;
  place-items: center;
  color: white;
  div {
    backdrop-filter: blur(5px) brightness(0.5) saturate(0.5);
    padding: 20px;
  }
`;
