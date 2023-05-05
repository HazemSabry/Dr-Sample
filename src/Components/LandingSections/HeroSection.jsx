import React from "react";
import styled from "styled-components";
import heroImage from "../../Assets/hero.avif";
import acceptMarkImage from "../../Assets/mark.png";
import Button from "../Button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <Hero>
      <HeroTextContainer>
        <HeroTextTitle>FREE Chat GPT 4</HeroTextTitle>
        <HeroText>
          Welcome to Dr. Simple, your ultimate chatbot solution powered by
          ChatGPT technology. With the power of AI at your fingertips, Dr Simple
          transforms the way you communicate by simplifying even the most
          complex task, Say goodbye to mundane conversations and hello to your
          new personal assistant - Dr Sample.
        </HeroText>
        <BefitTextContainer>
          <AcceptMark src={acceptMarkImage} />
          <BefitText>
            <Boldtext>Open AI API based</Boldtext>-build type safe applications,
            all component and hooks export types
          </BefitText>
        </BefitTextContainer>
        <BefitTextContainer>
          <AcceptMark src={acceptMarkImage} />
          <BefitText>
            <Boldtext>Free and secure</Boldtext>-you can use dr simple free as
            much you like
          </BefitText>
        </BefitTextContainer>
        <BefitTextContainer>
          <AcceptMark src={acceptMarkImage} />
          <BefitText>
            <Boldtext>No Hidden Profit</Boldtext>-Dr simple will not sell your
            data to third party company
          </BefitText>
        </BefitTextContainer>
        <Link to="/Chat" style={{ textDecoration: "none" }}>
          <Button buttonText="Get Started" />
        </Link>
      </HeroTextContainer>
      <Image src={heroImage} />
    </Hero>
  );
};

const Hero = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5rem;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  flex-wrap: wrap;
`;

const HeroTextContainer = styled.div`
  max-width: 600px;
`;

const HeroTextTitle = styled.div`
  font-size: 56px;
  font-weight: 800;
  line-height: 62px;
  color: black;
  padding: 1rem;
  background-color: #e7f5fe;
  width: fit-content;
  @media (max-width: 800px) {
    font-size: 3rem;
  }
`;

const HeroText = styled.p`
  font-size: 18px;
  font-weight: 600;
  line-height: 30px;
  max-width: 35rem;
  color: #9093a4;

  @media (max-width: 800px) {
    font-size: 1.2rem;
    max-width: 70%;
  }
`;

const BefitTextContainer = styled.p`
  display: flex;
  gap: 1rem;
  font-size: 18px;
`;
const BefitText = styled.div``;

const Boldtext = styled.span`
  font-size: inherit;
  font-weight: 700;
`;

const AcceptMark = styled.img`
  height: 30px;
`;

const Image = styled.img`
  height: 40rem;
`;

export default HeroSection;
