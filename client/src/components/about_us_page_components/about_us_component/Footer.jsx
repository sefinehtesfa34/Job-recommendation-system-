import { Box, Typography } from "@mui/material";
import React from "react";

export const Footer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-around",
        bgcolor: "#707C90",
        color: "white",
      }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          // border: ".3px solid red ",
          mt: "10px",
          flexDirection: "column",
          width: 100,
          height: 100,
          //   bgcolor: "red",
        }}>
        <Typography sx={{ fontWeight: 500, fontSize: "16px" }}>
          About
        </Typography>
        <Typography sx={{ fontSize: "12px", p: "6px 0" }}>
          Privacy Policy
        </Typography>
        <Typography sx={{ fontSize: "12px" }}>Terms of Services</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          // border: ".3px solid red ",
          mt: "10px",
          flexDirection: "column",
          width: 100,
          height: 100,
          //   bgcolor: "red",
        }}>
        <Typography
          sx={{
            justifyContent: "space-around",
            fontWeight: 500,
            fontSize: "16px",
          }}>
          Support
        </Typography>
        <Typography sx={{ fontSize: "12px", p: "6px 0" }}>
          Help and Support
        </Typography>
        <Typography sx={{ fontSize: "12px" }}>Trust and safety</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          // border: ".3px solid red ",
          mt: "10px",
          flexDirection: "column",
          width: 100,
          height: 100,
          //   bgcolor: "red",
        }}>
        <Typography
          sx={{
            justifyContent: "space-around",
            fontWeight: 500,
            fontSize: "16px",
          }}>
          More
        </Typography>
        <Typography sx={{ fontSize: "12px", p: "6px 0" }}>
          Jobfit's dream
        </Typography>
        <Typography sx={{ fontSize: "12px" }}>Jobfit's guides</Typography>
      </Box>
    </Box>
  );
};
