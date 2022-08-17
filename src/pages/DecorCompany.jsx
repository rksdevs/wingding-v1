import React from "react";
import styled from "styled-components";
import Hero from "../sections/Hero";
import Contact from "../sections/Contact";
import { decorServices } from "../data";
import TeamsSection from "../sections/TeamsSection";
import TitlebarImageList from "../components/ImageList";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  color: #0a0b10;
  font-size: calc(1rem + 1.5vw);
  margin-top: 1rem;
  margin-bottom: 3rem;
  position: relative;
  &::before {
    content: "";
    height: 1px;
    width: 50%;
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 0.5rem);
    /* or 100px */
    border-bottom: 5px solid var(--pink);
  }
`;

const DecorCompany = () => {
  return (
    <div>
      <Container>
        <Hero
          title={decorServices.title}
          subText={decorServices.subText}
          imgSource={decorServices.imgSource}
        />
        <Title>Gallery</Title>
        <TitlebarImageList />
        <TeamsSection />
        <Contact />
      </Container>
    </div>
  );
};

export default DecorCompany;