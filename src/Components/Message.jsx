import React from "react";
import styled from "styled-components";
import Slide from "react-reveal";
import TypingTextEffect from "../Utilities/TypingTextEffect";

const Message = ({ massage, avatar, direction }) => {
  return (
    <Slide bottom>
      <MassageContainer
        style={
          direction === "right"
            ? { justifyContent: "end" }
            : direction === "left"
            ? { justifyContent: "start" }
            : false
        }
      >
        {direction === "right" && (
          <>
            <Text style={{ borderBottomRightRadius: "0px" }}>{massage}</Text>
            <Avatar src={avatar} />
          </>
        )}
        {direction === "left" && (
          <>
            <Avatar src={avatar} />
            <Text style={{ borderBottomLeftRadius: "0px" }}>
              <TypingTextEffect text={massage} />
            </Text>
          </>
        )}
      </MassageContainer>
    </Slide>
  );
};

const MassageContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 0.5rem;
  margin: 1rem 0.5rem;
`;

const Avatar = styled.img`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;

  @media (max-width: 800px) {
    width: 2.5rem;
    height: 2.5rem;
  }
`;

const Text = styled.sub`
  background-color: #b785f6;
  color: #fff;
  padding: 1rem;
  border-radius: 10px;
  font-size: 1rem;
  max-width: 60%;

  @media (max-width: 800px) {
    font-size: 0.7rem;
    padding: 0.7rem;
  }
`;

export default Message;
