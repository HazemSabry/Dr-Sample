import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import ChatSectionData from "../../Data/ChatSectionData";
import ShuffledArray from "../../Utilities/ShuffledArray";
import Message from "../Message";
import WaitingMassage from "../WaitingMassage";
import SectionDecoration from "../SectionDecoration";

const TIMEDELAY = 10;
const USERAVATAR =
  "https://e7.pngegg.com/pngimages/778/849/png-clipart-computer-icons-user-login-avatar-small-icons-angle-heroes-thumbnail.png";
const BOTAVATAR =
  "https://media.istockphoto.com/id/1250000899/vector/chat-bot-robot-avatar-in-circle-round-shape-isolated-on-white-background-stock-vector.jpg?s=170667a&w=0&k=20&c=mBC-3kaZ9ZeGVA8Oo-O3S17sh-gzAow4dL-4cACP57M=";

const Conversation = ShuffledArray(ChatSectionData);
const messageList = [];

const ChatSection = () => {
  const [messages, setMessages] = useState([]);
  const [waitStat, setWaitStat] = useState(false);
  const containerRef = useRef(null);
  const [isScrolledUp, setIsScrolledUp] = useState(false);
  const [isElementEntered, setIsElementEntered] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const element = (elementRef.current = document.getElementById("ChatArea"));
    const isInViewport =
      element && element.getBoundingClientRect().top < window.innerHeight;
    setIsElementEntered(isInViewport);

    window.addEventListener("scroll", () => {
      const isInViewport =
        element && element.getBoundingClientRect().top < window.innerHeight;

      setIsElementEntered(isInViewport);
    });
  }, []);

  const handleScroll = () => {
    const container = containerRef.current;
    setIsScrolledUp(container.scrollTop > 200);
  };

  useEffect(() => {
    const container = containerRef.current;
    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, [containerRef]);

  useEffect(() => {
    const container = containerRef.current;
    if (!isScrolledUp) {
      if ("scrollTo" in container) {
        container.scrollTo({
          top: container.scrollHeight,
          behavior: "smooth",
        });
      } else {
        container.scrollTop = container.scrollHeight;
      }
    }
  }, [messages, waitStat]);

  useEffect(() => {
    if (isElementEntered && messageList[0] === undefined) {
      Conversation.forEach((conversation, index) => {
        const userMassage = conversation.question;
        const botMassage = conversation.answer;

        setTimeout(() => {
          messageList.push(
            <div key={index}>
              <Message
                massage={userMassage}
                avatar={USERAVATAR}
                direction={"right"}
              />
            </div>
          );
          setMessages([...messageList]);
        }, index * TIMEDELAY * 1000);

        setTimeout(() => {
          setWaitStat(true);
        }, index * TIMEDELAY * 1000 + 500);

        setTimeout(() => {
          setWaitStat(false);
        }, index * TIMEDELAY * 1000 + 2000);

        setTimeout(() => {
          messageList.push(
            <div key={index * -1 - 1}>
              <Message
                massage={botMassage}
                avatar={BOTAVATAR}
                direction={"left"}
              />
            </div>
          );
          setMessages([...messageList]);
        }, index * TIMEDELAY * 1000 + 2000); // delay each message by 2 seconds
      });
    } else {
    }
  }, [isElementEntered]);

  return (
    <SectionContainer>
      <ChatArea id="ChatArea" ref={containerRef}>
        {messages}
        <WaitingMassage avatar={BOTAVATAR} waitStat={waitStat} />
      </ChatArea>
    </SectionContainer>
  );
};

const SectionContainer = styled.div`
  height: 90vh;
  padding: 10% 10%;
  display: flex;
  justify-content: center;
`;

const ChatArea = styled.div`
  height: 100%;
  width: 50%;
  padding: 1rem;
  gap: 0.5rem;
  background-color: #1d1e23;
  border-radius: 20px;
  overflow-y: auto;
  position: relative;
  z-index: 1;

  @media (max-width: 800px) {
    padding: 0.7rem;
  }
`;

export default ChatSection;
