import React from "react";
import { Input } from "@chakra-ui/react";
import { Box, Center, NumberInput, NumberInputField } from "@chakra-ui/react";
import TokenInput from "./TokenInput";
import Token from "./Token";
const SendStreams = () => {
  return (
    <>
      <div className="text-white flex justify-center items-center h-full gap-32">
        <Box
          width="xl"
          borderRadius="2xl"
          p={10}
          className="h-4/6 flex-col flex justify-between bg-zinc-900"
        >
          <div className="text-2xl font-semibold">Send Streams</div>
          <div>
            <div className="w-full">
              <div className="mb-14">
                <div className="text-lg font-medium font-sans mb-2">
                  Receiver Address:
                </div>
                <Input size="lg" placeholder="0x..." />
              </div>
              <div className="flex items-center justify-between">
                <div className="text-lg font-medium font-sans">
                  Amount / Sec:
                </div>
                <Input width="auto" size="lg" placeholder="0.0" />
              </div>
            </div>
          </div>
          <div className="text-xl font-medium font-sans">Chain:</div>
        </Box>
        <Box
          width="xl"
          borderRadius="2xl"
          p={10}
          className="flex-col flex justify-between bg-zinc-900"
        >
          <div className="flex gap-7 mb-7">
            <div className="text-2xl font-bold">Wrap</div>
            <div className="text-2xl font-bold">UnWrap</div>
          </div>
          <TokenInput />
          <TokenInput />
        </Box>
      </div>
      {/* lol */}
      <div className="text-white"></div>
    </>
  );
};

export default SendStreams;
