import { Box, Typography } from "@mui/material";
import React from "react";
import { Footer } from "./Footer";

export const AboutUsComponent = () => {
  return (
    <>
      <Box
        sx={{
          // border: ".5px solid red",
          mt: "30px",
          bgcolor: "#DEF0FF",
          p: "10px",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
        }}>
        <Box
          sx={{
            flex: "1",
            //   border: "1px solid red",
            display: "flex",
            flexDirection: "column",
            p: "20px 40px",
            justifyContent: "center",
          }}>
          <Typography
            sx={{
              fontSize: { xs: "18px", sm: "24px", md: "28px", lg: "30px" },
              fontWeight: 500,
            }}>
            What Jobseekers are saying
          </Typography>
          <Typography
            sx={{
              opacity: 0.75,
              fontSize: "16px",
              p: "20px 0",
            }}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime
            odit earum atque neque rerum voluptas, odio dolores recusandae!
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit. lorem5 Lorem
            ipsum dolor sit.
          </Typography>
          <Box>
            <Typography> Becky Becker</Typography>
            <Typography> Designer at Mchigan</Typography>
          </Box>
        </Box>
        <Box
          sx={{
            flex: "1",
            alignContent: "center",
            justify: "center",
            ml: { xs: 1, sm: 16 },
            mt: 4,
            //   border: "1px solid black",
          }}>
          <img
            width="200px"
            height="200px"
            alt="get started  "
            src={"images/Ellipse 7.png"}
            sx={{
              ml: "100px",
              // position: "absolute",
              // zIndex: 1,
            }}
          />
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontSize: "20px",
              lineHeight: "36px",
            }}>
            Addis Ababa, Ethiopia
          </Typography>
        </Box>
      </Box>
      <Footer />
    </>
  );
};
