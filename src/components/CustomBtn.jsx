import React from "react";
import { Button } from "@chakra-ui/react";

export const CustomBtn = ({
  childComp,
  bg,
  color,
  text,
  border,
  width,
  height,
  handleClick,
  loading,
  type,
  disabled,
  p,
  boxShadow,
}) => {
  return (
    <Button
      leftIcon={childComp}
      // width="100%"
      color={color || "white"}
      bg={bg || "hsl(234, 29%, 20%)"}
      borderRadius={"7px"}
      p={p || "15px 30px"}
      boxShadow={boxShadow}
      height={height}
      width={width}
      border={border || "1px solid #3C7B79"}
      type={type}
      _hover={{
        bg: bg || "blue.800",
      }}
      onClick={handleClick}
      isLoading={loading}
      isDisabled={disabled}
    >
      {text}
    </Button>
  );
};
