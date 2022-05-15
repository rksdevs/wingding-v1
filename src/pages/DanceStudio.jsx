import React from "react";
import styled from "styled-components";
import Hero from "../sections/Hero";
import Contact from "../sections/Contact";
import { danceStudio } from "../data";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const DanceStudio = () => {
  return (
    <div>
      <Container>
        <Hero
          title={danceStudio.title}
          subText={danceStudio.subText}
          imgSource={danceStudio.imgSource}
        />
        <Contact />
      </Container>
    </div>
  );
};

export default DanceStudio;
