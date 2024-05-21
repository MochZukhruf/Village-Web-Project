import React from "react";
import { Hero } from "./pages/main/Hero";
import { BtnBody } from "./pages/main/BtnBody";
import { Body } from "./pages/main/Body";
import { Media } from "./pages/main/Media";
import { BodyFooter } from "./pages/main/BodyFooter";

export const Home = () => {
  return (
    <div className="App">
      <Hero />
      <BtnBody />
      <Body />
      <Media />
      <BodyFooter />
    </div>
  );
};
