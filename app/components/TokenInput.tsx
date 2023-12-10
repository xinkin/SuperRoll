import React from "react";
import { Box, Center, NumberInput, NumberInputField } from "@chakra-ui/react";
import Token from "./Token";

const TokenInput = () => {
  return (
    <div>
      <Box
        borderRadius="xl"
        display="flex"
        // bg="#042c3"
        width="100%"
        p="4"
        height="40%"
      >
        <Center>
          <Token />
        </Center>
        <NumberInput defaultValue="0.0" size="lg" marginLeft="auto">
          <NumberInputField />
        </NumberInput>
      </Box>
    </div>
  );
};

export default TokenInput;
