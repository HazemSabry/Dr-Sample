import React from "react";
import styled from "styled-components";
import ChatSectionData from "../Data/ChatSectionData";
import ShuffledArray from "../Utilities/ShuffledArray";

const ChatSection = () => {
  const Conversation = ShuffledArray(ChatSectionData);

  return (
    <SectionContainer>
      <ChatArea>{Conversation.map((conversation) => {})}</ChatArea>
    </SectionContainer>
  );
};

const SectionContainer = styled.div`
  height: 90vh;
  padding: 10% 10%;
`;

const ChatArea = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  background-color: rgb(100, 100, 100);
  border-radius: 20px;
`;

export default ChatSection;
