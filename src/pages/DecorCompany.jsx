import React from "react";
import styled from "styled-components";
import Hero from "../sections/Hero";
import Contact from "../sections/Contact";
import { decorServices } from "../data";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
        <Contact />
      </Container>
    </div>
  );
};

export default DecorCompany;
