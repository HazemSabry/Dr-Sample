import React, { useState, useEffect } from "react";

let currentChar = 0;

const TypingTextEffect = ({ text }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentChar < text.length) {
        setDisplayedText(displayedText + text.charAt(currentChar));
        currentChar++;
      } else {
        clearInterval(intervalId);
      }
    }, 100); // time delay between each character added to the displayed text
    return () => clearInterval(intervalId);
  }, [text, displayedText]);

  return <span>{displayedText}</span>;
};

export default TypingTextEffect;
