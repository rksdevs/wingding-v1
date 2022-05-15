import React from "react";
import styled from "styled-components";
import Hero from "../sections/Hero";
import Contact from "../sections/Contact";
import { photography } from "../data";
import ImageSlider from "../slider/ImageSlider";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Photography = () => {
  return (
    <div>
      <Container>
        <Hero
          title={photography.title}
          subText={photography.subText}
          imgSource={photography.imgSource}
        />
        <ImageSlider />
        <Contact />
      </Container>
    </div>
  );
};

export default Photography;
