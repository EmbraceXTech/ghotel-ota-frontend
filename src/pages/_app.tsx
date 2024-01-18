import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { NextUIProvider } from "@nextui-org/react";
import { Toaster } from "react-hot-toast";
import ConnectKitProviderWrapper from "@/providers/connectKit.provider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <ConnectKitProviderWrapper>
        <Component {...pageProps} />
        <Toaster />
      </ConnectKitProviderWrapper>
    </NextUIProvider>
  );
}
