// import * as React from "react";
// import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
// import { height } from "@mui/system";

// export default function MediaCard({ pic, title, content }) {
//   return (
//     <Card sx={{ maxWidth: 345 }}>
//       <CardMedia
//         component="img"
//         height="140"
//         image={pic}
//         alt="picture"
//         style={{ width: "100%", height: "40%", objectFit: "cover" }}
//       />
//       <CardContent>
//         <Typography gutterBottom variant="h5" component="div">
//           {title}
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//           {content}
//         </Typography>
//       </CardContent>
//       <CardActions>
//         <Button size="small">Share</Button>
//         <Button size="small">Learn More</Button>
//       </CardActions>
//     </Card>
//   );
// }

import React from "react";
import styled, { keyframes } from "styled-components";

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

// const CardButtonDiv = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
// `;

const CardButton = styled.button`
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
  background-color: var(--nav);
  color: var(--yellow);
  width: 30%;

  @media only Screen and (max-width: 40em) {
    width: 50%;
  }

  &:hover {
    transform: scale(1.1);
  }
  &:focus {
    transform: scale(0.9);
  }
`;

const ServiceCard = ({ pic, title, content }) => {
  return (
    <Card>
      <CardImage>
        <img src={pic} alt="Picture" height="400" width="400" />
      </CardImage>
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardText>{content}</CardText>
        {/* <CardButtonDiv>
          <CardButton>Explore</CardButton>
        </CardButtonDiv> */}
        <CardButton>Explore</CardButton>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
