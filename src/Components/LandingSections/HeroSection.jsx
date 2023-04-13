import React from "react";
import styled from "styled-components";
import TypingTextEffect from "../../Utilities/TypingTextEffect";
import Button from "../Button";
import SectionDecoration from "../SectionDecoration";

const TITLE = "Dr. Sample";
const TEXT =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendisducimus nemo alias omnis repellendus explicabo aliquam veritatis expedita cum tempore, laborum obcaecati perferendis sunt accusantiumquos blanditiis voluptatem, nostrum delectus.";

const HeroSection = () => {
  return (
    <ImageContainer>
      <SectionDecoration left={0} />
      <HeroTextContainer>
        <HeroTextTitle>{TITLE}</HeroTextTitle>
        <HeroText>
          <TypingTextEffect text={TEXT} />
        </HeroText>
        <Button buttonText="Try it now!" />
      </HeroTextContainer>
    </ImageContainer>
  );
};

const ImageContainer = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

const Image = styled.img`
  ${(props) => (props.aspectRatio >= 1 ? { width: "100%" } : "")}
  ${(props) => (props.aspectRatio < 1 ? { height: "100%" } : "")}
`;

const HeroTextContainer = styled.div`
  z-index: 1;
  position: absolute;
  top: 15%;
  left: 10%;
`;

const HeroTextTitle = styled.p`
  font-size: 56px;
  font-weight: 700;
  line-height: 62px;
  color: white;
  @media (max-width: 800px) {
    font-size: 3rem;
  } ;
`;

const HeroText = styled.p`
  font-size: 24px;
  font-weight: 600;
  line-height: 40px;
  max-width: 35rem;
  color: white;

  @media (max-width: 800px) {
    font-size: 1.2rem;
    max-width: 70%;
  } ;
`;

export default HeroSection;
