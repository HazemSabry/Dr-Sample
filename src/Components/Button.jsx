import React from "react";
import { Button } from "@mantine/core";

const TryItButton = ({ buttonText }) => {
  return (
    <Button
      sx={(theme) => ({
        backgroundImage: "#228be6)",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        padding: "15px 28px",
        gap: "10px",
        width: "150px",
        height: "54px",
        borderRadius: "2rem",
        fontSize: "1.2rem",
        "&:not([data-disabled]):hover": {
          backgroundColor: theme.fn.darken("#60a4e0", 0.1),
        },
      })}
    >
      {buttonText}
    </Button>
  );
};

export default TryItButton;
