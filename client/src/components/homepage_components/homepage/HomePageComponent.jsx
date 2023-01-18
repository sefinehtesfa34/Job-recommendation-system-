import React from "react";
import { Box, Button, Typography } from "@mui/material";
import Header from "./Header";
import Search from "./Search";
import HomeImage from "../../../assets/haile.png";

const HomePageComponent = () => {
  return (
    <Box
      sx={{
        height: { sm: "fit-content", md: "fit-content", lg: "fit-content" },
        background: "#5b6a82",
        dispaly: "flex",
        padding: "20px",
        flexDirection: "column",
        gap: "50px !important",
      }}
    >
      <Header />
      <Box
        style={{ height: "calc(100% - 100px) " }}
        sx={{
          border: "5px solid green",
          mt: "30px",
          p: "10px",
          color: "white",
          display: "flex",
          // justifyContent: { md: "column", lg: "row" },
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        {/* get dream job section start */}
        <Box sx={{ border: "2px solid white", flex: "1" }}>
          <Typography>Get Your Dream Jobs logo Here</Typography>
          <Search />
        </Box>
        {/* get dream job section end */}

        <Box sx={{ border: "2px solid yellow", flex: "1" }}>
          <img width="400px" alt="home image" src={HomeImage} />
        </Box>
      </Box>
    </Box>
  );
};

export default HomePageComponent;
