import styled, { keyframes } from "styled-components";
import White from "../assets/blobgrey6.png";
import Pink2 from "../assets/blobpink9.png";
import Arrow from "../assets/Arrow Right.svg";

const move = keyframes`
0% { transform: translateY(-5px)  }
    50% { transform: translateY(10px) }
    100% { transform: translateY(-5px) }
`;

const HeroSection = styled.div`
  width: 100vw;
  height: 40vw;
  background-color: var(--black);
  color: var(--white);

  display: flex;
  justify-content: center;
  position: relative;

  @media only Screen and (max-width: 48em) {
    height: 70vw;
    display: block;
  }

  @media only Screen and (max-width: 420px) {
    height: auto;
    padding-bottom: 2rem;
  }
`;

const Blobs = styled.div`
  width: 100%;
  position: absolute;
  right: 0;

  @media only Screen and (max-width: 48em) {
    height: 70vw;
    display: block;
  }
`;
const WhiteBlob = styled.div`
  width: calc(30% + 30vw);
  position: absolute;
  right: 0;
  top: 0;
  z-index: 2;
`;
const PinkBlob = styled.div`
  width: calc(32% + 32vw);
  position: absolute;
  right: 12rem;
  top: 6rem;
  z-index: 15;

  @media only Screen and (max-width: 48em) {
    right: 1rem;
    top: 1rem;
  }
`;

const MainContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70vw;

  @media only Screen and (max-width: 48em) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
  }
`;
const LeftBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 50%;
  line-height: 1.5;
  z-index: 100;

  @media only Screen and (max-width: 48em) {
    width: 80%;
    text-align: center;
    align-items: center;
    justify-content: space-around;
    margin-top: calc(2.5rem +2.5vw);
    filter: drop-shadow(2px 4px 6px var(--black));
  }
`;
const Topic = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--nav);
  font-weight: 700;
  font-size: calc(0.4rem + 0.4vw);
  padding: 0.5rem 1rem;
  border-radius: 10px;

  @media only Screen and (max-width: 48em) {
    margin-top: 1rem;
  }
`;
const Circle = styled.span`
  display: inline-block;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background-color: var(--pink);
  margin-right: 0.5rem;

  @media only Screen and (max-width: 48em) {
    width: 0.5rem;
    height: 0.5rem;
  }
`;
const Title = styled.h1`
  font-size: calc(2rem + 1vw);
  line-height: 1.2;
  padding: 0.5rem 0;
`;
const SubText = styled.h5`
  font-size: calc(0.5rem + 0.5vw);
  color: var(--pink2);
`;
const CTA = styled.button`
  padding: 0.5rem 1rem;
  margin-top: 1rem;
  border-radius: 10px;
  cursor: pointer;
  font-size: calc(0.5rem + 0.5vw);
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.2s;

  img {
    width: 1.5rem;
  }

  &:hover {
    transform: scale(1.1);
  }
  &:focus {
    transform: scale(0.9);
  }
`;
const TeamIllustration = styled.img`
  max-width: 100%;
  width: calc(30% + 20vw);
  z-index: 20;
  height: auto;
  animation: ${move} 2.5s ease infinite;

  @media only Screen and (max-width: 48em) {
    display: none;
    align-self: flex-start;
    position: absolute;
    bottom: 0;
    right: 0;
    opacity: 0.5;
    width: 100%;
  }
`;

const Hero = ({ title, subText, imgSource }) => {
  return (
    <HeroSection id="home">
      <Blobs>
        <WhiteBlob>
          <img src={White} alt="White Blob" width="400" height="400" />
        </WhiteBlob>
        <PinkBlob>
          <img src={Pink2} alt="Pink Blob" width="400" height="400" />
        </PinkBlob>
      </Blobs>
      <MainContent>
        <LeftBlock>
          <Topic>
            <Circle />
            <span>Welcome</span>
          </Topic>
          <Title>{title}</Title>
          <SubText>{subText}</SubText>
          <CTA>
            Get in touch &nbsp;
            <img src={Arrow} alt="CTA" width="400" height="400" />
          </CTA>
        </LeftBlock>
        <TeamIllustration
          src={imgSource}
          alt="Team Illustration"
          width="400"
          height="400"
        />
      </MainContent>
    </HeroSection>
  );
};

export default Hero;
