import React from "react";

const ShuffledArray = (arr) => {
  const randomSort = () => Math.random() - 0.5;
  return arr.sort(randomSort);
};

export default ShuffledArray;
