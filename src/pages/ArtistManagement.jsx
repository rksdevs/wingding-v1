import React from "react";
import styled from "styled-components";
import Hero from "../sections/Hero";
import Contact from "../sections/Contact";
import { artistManagement } from "../data";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ArtistManagement = () => {
  return (
    <div>
      <Container>
        <Hero
          title={artistManagement.title}
          subText={artistManagement.subText}
          imgSource={artistManagement.imgSource}
        />
        <Contact />
      </Container>
    </div>
  );
};

export default ArtistManagement;
