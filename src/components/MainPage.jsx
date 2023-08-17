import { Box, Flex, Text, Image } from "@chakra-ui/react";
import React, { useState } from "react";
import img from "../assets/img.svg";
import { FormInput } from "./FormInput";
import { CustomBtn } from "./CustomBtn";

const MainPage = () => {
  const [email, setEmail] = useState("");
  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    if(email.includes("@",".")){
        alert("Email Successfully Submitted")
       
    }else{
        alert ("Something Wrong with Email")
        setEmail("")
    }
    e.preventDefault();
  };
  return (
    <Box bg="hsl(234, 29%, 20%)" h="100vh" w="full">
      <Flex justifyContent="center" alignContent="center" >
        <Flex
          bg="white"
          borderRadius="10px"
          mt={["20px","20px","50px"]}
          p={["20px"]}
          gap="20px"
          justifyContent="space-between"
          alignItems="center"
          flexDirection={["column-reverse","column-reverse","row"]}
        >
          <Box pl={["50px"]}>
            <Text fontSize={["40px","40px","55px"]} fontWeight="bold">
              Stay updated!
            </Text>
            <Text
              color="hsl(235, 18%, 26%)"
              maxW="400px"
              fontWeight="semibold"
              py="20px"
            >
              Join 60,000+ product managers receiving monthly update on:
            </Text>
            <ul>
              <li>Product discovery and building what matters</li>
              <li>Measuring to ensure updates are a success</li>
              <li>And much more</li>
            </ul>
            <Box my="20px" >
              <FormInput
                label={"Email Address"}
                type={"text"}
                placeholder={"email@gmail.com"}
                name="email"
                value={email}
                handleChange={handleChange}
              />
            </Box>
            <Box>
              <CustomBtn
                handleClick={handleSubmit}
                height="50px"
                text={"Suscribe to monthly newsletter"}
                width={"full"}
                disabled={!email}
              />
            </Box>
          </Box>
          <Box >
            <Image src={img} />
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default MainPage;
