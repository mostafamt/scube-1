import React from "react";
import Profile from "../Profile/Profile";
import useStore from "../Store/store";
import Home from "./Home";

export default function HomePage() {
  const isLoggedIn = useStore((state) => state.isLoggedIn);
  return <>{!isLoggedIn ? <Home /> : <Home />}</>;
}
