import { Button, Grid, Typography } from "@mui/material";
import zIndex from "@mui/material/styles/zIndex";
import { Box } from "@mui/system";
import React from "react";
import { OverlayCard } from "./OverlayCard";

export const GetStartedComponent = () => {
  return (
    <Box
      sx={{
        // border: "5px solid red",
        mt: "30px",
        bgcolor: "#DEF0FF",
        // height: { xs: "calc(100%)", md: "content-fit" },
        p: "10px",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
      }}>
      <Box
        sx={{
          flex: "1",
          // border: "1px solid black",
        }}>
        <Typography
          sx={{
            p: "40px 80px 30px 80px",
            fontFamily: "Poppins",
            fontStyle: "italic",
            fontSize: { xs: "24px", sm: "32px", md: "36px", lg: "44px" },

            lineHeight: "50px",
            fontWeight: 500,
          }}>
          create an account and find the job you want
        </Typography>
        <Typography
          sx={{
            opacity: 0.6,
            p: "0 60px",
            fontSize: "18px",
            lineHeight: "24px",
          }}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime odit
          earum atque neque rerum voluptas, odio dolores recusandae! Lorem ipsum
          dolor sit amet.
        </Typography>
        <Button
          variant="contained"
          sx={{
            background: "#4d99b6",
            borderRadius: "44px",
            color: "#000000",
            fontStyle: "italic",
            fontWeight: 500,
            fontFamily: "Poppins",
            fontSize: "18px",
            height: "36px",
            lineHeight: "24px",
            m: "30px 100px",
            textTransform: "capitalize",
          }}>
          Get Started
        </Button>
      </Box>
      <Box
        sx={{
          flex: "1",
          alignContent: "center",
          justify: "center",
          ml: { xs: 1, sm: 16 },
          mt: 4,
          // border: "1px solid black",
        }}>
        <img
          width="380px"
          alt="get started  "
          src={"images/girl.png"}
          sx={{
            ml: "100px",
            // position: "absolute",
            // zIndex: 1,
          }}
        />
        <Box
          sx={{
            position: "relative",
            // zIndex: 1,
            bottom: 100,
            left: { xs: -30, md: -70 },
          }}>
          <OverlayCard photoUrl="Abelo" title="Becky Becker" date="Designer" />
        </Box>
      </Box>
    </Box>
  );
};

export default GetStartedComponent;
