import { Box, Typography, Stack } from "@mui/material";
import React from "react";
import Person from "../../../assets/person2.png";

export const AboutUsComponent = () => {
  return (
    <Box
      sx={{
        mt: "30px",
        bgcolor: "#DEF0FF",
        p: "50px",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
      }}
    >
      <Box
        sx={{
          flex: "1",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Poppins",
            fontStyle: "italic",
            fontWeight: 500,
            fontSize: { xs: "40px", lg: "50px" },
            lineHeight: "50px",
          }}
        >
          {" "}
          What Jobseekers are saying
        </Typography>

        <Stack sx={{ m: "20px 0" }}>
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontWeight: 400,
              fontSize: "20px",
              opacity: 0.8,
            }}
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime
            odit
          </Typography>
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontWeight: 400,
              fontSize: "20px",
              opacity: 0.8,
            }}
          >
            earum atque neque rerum voluptas, odio dolores recusandae! Lorem
            ipsum
          </Typography>
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontWeight: 400,
              fontSize: "20px",
              opacity: 0.8,
            }}
          >
            dolor sit amet. Lorem ipsum dolor sit. lorem5 Lorem ipsum dolor sit.
          </Typography>
        </Stack>

        <Box>
          <Typography> Becky Becker</Typography>
          <Typography> Designer at Mchigan</Typography>
        </Box>
      </Box>

      <Box
        sx={{
          alignContent: "center",
          justify: "center",
          width: { xs: "100%", md: "50%" },
          height: { xs: "320px", md: "400px" },
        }}
        component="img"
        src={Person}
        alt="get started  id"
      ></Box>
    </Box>
  );
};
