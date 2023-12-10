"use client";
import React from "react";
import { Input } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import TokenInput from "../components/TokenInput";
import { Box, Center, NumberInput, NumberInputField } from "@chakra-ui/react";

const SendStreams = () => {
  return (
    <div className="bg-black h-screen overflow-auto">
      <Navbar />
      <div className="h-5/6">
        <div className="text-white flex justify-center items-center h-full gap-32">
          <Box
            width="xl"
            borderRadius="2xl"
            p={10}
            className="flex-col flex justify-between bg-zinc-900"
          >
            <div className="text-2xl font-bold">Wrap</div>

            <TokenInput />
            <TokenInput />
          </Box>
          <Box
            width="xl"
            borderRadius="2xl"
            p={10}
            className="flex-col flex justify-between bg-zinc-900"
          >
            <div className="text-2xl font-bold">UnWrap</div>

            <TokenInput />
            <TokenInput />
          </Box>
        </div>
      </div>
    </div>
  );
};

export default SendStreams;
