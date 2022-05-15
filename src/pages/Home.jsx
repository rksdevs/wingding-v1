//import all sections here without lazy coz we dont need a spinner
import styled from "styled-components";
import Hero from "../sections/Hero";
import About from "../sections/About";
import Contact from "../sections/Contact";
import Services from "../sections/Services";
import Testimonials from "../sections/Testimonials";
import TeamsSection from "../sections/TeamsSection";
import { homePage } from "../data";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Home = () => {
  return (
    <div>
      <Container>
        <Hero
          title={homePage.title}
          subText={homePage.subText}
          imgSource={homePage.imgSource}
        />
        <About />
        <Services />
        <TeamsSection />
        <Testimonials />
        <Contact />
      </Container>
    </div>
  );
};

export default Home;
