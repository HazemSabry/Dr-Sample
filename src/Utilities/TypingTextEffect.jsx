import React, { useState, useEffect } from "react";

const TIMEDELAY = 30;

const TypingTextEffect = ({ text }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [textArray, setTextArray] = useState([]);

  useEffect(() => {
    setTextArray(text.split(""));
  }, [text]);

  useEffect(() => {
    let i = -1;
    const intervalId = setInterval(() => {
      if (i + 2 === textArray.length) {
        clearInterval(intervalId);
      }
      setDisplayedText((prevDisplayedText) => prevDisplayedText + textArray[i]);
      i++;
    }, TIMEDELAY);

    return () => clearInterval(intervalId);
  }, [textArray]);

  return <span>{displayedText}</span>;
};

export default TypingTextEffect;
