import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

import { TRPCProvider } from "~/utils/api";

import "../styles.css";

import { useColorScheme } from "nativewind";

// This is the main layout of the app
// It wraps your pages with the providers they need
export default function RootLayout(): React.ReactElement {
  const { colorScheme } = useColorScheme();
  return (
    <TRPCProvider>
      {/*
          The Stack component displays the current page.
          It also allows you to configure your screens 
        */}
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: "#ffffff",
          },
          contentStyle: {
            backgroundColor: colorScheme === "dark" ? "#09090B" : "#FFFFFF",
          },
        }}
      />
      <StatusBar />
    </TRPCProvider>
  );
}
