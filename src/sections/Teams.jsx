import styled from "styled-components";
import TeamCard from "../components/TeamCard";
import avatar1 from "../assets/avatar-1.jpg";
import avatar2 from "../assets/avatar-2.jpg";
import avatar3 from "../assets/avatar-3.jpg";

const TeamsSection = styled.section`
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
  background-color: var(--white);
  background-size: auto 100vh;
  background-repeat: no-repeat;

  @media only Screen and (max-width: 40em) {
    height: "inherit";
  }
`;
const Title = styled.h1`
  color: var(--black);
  display: inline-block;
  font-size: 2rem;
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

const TeamCardDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2rem;
  @media only Screen and (max-width: 40em) {
    flex-direction: column;
  }
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

const Teams = () => {
  return (
    <TeamsSection>
      <Title>Our Team</Title>
      <TeamCardDiv>
        <CardGroup>
          <CardDiv>
            <TeamCard
              avatar={avatar1}
              title="Jane Doe"
              designation="Founder"
              details="Reference site about Lorem Ipsum, giving information on its origins,
              as well as a random Lipsum generator."
              facebook=""
              linkedin=""
              twitter=""
              instagram=""
            />
          </CardDiv>
          <CardDiv>
            <TeamCard
              avatar={avatar2}
              title="Jhon Doe"
              designation="CEO"
              details="Reference site about Lorem Ipsum, giving information on its origins,
              as well as a random Lipsum generator."
              facebook=""
              linkedin=""
              twitter=""
              instagram=""
            />
          </CardDiv>
          <CardDiv>
            <TeamCard
              avatar={avatar3}
              title="Jude Doe"
              designation="Director"
              details="Reference site about Lorem Ipsum, giving information on its origins,
              as well as a random Lipsum generator."
              facebook=""
              linkedin=""
              twitter=""
              instagram=""
            />
          </CardDiv>
        </CardGroup>
      </TeamCardDiv>
    </TeamsSection>
  );
};

export default Teams;
