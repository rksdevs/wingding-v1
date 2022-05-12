import styled from "styled-components";
import NewTeamCard from "../components/NewTeamCard";
import avatar1 from "../assets/avatar-1.jpg";
import avatar2 from "../assets/avatar-2.jpg";
import avatar3 from "../assets/avatar-3.jpg";
import avatar4 from "../assets/avatar-4.jpg";

const TeamSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: relative;
`;

const Title = styled.h1`
  color: #0a0b10;
  font-size: calc(1rem + 1.5vw);
  margin-top: 1rem;
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
`;
const CardGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-bottom: 5rem;
`;

const OurTeam = () => {
  return (
    <TeamSection>
      <Title>Our Team</Title>
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
    </TeamSection>
  );
};

export default OurTeam;

{
  /* <CardGroup>
          <CardDiv>
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
          </CardDiv>
          <CardDiv>
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
          </CardDiv>
          <CardDiv>
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
          </CardDiv>
        </CardGroup>
        <CardGroup>
          <CardDiv>
            <TeamCard
              avatar={avatar4}
              title="James Doe"
              designation="President"
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
              avatar={avatar1}
              title="Joe Doe"
              designation="Director"
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
              title="Jimmy Doe"
              designation="CTO"
              details="Reference site about Lorem Ipsum, giving information on its origins,
              as well as a random Lipsum generator."
              facebook=""
              linkedin=""
              twitter=""
              instagram=""
            />
          </CardDiv>
        </CardGroup> */
}
