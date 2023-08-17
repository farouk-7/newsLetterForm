import React from "react";
import {
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
// import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const formColor = "hsl(235, 18%, 26%)";
const fontSize = "18px";
const fontWeight ="semibold"

export const FormInput = ({
  label,
  type,
  name,
  value,
  fieldRef,
  handleChange,
  handleKeyDown = () => null,
  handleBlur = () => null,
  height,
  disabled,
  backgroundColor,
  placeholder,
}) => {
  return (
    <FormControl mb="20px" ref={fieldRef}>
      <FormLabel color={formColor} fontSize={fontSize} fontWeight={fontWeight}>
        {label}
      </FormLabel>
      <Input
        type={type}
        h="48px"
        name={name}
        value={value}
        onChange={handleChange}
        height={height}
        isDisabled={disabled}
        onKeyDown={handleKeyDown}
        onBlur={handleBlur}
        placeholder={placeholder}
        backgroundColor={backgroundColor}
      />
    </FormControl>
  );
};

export const CustomInputGroup = ({
  label,
  type,
  name,
  value,
  handleChange,
  height,
  backgroundColor,
  placeholder,
}) => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  return (
    // <Box width={"100%"}>
    <FormControl width="100%" mb="10px">
      <FormLabel width={"100%"} color="#000000">
        {label}
      </FormLabel>
      <InputGroup size="md">
        <Input
          type={show ? "text" : type}
          h="48px"
          name={name}
          value={value}
          onChange={handleChange}
          // height={height}
          placeholder={placeholder}
          backgroundColor={backgroundColor}
        />
        {/* <InputRightElement width="4.5rem">
          {show ? (
            <AiOutlineEye onClick={handleClick} />
          ) : (
            <AiOutlineEyeInvisible onClick={handleClick} />
          )}
        </InputRightElement> */}
      </InputGroup>
    </FormControl>
    // </Box>
  );
};
