import React from "react";
import Slide from "react-reveal";
import styled from "styled-components";

const WaitingMassage = ({ avatar, waitStat }) => {
  return (
    <Slide bottom>
      <MassageContainer
        style={waitStat ? { display: "flex" } : { display: "none" }}
      >
        <Avatar src={avatar} />
        <Text>...</Text>
      </MassageContainer>
    </Slide>
  );
};

const MassageContainer = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 1rem;
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
  border-bottom-left-radius: 0px;
  font-size: 1rem;
  max-width: 60%;

  @media (max-width: 800px) {
    font-size: 0.7rem;
    padding: 0.7rem;
  }
`;

export default WaitingMassage;
