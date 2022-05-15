import React from "react";
import styled from "styled-components";
import Hero from "../sections/Hero";
import Contact from "../sections/Contact";
import { eventManagement } from "../data";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const EventManagement = () => {
  return (
    <div>
      <Container>
        <Hero
          title={eventManagement.title}
          subText={eventManagement.subText}
          imgSource={eventManagement.imgSource}
        />
        <Contact />
      </Container>
    </div>
  );
};

export default EventManagement;
