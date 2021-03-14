import styled from "styled-components";

export const ImagenContainer = styled.div`
background-image:${(props) => `url(${props.imagenFondo})`};´
clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
flex: 0 1 150px; /* No stretching: */
margin: 5px;
min-width: 50vw;
min-height: 33vh;
${(props) =>
  props.forma === "polygon" &&
  `
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  `}
  ${(props) =>
    props.forma === "trepezoid" &&
    `
    clip-path: polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%);
  `}

  ${(props) =>
    props.forma === "message" &&
    `
    clip-path: polygon(0% 0%, 100% 0%, 100% 75%, 75% 75%, 75% 100%, 50% 75%, 0% 75%);
  `}
`;
