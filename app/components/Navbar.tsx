'use client';
import React from "react";
import { Box, Heading, Button } from "@chakra-ui/react";
import Link from "next/link";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { usePathname } from "next/navigation";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  const pathname = usePathname();

  return (
    <div>
      <Box
        display="flex"
        bg="slate.900"
        p={4}
        justifyContent="space-between"
        justifyItems="center"
      >
        <div className="ml-2">
          <div className="font-sans text-4xl font-bold text-white">
            SuperFlow
          </div>
        </div>
        <div className="flex gap-24 items-center">
          <Link href="/streams">
            <Button
              variant="unstyled"
              color={pathname == "/streams" ? "white" : "slategrey"}
              className="flex items-center p-3 hover:text-white"
              size="lg"
            >
              Streams
            </Button>
          </Link>
          <Link href="/wrapping">
            <Button
              variant="unstyled"
              color={pathname == "/wrapping" ? "white" : "slategrey"}
              className="flex items-center p-3 hover:text-white"
              size="lg"
            >
              Wrap/Unwrap
            </Button>
          </Link>
          <Link href="/map">
            <Button
              variant="unstyled"
              color={pathname == "/map" ? "white" : "slategrey"}
              className="flex items-center p-3 hover:text-white"
              size="lg"
            >
              Map
            </Button>
          </Link>
          {/* <Link href="/dashboard">
            <Button
              variant="unstyled"
              color={pathname == "/dashboard" ? "white" : "slategrey"}
              className="flex items-center p-3 hover:text-white"
              size="lg"
            >
              DashBoard
            </Button>
          </Link> */}
        </div>
        <div className="flex items-center">
          {/* <Button
            size="md"
            className="p-2 flex items-center text-black bg-white rounded-xl"
          >
            Connect Wallet
          </Button> */}
          <ConnectButton />
        </div>
      </Box>
    </div>
  );
};

export default Navbar;
