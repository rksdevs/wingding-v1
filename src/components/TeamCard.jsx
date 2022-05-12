import React from "react";
import styled from "styled-components";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

// const CardContainer = styled.div`
//   width: 25vw;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 20vw;
  width: 25vw;
  background: var(--yellow);
  color: var(--black);
  padding: 30px;
  text-align: center;
  border-radius: 20px;
  overflow: hidden;
  &:hover:before {
    transform: scale(10);
    color: var(--black);
  }

  & @media only Screen and (max-width: 40em) {
    height: 80vw;
    width: 80vw;
  }
`;
const CardMedia = styled.div`
  img {
    width: 100px;
    height: 100px;
    display: block;
    margin: auto;
    border-radius: 50%;
  }
`;
const CardContent = styled.div``;
const CardTitle = styled.h1`
  text-transform: uppercase;
  margin-top: 20px;
  margin-bottom: 10px;
  line-height: 24px;
`;
const CardDesignation = styled.h3`
  color: var(--pink);
`;
const CardDetails = styled.p`
  margin-top: 20px;
`;
const CardSocial = styled.ul`
  list-style: none;
`;
const CardSocialListItem = styled.li`
  display: inline-block;
  margin: 20px 10px;

  a {
    color: var(--pink2);
    font-size: 20px;
    transition: 0.2s;

    &:hover {
      color: #000;
    }
  }
`;

const TeamCard = ({
  avatar,
  title,
  designation,
  details,
  facebook,
  linkedin,
  twitter,
  instagram,
}) => {
  return (
    <Card>
      <CardMedia>
        <img src={avatar} alt="Avatar" />
      </CardMedia>
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardDesignation>{designation}</CardDesignation>
        <CardDetails>{details}</CardDetails>
        <CardSocial>
          <CardSocialListItem>
            <a href={linkedin}>
              <LinkedInIcon />
            </a>
          </CardSocialListItem>
          <CardSocialListItem>
            <a href={twitter}>
              <TwitterIcon />
            </a>
          </CardSocialListItem>
          <CardSocialListItem>
            <a href={facebook}>
              <FacebookIcon />
            </a>
          </CardSocialListItem>
          <CardSocialListItem>
            <a href={instagram}>
              <InstagramIcon />
            </a>
          </CardSocialListItem>
        </CardSocial>
      </CardContent>
    </Card>
  );
};

export default TeamCard;
