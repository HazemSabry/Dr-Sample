import React from "react";
import { Button } from "@mantine/core";

const TryItButton = ({ buttonText }) => {
  return (
    <Button
      sx={(theme) => ({
        backgroundColor: "#4267B2",
        color: "#fff",
        fontSize: "2rem",
        padding: "1rem",
        height: "max-content ",
        width: "max-content ",
        "&:not([data-disabled]):hover": {
          backgroundColor: theme.fn.darken("#4267B2", 0.1),
        },
      })}
    >
      {buttonText}
    </Button>
  );
};

export default TryItButton;
