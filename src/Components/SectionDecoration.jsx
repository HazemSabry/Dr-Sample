import React from "react";
import styled from "styled-components";
import Decor1 from "../Assets/Decor1.png";
import Decor2 from "../Assets/Decor2.png";

const SectionDecoration = ({ left, right }) => {
  return (
    <>
      {left === 0 ? (
        <ImageDecoration left={left} src={Decor1} />
      ) : right === 0 ? (
        <ImageDecoration right={right} src={Decor2} />
      ) : (
        ""
      )}
    </>
  );
};

const ImageDecoration = styled.img`
  position: absolute;
  right: ${(props) => props.right};
  left: ${(props) => props.left};
`;

export default SectionDecoration;
