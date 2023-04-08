import React from "react";
import styled from "styled-components";
import TypingTextEffect from "../Effects/TypingTextEffect";
import Button from "../Components/Button";

const TITLE = "Dr. Sample";
const TEXT =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendisducimus nemo alias omnis repellendus explicabo aliquam veritatis expedita cum tempore, laborum obcaecati perferendis sunt accusantiumquos blanditiis voluptatem, nostrum delectus.";

const HeroSection = () => {
  return (
    <ImageContainer>
      <HeroTextContainer>
        <HeroTextTitle>{TITLE}</HeroTextTitle>
        <HeroText>
          <TypingTextEffect text={TEXT} />
        </HeroText>
        <Button buttonText="Try it now!" />
      </HeroTextContainer>
      <Image src="https://www.signfix.com.au/wp-content/uploads/2017/09/placeholder-600x400.png" />
    </ImageContainer>
  );
};

const ImageContainer = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;

  @media (max-width: 800px) {
    height: 100%;
  }
`;

const HeroTextContainer = styled.div`
  z-index: 1;
  position: absolute;
  top: 30%;
  left: 10%;
`;

const HeroTextTitle = styled.p`
  font-size: 4rem;

  @media (max-width: 800px) {
    font-size: 3rem;
  } ;
`;

const HeroText = styled.p`
  font-size: 1.5rem;
  max-width: 35rem;

  @media (max-width: 800px) {
    font-size: 1.2rem;
    max-width: 70%;
  } ;
`;

export default HeroSection;
