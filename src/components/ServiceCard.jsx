import React from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

const move = keyframes`
0% { transform: translateY(-5px)         }
    50% { transform: translateY(10px) translateX(10px)        }
    100% { transform: translateY(-5px)         }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: var(--white2);
  height: 20vw;
  width: 25vw;
  border-radius: 10px;

  @media only Screen and (max-width: 40em) {
    height: 80vw;
    width: 80vw;
  }
`;
const CardImage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 50%;
  img {
    width: 50%;
    animation: ${move} 2.5s ease infinite;
  }
`;
const CardContent = styled.div`
  display: flex;
  height: 40%;
  flex-direction: column;

  justify-content: center;
  align-items: center;
  padding-left: 1rem;
  padding-top: 1rem;
  position: relative;
  @media only Screen and (max-width: 40em) {
    justify-content: center;
    align-items: center;
  }
`;
const CardTitle = styled.h2`
  display: inline-block;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  margin-top: 0.5rem;
`;
const CardText = styled.h5`
  line-height: 1.5;
`;

const CardButtonDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CardButton = styled.button`
  padding: 0.5rem 1rem;
  margin-top: 0.5rem;
  border-radius: 10px;
  cursor: pointer;
  font-size: calc(0.5rem + 0.5vw);
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.2s;
  background-color: var(--nav);
  color: var(--yellow);

  @media only Screen and (max-width: 40em) {
  }

  &:hover {
    transform: scale(1.1);
  }
  &:focus {
    transform: scale(0.9);
  }
`;

const ServiceCard = ({ pic, title, content, to }) => {
  // const navigate = useNavigate();
  return (
    <Card>
      <CardImage>
        <img src={pic} alt="cardimg" height="400" width="400" />
      </CardImage>
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardText>{content}</CardText>
        <CardButtonDiv>
          <Link to={to}>
            <CardButton>Explore</CardButton>
          </Link>
        </CardButtonDiv>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
