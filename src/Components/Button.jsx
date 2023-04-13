import React from "react";
import { Button } from "@mantine/core";

const TryItButton = ({ buttonText }) => {
  return (
    <Button
      sx={(theme) => ({
        backgroundImage: "linear-gradient(to right,#9B51E0,#3081ED)",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        padding: "15px 28px",
        gap: "10px",
        width: "135px",
        height: "54px",
        fontSize: "1.2rem",
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
