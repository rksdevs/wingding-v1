import styled from "styled-components";
import ServiceCard from "../components/ServiceCard";
import ArtistManagement from "../assets/artistmanagement.png";
import EventManagement from "../assets/eventmanagement-2.png";
import DecorServices from "../assets/decorservices-2.png";
import DanceCostume from "../assets/dancecostume.png";
import DanceStudio from "../assets/dancestudio.png";
import Photography from "../assets/photography-1.png";

const ServiceSection = styled.section`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  padding-top: 3rem;
`;
const Background = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100vw;
  z-index: -1;
  background-color: var(--black);
  background-size: auto 100vh;
  background-repeat: no-repeat;

  @media only Screen and (max-width: 40em) {
    height: "inherit";
  }
`;
const Title = styled.h1`
  color: var(--white);
  display: inline-block;
  font-size: 2rem;
  /* margin-top: 4rem; */
  margin-top: 2rem;
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

const ServiceCardDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2rem;
`;
const CardGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 1rem;

  @media only Screen and (max-width: 40em) {
    flex-direction: column;
  }
`;

const CardDiv = styled.div`
  display: flex;
  margin: 0.5rem;
  padding: 0.5rem;

  @media only Screen and (max-width: 40em) {
    flex-direction: column;
  }
`;

const Services = () => {
  return (
    <ServiceSection id="services">
      <Background>
        <Title>Services We Offer</Title>
      </Background>
      <ServiceCardDiv>
        <CardGroup>
          <CardDiv>
            <ServiceCard
              pic={EventManagement}
              title="Event Management"
              content="We Provide the best event management services in Hyderabad. We Provide the best event management services in Hyderabad"
              to="/eventmanagement"
            />
          </CardDiv>
          <CardDiv>
            <ServiceCard
              pic={ArtistManagement}
              title="Artist Management"
              content="We Provide the best event management services in Hyderabad. We Provide the best event management services in Hyderabad"
              to="/artistmanagement"
            />
          </CardDiv>
          <CardDiv>
            <ServiceCard
              pic={DecorServices}
              title="Decor Services"
              content="We Provide the best event management services in Hyderabad. We Provide the best event management services in Hyderabad"
              to="/decorcompany"
            />
          </CardDiv>
        </CardGroup>
        <CardGroup>
          <CardDiv>
            <ServiceCard
              pic={DanceCostume}
              title="Dance Costume Store"
              content="We Provide the best event management services in Hyderabad. We Provide the best event management services in Hyderabad"
              to="/dancecostume"
            />
          </CardDiv>
          <CardDiv>
            <ServiceCard
              pic={DanceStudio}
              title="Dance Studio"
              content="We Provide the best event management services in Hyderabad. We Provide the best event management services in Hyderabad"
              to="/dancestudio"
            />
          </CardDiv>
          <CardDiv>
            <ServiceCard
              pic={Photography}
              title="Photography"
              content="We Provide the best event management services in Hyderabad. We Provide the best event management services in Hyderabad"
              to="/photography"
            />
          </CardDiv>
        </CardGroup>
      </ServiceCardDiv>
    </ServiceSection>
  );
};

export default Services;
