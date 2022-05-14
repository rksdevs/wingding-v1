import React from "react";
import styled from "styled-components";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

const CardContainer = styled.div`
  width: 25vw;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;
const Card = styled.div`
  width: 80%;
  height: auto;
  background: var(--yellow);
  padding: 30px;
  box-sizing: border-box;
  text-align: center;
  border-radius: 20px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden;

  &:before {
    position: absolute;
    content: "";
    width: 100px;
    height: 100px;
    background: var(--nav2);
    bottom: 0;
    right: 0;
    z-index: -1;
    border-top-left-radius: 100px;
    transition: 0.5s;
  }

  &:hover:before {
    transform: scale(10);
    color: var(--black);
  }

  @media only Screen and (max-width: 40em) {
    width: 80%;
    height: auto;
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
const CardTitle = styled.h2`
  text-transform: uppercase;
  margin-top: 20px;
  margin-bottom: 20px;
  line-height: 24px;
`;
const CardDesignation = styled.h5`
  font-size: 14px;
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

const NewTeamCard = ({
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
    <CardContainer>
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
    </CardContainer>
  );
};

export default NewTeamCard;
