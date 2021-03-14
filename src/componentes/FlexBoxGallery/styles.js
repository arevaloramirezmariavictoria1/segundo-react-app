import styled from "styled-components";
export const FlexHeader = styled.div`
  text-align: center;
  padding: 32px;
`;
export const FlexRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 4px;
`;
export const FlexColumn = styled.div`
  flex: 25%;
  max-width: 25%;
  padding: 0 4px;
  /* Responsive layout - makes a two column-layout instead of four columns */
  @media (max-width: 800px) {
    flex: 50%;
    max-width: 50%;
  }

  /* Responsive layout - makes the two columns stack on top of each other instead of next to each other */
  @media (max-width: 600px) {
    flex: 100%;
    max-width: 100%;
  }
`;

export const FlexImg = styled.img`
  margin-top: 8px;
  vertical-align: middle;
  width: 100%;
`;
