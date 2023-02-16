import React from "react";
import { Box, Button, Typography } from "@mui/material";
import Header from "./Header";
import Search from "../../../components/Search.jsx";
import HomeImage from "../../../assets/job2.png";
import JobLogo from "../../../assets/jobfit-logo.png";
import { useMediaQuery, useTheme, Stack } from "@mui/material";

const HomePageComponent = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box
      sx={{
        height: "60vh",
        background: "#5b6a82",
        dispaly: "flex",
        flexDirection: "column",
        gap: "50px !important",
      }}
    >
      <Header />
      <Stack
        style={{ height: "calc(100% - 100px)", padding: "20px" }}
        sx={{
          mt: "30px",
          p: "10px",
          color: "white",
          display: "flex",
          justifyContent: "center",

          // justifyContent: { md: "column", lg: "row" },
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        {/* get dream job section start */}
        <Box
          sx={{
            flex: "1",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            gap: "30px",
            margin: "auto",
          }}
        >
          <Stack sx={{ gap: "30px" }}>
            <Typography sx={{ fontSize: "50px" }}>
              Get Your
              <Typography sx={{ fontSize: "50px" }}>Dream Jobs</Typography>
              <img
                style={{ width: "50px", paddingTop: "10px" }}
                src={JobLogo}
                alt="job logo"
              />
              Here
            </Typography>
            <Search />
          </Stack>
        </Box>
        {/* get dream job section end */}

        {isMatch ? (
          ""
        ) : (
          <Box sx={{ flex: "1" }}>
            <img width="100%" height="100%" alt="home image" src={HomeImage} />
          </Box>
        )}
      </Stack>
    </Box>
  );
};

export default HomePageComponent;
