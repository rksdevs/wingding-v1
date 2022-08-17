import React from "react";
import styled from "styled-components";
import NewTeamCard from "../components/NewTeamCard";
import TeamCard from "../components/TeamCard";
import avatar1 from "../assets/avatar-1.jpg";
import avatar2 from "../assets/avatar-2.jpg";
import avatar3 from "../assets/avatar-3.jpg";

const TeamContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: relative;
  height: 50vh;
  margin-bottom: 12rem;

  @media only Screen and (max-width: 40em) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding-top: 5rem;
    height: auto;
  }
`;

const Title = styled.h1`
  color: #0a0b10;
  font-size: calc(1rem + 1.5vw);

  margin-bottom: 15rem;
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

  @media only Screen and (max-width: 40em) {
    margin-bottom: 2rem;
  }
`;

// const CardContainerDesktop = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   margin: 2rem;
//   @media only Screen and (max-width: 40em) {
//     display: none;
//   }
// `;

const CardGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;

  @media only Screen and (max-width: 40em) {
    display: none;
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

const CardContainerMobile = styled.div`
  margin-top: 2rem;
  width: 70vw;
  display: none;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media only Screen and (max-width: 40em) {
    flex-direction: column;
    width: 90vw;
    display: flex;
  }
`;

const TeamsSection = () => {
  return (
    <TeamContainer>
      <Title>Our Team</Title>
      <CardContainerMobile>
        <TeamCard
          avatar={avatar1}
          title="Jhon Doe"
          designation="Founder"
          details="Reference site about Lorem Ipsum, giving information on its origins,
              as well as a random Lipsum generator."
          facebook=""
          linkedin=""
          twitter=""
          instagram=""
        />
        <TeamCard
          avatar={avatar2}
          title="Jane Doe"
          designation="Co-Founder"
          details="Reference site about Lorem Ipsum, giving information on its origins,
              as well as a random Lipsum generator."
          facebook=""
          linkedin=""
          twitter=""
          instagram=""
        />
        <TeamCard
          avatar={avatar3}
          title="Jake Doe"
          designation="CEO"
          details="Reference site about Lorem Ipsum, giving information on its origins,
              as well as a random Lipsum generator."
          facebook=""
          linkedin=""
          twitter=""
          instagram=""
        />
      </CardContainerMobile>
      <CardGroup>
        <NewTeamCard
          avatar={avatar1}
          title="Jhon Doe"
          designation="Founder"
          details="Reference site about Lorem Ipsum, giving information on its origins,
              as well as a random Lipsum generator."
          facebook=""
          linkedin=""
          twitter=""
          instagram=""
        />
        <NewTeamCard
          avatar={avatar2}
          title="Jane Doe"
          designation="Co-Founder"
          details="Reference site about Lorem Ipsum, giving information on its origins,
              as well as a random Lipsum generator."
          facebook=""
          linkedin=""
          twitter=""
          instagram=""
        />
        <NewTeamCard
          avatar={avatar3}
          title="Jake Doe"
          designation="CEO"
          details="Reference site about Lorem Ipsum, giving information on its origins,
              as well as a random Lipsum generator."
          facebook=""
          linkedin=""
          twitter=""
          instagram=""
        />
      </CardGroup>
    </TeamContainer>
  );
};

export default TeamsSection;
