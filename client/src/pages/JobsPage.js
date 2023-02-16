import React from "react";
import ExploreComponent from "../components/Explore/ExploreComponent.jsx";
import Header from "../components/homepage_components/homepage/Header.jsx";
import { Stack } from "@mui/material";

const JobsPage = () => {
  return (
    <Stack sx={{ margin: "0px",  }}>
      <Header />
      <ExploreComponent />
    </Stack>
  );
};

export default JobsPage;
