"use client";
import React from "react";
import { useState } from "react";
import { Box, Input, Button } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import { useAccount } from "wagmi";
// import { useWalletClient } from "wagmi";
// import { createStream, signAndSend } from "../components/stuff";

const SendStreams = () => {
  // const { walletClient } = useWalletClient();
  const { address, isConnecting, isDisconnected } = useAccount();
  const [receiverAddress, setReceiverAddress] = useState<string>("");
  const [amount, setAmount] = useState<number>(0);
  const [chain, setChain] = useState<string>("");
  console.log(amount);
  const chainOptions = ["Arbritum", "Optimism", "Mantal", "Base"];
  const chainOptionsMap = chainOptions.map((chain, index) => {
    return (
      <MenuItem bg={"#18181B"} key={index} onClick={() => handleSelect(chain)}>
        {chain}
      </MenuItem>
    );
  });
  function handleSelect(chain: string): void {
    setChain(chain);
  }
  // console.log("wallet created: ", walletClient.address);
  console.log("address: ", address);
  // function handleSubmit() {
  //   signAndSend(walletClient, createStream(address, receiverAddress, amount));
  // }

  return (
    <div className="bg-black h-screen overflow-auto">
      <Navbar />
      <div className="h-5/6">
        <div className="text-white flex justify-center items-center h-full gap-32">
          <Box
            width="xl"
            borderRadius="2xl"
            p={10}
            className="h-4/5 flex-col flex justify-between bg-zinc-900"
          >
            <div className="text-3xl font-semibold">Send Streams</div>

            <div className="w-full">
              <div className="mb-12">
                <div className="text-lg font-medium font-sans mb-2">
                  Receiver Address:
                </div>
                <Input
                  size="lg"
                  placeholder="0x..."
                  value={receiverAddress}
                  onChange={(e) => setReceiverAddress(e.target.value)}
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="mb-8">
                  <div className="text-lg font-medium font-sans mb-2">
                    Amount / Sec:
                  </div>
                  <Input
                    width="auto"
                    size="lg"
                    placeholder="0.0"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                  />
                </div>
                <div className="mt-1">
                  <Menu>
                    <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                      {chain ? chain : "Chains"}
                    </MenuButton>
                    <MenuList bg={"#18181B"}>{chainOptionsMap}</MenuList>
                  </Menu>
                </div>
              </div>
            </div>
            <Button borderRadius="3xl" size={"lg"}>
              Send Stream
            </Button>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default SendStreams;
