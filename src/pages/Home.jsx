//import all sections here without lazy coz we dont need a spinner
import styled from "styled-components";
import Hero from "../sections/Hero";
import About from "../sections/About";
import Contact from "../sections/Contact";
import Services from "../sections/Services";
import Testimonials from "../sections/Testimonials";
import OurTeam from "../sections/OurTeam";

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
        <Hero />
        <About />
        <Services />
        <OurTeam />
        <Testimonials />
        <Contact />
      </Container>
    </div>
  );
};

export default Home;
