"use client";
import React from "react";
import { useState } from "react";
import { Input } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { ChevronDownIcon, CheckIcon } from "@chakra-ui/icons";
import { Box, Button } from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react";

const Wrapping = () => {
  const [chain, setChain] = useState<string>("");
  const chainOptions = ["Arbritum", "Optimism", "Mantle", "Base"];
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
  const [wrapConfirm, setWrapConfirm] = useState<boolean>(false);
  const [unWrapConfirm, setUnWrapConfirm] = useState<boolean>(false);
  return (
    <div className="bg-black h-screen overflow-auto">
      <Navbar />
      <div className="h-5/6">
        <div className="text-white flex justify-center items-center h-full gap-32">
          <Box
            width="xl"
            borderRadius="2xl"
            p={10}
            className="flex-col h-1/2 flex justify-between bg-zinc-900"
          >
            <div className="flex justify-between items-center">
              <div className="text-3xl font-bold">Wrap/UnWrap</div>
              <Menu size={"sm"}>
                <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                  {chain ? chain : "Chains"}
                </MenuButton>
                <MenuList bg={"#18181B"}>{chainOptionsMap}</MenuList>
              </Menu>
            </div>
            <div>
              <div className="flex items-center justify-between mb-7">
                <Input size={"lg"} placeholder="0.0" width={"auto"} />
                {wrapConfirm ? (
                  <IconButton
                    size="lg"
                    aria-label="Confirms Wrapping"
                    color={"green.500"}
                    fontSize={"23px"}
                    icon={<CheckIcon />}
                    onClick={() => setWrapConfirm((prev) => !prev)}
                  />
                ) : (
                  <Button
                    size="lg"
                    onClick={() => setWrapConfirm((prev) => !prev)}
                  >
                    Wrap
                  </Button>
                )}
              </div>
              <div className="flex items-center justify-between">
                <Input size={"lg"} placeholder="0.0" width={"auto"} />
                {unWrapConfirm ? (
                  <IconButton
                    size="lg"
                    aria-label="Confirms Wrapping"
                    color={"green.500"}
                    fontSize={"23px"}
                    icon={<CheckIcon />}
                    onClick={() => setUnWrapConfirm((prev) => !prev)}
                  />
                ) : (
                  <Button
                    size="lg"
                    onClick={() => setUnWrapConfirm((prev) => !prev)}
                  >
                    UnWrap
                  </Button>
                )}
              </div>
            </div>
          </Box>
          {/* <Box
            width="xl"
            borderRadius="2xl"
            p={10}
            className="flex-col flex justify-between bg-zinc-900"
          >
            <div className="text-2xl font-bold">UnWrap</div>

            <TokenInput />
            <TokenInput />
          </Box> */}
        </div>
      </div>
    </div>
  );
};

export default Wrapping;
