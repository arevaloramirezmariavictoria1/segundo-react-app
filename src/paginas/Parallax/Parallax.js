import React from "react";
import bokunohero3 from "../../assets/imagenes/imagenes-con-formas/BokuNoHero3.jpg";
import {
  ParallaxBlock,
  DescriptionBlock,
  ContentBlock,
  Button,
} from "lc-react-essentials";
const Parallax = () => {
  return (
    <ParallaxBlock
      style={{ width: "100% !important" }}
      bgImgBlock={`linear-gradient(
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    ),
    url(${bokunohero3})`}
      footer={
        <DescriptionBlock
          description="La fotografía se convierte en algo personal, se transforma en un arte que se muestra con descaro ante los ojos de la gente. Fotografiar es una exhibición pública del interior de uno mismo, una pérdida de intimidad voluntaria, los deseos, gustos, fantasías, ideas…"
          fontColor="#777"
          title="LA FOTOGRAFÍA COMO EXPRESIÓN ARTÍSTICA"
        />
      }
    >
      <ContentBlock
        subtitle="And I'm a Photographer"
        title="Yo soy Brajeam George"
      >
        <>
          <Button label="Hire me" />
          <Button label="Galery" />
        </>
      </ContentBlock>
    </ParallaxBlock>
  );
};
export default Parallax;
