import React from "react";
import HomePageComponent from "../components/homepage_components/homepage/HomePageComponent.jsx";
import { CvUploadComponent } from "../components/homepage_components/cv_upload/CvUploadComponent.jsx";
import GetStartedComponent from "../components/homepage_components/get_started/GetStartedComponent.jsx";
import PopularJobComponent from "../components/homepage_components/popular_jobs/PopularJobComponent.jsx";
import { AboutUsComponent } from "../components/homepage_components/about_us/AboutUsComponent.jsx";
import { Footer } from "../components/Footer.jsx";
import Header from "../components/Header.jsx";
import { Box } from "@mui/material";

const HomePage = () => {
  return (
    <Box>
      <Header />
      <HomePageComponent />
      <PopularJobComponent />
      <GetStartedComponent />
      <CvUploadComponent />
      <AboutUsComponent />
      <Footer />
    </Box>
  );
};

export default HomePage;
