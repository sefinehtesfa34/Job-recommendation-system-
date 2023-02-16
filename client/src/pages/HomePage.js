import React from "react";
import HomePageComponent from "../components/homepage_components/homepage/HomePageComponent.jsx";
import { AboutUsPage } from "./AboutUsPage.js";
import ExplorePage from "./ExplorePage.js";

const HomePage = () => {
  return (
    <div>
      <HomePageComponent />
      <ExplorePage />
      <AboutUsPage />
    </div>
  );
};

export default HomePage;
