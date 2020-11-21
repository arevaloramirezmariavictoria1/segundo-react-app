import styled from "styled-components";

export const TarjetaAlbumContainer = styled.div`
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2), 0 4px 20px 0 rgba(0, 0, 0, 0.19);
  margin: 10px;
  width: calc((100vw - 120px) * 33 / 100);
`;

export const TarjetaAlbumFoto = styled.img`
  width: 100%;
  height: 200px;
`;

export const TarjetaAlbumDescripcion = styled.div`
  padding: 0.01em 16px;
  display: flex;
  flex-wrap: wrap;
  text-align: center !important;
`;
