// app/providers.tsx
"use client";
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { mainnet, polygon, optimism, arbitrum, base, zora } from "wagmi/chains";
//e0f0f2c1825444dd42aa463a2148e30d
import { ChakraProvider } from "@chakra-ui/react";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { lightTheme } from "@rainbow-me/rainbowkit";
import { publicProvider } from "wagmi/providers/public";
const { chains, publicClient } = configureChains(
  [mainnet, polygon, optimism, arbitrum, base, zora],
  [publicProvider()]
);
const { connectors } = getDefaultWallets({
  appName: "SuperRoll",
  projectId: "e0f0f2c1825444dd42aa463a2148e30d",
  chains,
});
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider>
      <WagmiConfig config={wagmiConfig}>
        <RainbowKitProvider
          theme={lightTheme({
            accentColor: "#EDF2F7",
            accentColorForeground: "black",
            borderRadius: "medium",
            fontStack: "system",
            overlayBlur: "small",
          })}
          chains={chains}
        >
          {children}
        </RainbowKitProvider>
      </WagmiConfig>
    </ChakraProvider>
  );
}
