import logo from "../assets/MOK-4.png";
import styled from "styled-components";

const Headers = styled.header`
  display: flex;
  flex-direction: columns;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 5rem;
  background-color: var(--nav);
  color: var(--white);
  position: relative;
  z-index: 500;
`;

const Logo = styled.a`
  display: flex;
  align-items: center;
  width: 4.5rem;
  height: auto;
  cursor: pointer;
`;

const Nav = styled.nav`
  width: 25rem;
  max-width: 40rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    font-weight: 600;
    color: var(--white);
    line-height: 1.5;

    &::after {
      content: "";
      display: block;
      height: 3px;
      width: 3px;
      background: transparent;
      transition: width 0.5s;
    }

    &:not(:last-child):hover::after {
      width: 100%;
      background: var(--yellow);
    }
  }
`;

const Button = styled.button`
  background-color: var(--yellow);
  padding: 0.5rem 1rem;
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    transform: scale(1.1);
  }
  &:focus {
    transform: scale(0.9);
  }
`;

const Header = () => {
  return (
    <Headers>
      <Logo>
        <img src={logo} alt="WingdinG" />
        {/* <h3>WingDing</h3> */}
      </Logo>
      <Nav>
        {/* will use links & routes instead of href later */}
        <a href="#home">Home</a>
        <a href="#services">Services</a>
        <a href="#about">About</a>
        <a href="#contact">
          <Button>Contact Us</Button>
        </a>
      </Nav>
    </Headers>
  );
};

export default Header;
