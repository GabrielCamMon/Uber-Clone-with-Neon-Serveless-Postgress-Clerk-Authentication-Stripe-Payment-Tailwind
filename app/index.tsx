import { useAuth } from "@clerk/clerk-expo";
import { Redirect } from "expo-router";
import React, { JSX } from "react";
import "setimmediate";
import "../styles/global.css";

const Home = (): JSX.Element | null => {
  const { isLoaded, isSignedIn } = useAuth();

  if (!isLoaded) return null;

  return isSignedIn ? (
    <Redirect href="/(root)/(tabs)/home" />
  ) : (
    <Redirect href="/(auth)/welcome" />
  );
};

export default Home;
