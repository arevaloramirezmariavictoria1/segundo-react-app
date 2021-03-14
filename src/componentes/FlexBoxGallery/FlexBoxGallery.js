import React from "react";
import { FlexHeader, FlexRow, FlexColumn, FlexImg } from "./styles";
const FlexBoxGallery = (props) => {
  console.log(props);
  return (
    <>
      <FlexHeader>
        <h1>{props.title}</h1>
        <p>{props.subtitle}</p>
      </FlexHeader>
      <FlexRow>{props.children}</FlexRow>
    </>
  );
};
export default FlexBoxGallery;
