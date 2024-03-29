import React from "react";
import styled from "styled-components";
import TestimonialCard from "../components/TestimonialCard";
import Avatar1 from "../assets/avatar-1.jpg";
import Avatar2 from "../assets/avatar-2.jpg";
import Avatar3 from "../assets/avatar-3.jpg";
import Avatar4 from "../assets/avatar-4.jpg";

import Slider from "react-slick";
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";

const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  color: #0a0b10;
  display: inline-block;
  font-size: calc(1rem + 1.5vw);
  margin-top: 1.5rem;
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

const Carousal = styled.div`
  width: 50vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media only Screen and (max-width: 40em) {
    width: 90vw;
    .slick-slider .slick-arrow {
      display: none;
    }
  }
  .slick-slider .slick-arrow:before {
    color: #0a0b10;
    font-size: 1.5rem;
    @media only Screen and (max-width: 40em) {
      display: none;
    }
  }
  .slick-slider .slick-dots button:before {
    color: #0a0b10;
    font-size: 1.5rem;
  }
  .slick-slide.slick-active {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0;
    padding: 0;
    margin-bottom: 3rem;
  }
`;

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,

    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Section>
      <Title>Few good words about us!</Title>
      <Carousal>
        <Slider {...settings}>
          <TestimonialCard
            text="WingdinG are extremely professional, they listened my ideas, suggested changes to make it more beautiful. I'm extremely happy with their services."
            name="Jane Doe"
            image={Avatar1}
          />

          <TestimonialCard
            text="WingdinG are extremely professional, they listened my ideas, suggested changes to make it more beautiful. I'm extremely happy with their services."
            name="John Doe"
            image={Avatar2}
          />

          <TestimonialCard
            text="WingdinG are extremely professional, they listened my ideas, suggested changes to make it more beautiful. I'm extremely happy with their services."
            name="Jolly Doe"
            image={Avatar3}
          />

          <TestimonialCard
            text="WingdinG are extremely professional, they listened my ideas, suggested changes to make it more beautiful. I'm extremely happy with their services."
            name="Jimmy Doe"
            image={Avatar4}
          />
        </Slider>
      </Carousal>
    </Section>
  );
};

export default Testimonials;
