import * as React from "react";
import Facebook from "../assets/facebook-square-brands.svg";
import LinkedId from "../assets/linkedin-brands.svg";
import Twitter from "../assets/twitter-square-brands.svg";
import Instagram from "../assets/instagram-square-brands.svg";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
import MailIcon from "@mui/icons-material/Mail";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import AdminNav from "../components/AdminNav";

const MainContainer = styled.div`
  width: 100vw;
  background-color: var(--nav);
  display: flex;
  flex-direction: rows;
  align-items: center;
  justify-content: space-evenly;
  align-items: baseline;

  @media only Screen and (max-width: 48em) {
    flex-direction: column;
    align-items: center;
  }
`;

const QuickLinks = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media only Screen and (max-width: 48em) {
    margin-top: 2rem;
  }
`;
const CardSocial = styled.ul`
  list-style: none;
`;
const CardSocialListItem = styled.li`
  display: inline-block;
  margin: 5px 5px;
  p {
    color: var(--pink2);
    font-size: 15px;
    border-bottom: 1px solid var(--pink2);
    transition: 0.2s;

    &:hover {
      color: var(--yellow);
    }
  }
`;

const AddressSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media only Screen and (max-width: 48em) {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
`;

const AddressList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AddressItem = styled.li`
  display: inline-block;
  font-size: 15px;
  margin: 5px 5px;
  color: var(--pink2);
  span {
    margin-right: 10px;
    align-items: bottom;
  }

  p {
    display: flex;
    align-items: center;
  }
`;

const LocationItem = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContactSection = styled.section`
  padding: calc(1rem + 1vw) 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  color: var(--white);
  display: inline-block;
  font-size: 2rem;
  margin-bottom: 3rem;
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

  @media only Screen and (max-width: 48em) {
    margin-bottom: 1.5rem;
  }
`;

const Icons = styled.div`
  display: flex;
  margin-bottom: 3rem;
  a {
    &:hover {
      img {
        filter: invert(20%) sepia(100%) saturate(100%) hue-rotate(360deg)
          brightness(90%) contrast(97%);
      }
    }
    &:not(:last-child) {
      margin-right: 2rem;
    }
    img {
      width: 3rem;
      height: 3rem;
    }
  }

  @media only Screen and (max-width: 48em) {
    margin-top: 1rem;
    margin-bottom: 1rem;
    a {
      img {
        width: 1.5rem;
        height: 1.5rem;
      }
    }
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  input {
    padding: 1rem calc(0.5rem + 1vw);
    margin-bottom: 1rem;
    background-color: var(--yellow);
    border: none;
    border-radius: 4px;
    color: #eff7f8;
    &:active,
    &:focus {
      border: none;
      outline: none;
      background-color: var(--pink2);
    }
    &::placeholder {
      color: var(--black);
      opacity: 0.6;
    }
    &[name="name"] {
      margin-right: 2rem;
    }
  }
  textarea {
    padding: 1rem calc(0.5rem + 1vw);
    margin-bottom: 1rem;
    background-color: var(--yellow);
    border: none;
    border-radius: 4px;
    color: #eff7f8;
    margin-bottom: 2rem;
    &:focus,
    &:active {
      background-color: var(--pink2);
    }
    &::placeholder {
      color: var(--black);
      opacity: 0.6;
    }
  }
  button {
    padding: 0.8rem 2rem;
    background-color: var(--white);
    border-radius: 20px;
    font-size: 1.2rem;
    color: #0a0b10;
    cursor: pointer;
    transition: transform 0.3s;
    &:hover {
      transform: scale(1.1);
    }
    &:active {
      transform: scale(0.9);
    }
  }
`;

const Row = styled.div`
  @media only Screen and (max-width: 40em) {
    display: flex;
    flex-direction: column;
    input {
      &[name="name"] {
        margin-right: 0;
      }
    }
  }
`;
const Contact = () => {
  return (
    <MainContainer>
      <ContactSection id="contact">
        <Title>Get in touch</Title>
        {/* <Text>Lorem ipsum dolor sit amet, consectetur adipisicing.</Text> */}
        <Icons>
          <a href="https://www.facebook.com/">
            {" "}
            <img src={Facebook} alt="Facebook" />
          </a>
          <a href="https://www.linkedin.com//">
            <img src={LinkedId} alt="LinkedId" />
          </a>
          <a href="https://twitter.com/">
            <img src={Twitter} alt="Twitter" />
          </a>
          <a href="https://www.instagram.com/">
            <img src={Instagram} alt="Instagram" />
          </a>
        </Icons>
        <Form>
          <Row>
            <input name="name" type="text" placeholder="your name" />
            <input
              name="email"
              type="email"
              placeholder="enter working email id"
            />
          </Row>
          <textarea
            name=""
            id=""
            cols="30"
            rows="2"
            placeholder="your message"
          ></textarea>
          <div style={{ margin: "0 auto" }}>
            <button
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              Submit
            </button>
          </div>
        </Form>
      </ContactSection>

      <QuickLinks>
        <Title>Quick Links</Title>
        <CardSocialListItem>
          <Link to="/artistmanagement" as="li">
            <p>Artist Management</p>
          </Link>
        </CardSocialListItem>
        <CardSocialListItem>
          <Link to="/eventmanagement" as="li">
            <p>Event Management</p>
          </Link>
        </CardSocialListItem>
        <CardSocialListItem>
          <Link to="/dancecostume" as="li">
            <p>Dance Costume</p>
          </Link>
        </CardSocialListItem>
        <CardSocialListItem>
          <Link to="/dancestudio" as="li">
            <p>Dance Studio</p>
          </Link>
        </CardSocialListItem>
        <CardSocialListItem>
          <Link to="/decorcompany" as="li">
            <p>Decors</p>
          </Link>
        </CardSocialListItem>
        <CardSocialListItem>
          <Link to="/photography" as="li">
            <p>Photography</p>
          </Link>
        </CardSocialListItem>
        <CardSocialListItem>
          <Link to="/" as="li">
            <AdminNav />
          </Link>
        </CardSocialListItem>
      </QuickLinks>

      <AddressSection>
        <Title>Address</Title>
        <AddressList>
          <AddressItem>
            <p>
              <span>
                <LocationOnIcon />
              </span>
              5th Avenue, Hyderabad 500032
            </p>
          </AddressItem>
          <AddressItem>
            <p>
              <span>
                <MailIcon />
              </span>
              xyz@gmail.com
            </p>
          </AddressItem>
          <AddressItem>
            <p>
              <span>
                <CallIcon />
              </span>
              +91 1234 567890
            </p>
          </AddressItem>
        </AddressList>
      </AddressSection>
    </MainContainer>
  );
};

export default Contact;
