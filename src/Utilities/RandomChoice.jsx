import React from "react";

const RandomChoice = ({ array }) => {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};

export default RandomChoice;