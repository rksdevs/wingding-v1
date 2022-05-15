import React from "react";
import styled from "styled-components";
import Hero from "../sections/Hero";
import Contact from "../sections/Contact";
import { danceCostume } from "../data";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const DanceCostume = () => {
  return (
    <div>
      <Container>
        <Hero
          title={danceCostume.title}
          subText={danceCostume.subText}
          imgSource={danceCostume.imgSource}
        />
        <Contact />
      </Container>
    </div>
  );
};

export default DanceCostume;
