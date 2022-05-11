import styled from "styled-components";
import waves from "../assets/waves.svg";
import taskDone from "../assets/taxi-tasks-done.png";
import aboutConversation from "../assets/taxi-conversation.png";

const AboutSection = styled.section`
  width: 100vw;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Waves = styled.img`
  width: 100%;
  position: absolute;
  top: -1rem;
`;
// const TaskDone = styled.div`
//   position: absolute;
//   width: 40%;
//   bottom: -1rem;
//   right: 0;
// `;

const Main = styled.div`
  margin: 0 15rem;
  margin-top: 27rem;
  display: flex;
  justify-content: center;
  flex-direction: column;

  @media only Screen and (max-width: 64em) {
    margin: 0 calc(5rem + 5vw);
    margin-top: 10rem;
  }
  @media only Screen and (max-width: 40em) {
    align-items: center;
    margin: 3rem calc(3rem + 3vw);
  }
`;

const TitleContents = styled.div`
  padding-left: calc(3rem + 3vw);

  @media only Screen and (max-width: 40em) {
    padding-left: 0;
  }
`;
const Title = styled.h1`
  display: inline-block;
  font-size: 2rem;
`;
const CurvedLine = styled.div`
  width: 7rem;
  height: 2rem;
  border: 5px solid var(--pink);
  border-color: var(--pink) transparent transparent transparent;
  border-radius: 150%/60px 70px 0 0;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only Screen and (max-width: 40em) {
    flex-direction: column;
  }
`;
const AboutConvo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 37%;
  padding-bottom: 5rem;

  @media only Screen and (max-width: 40em) {
    width: 100%;
    padding-bottom: 2rem;
  }
`;
const AboutText = styled.div`
  position: relative;
  width: 50%;
  @media only Screen and (max-width: 40em) {
    width: 80%;
  }
`;
const Text = styled.h4`
  font-size: calc(0.5rem + 1vw);
  line-height: 1.5;
  color: var(--nav2);
`;
const Circle = styled.span`
  display: inline-block;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background-color: var(--black);
  margin-right: 0.5rem;
  margin-top: 1rem;
`;

const About = () => {
  return (
    <AboutSection>
      <Waves src={waves} alt="Waves" width="400" height="400" />
      {/* <TaskDone>
        <img src={taskDone} alt="Task Done" width="400" height="400" />
      </TaskDone> */}

      <Main>
        <TitleContents>
          <Title>About Us</Title>
          <CurvedLine />
        </TitleContents>
        <Content>
          <AboutConvo>
            <img
              src={aboutConversation}
              alt="About Conversation"
              width="400"
              height="400"
            />
          </AboutConvo>
          <AboutText>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </Text>
            <div>
              <Circle style={{ backgroundColor: "var(--pink)" }} />
              <Circle style={{ backgroundColor: "var(--yellow)" }} />
              <Circle style={{ backgroundColor: "var(--black)" }} />
            </div>
          </AboutText>
        </Content>
      </Main>
    </AboutSection>
  );
};

export default About;
