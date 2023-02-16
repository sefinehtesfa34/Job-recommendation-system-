import { Box, Typography } from "@mui/material";
import React from "react";
import InfoCard from "./InfoCard";
import UploadCvCard from "./UploadCvCard";

export const CvUploadComponent = () => {
  return (
    <Box
      sx={{
        // border: ".4px solid red",
        mt: "30px",
        p: "10px",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
      }}>
      <Box
        sx={{
          flex: "1",
          border: "7px solid black",
        }}>
        <div>
          <UploadCvCard style={{ zIndex: 2 }} />
          <InfoCard style={{ zIndex: 1 , b:'-100px'}} />
        </div>
        {/* <Box sx={{ border: "3px solid yellow" }}>
          <UploadCvCard />
          <InfoCard />
        </Box> */}
        {/* <Box sx={{ pb: "-1000px", border: "3px solid red" }}>
          <InfoCard />
        </Box> */}
      </Box>
      <Box
        sx={{
          flex: "1",
          alignContent: "center",
          //   border: "1px solid black",
          m: { xs: 1, sm: 8, md: "30px 120px" },
        }}>
        <Typography
          sx={{
            fontFamily: "Poppins",
            fontStyle: "italic",
            fontWeight: 500,
            fontSize: "36px",
            lineHeight: "60px",
          }}>
          The easiest way to find a job is here.
        </Typography>
        <Typography
          sx={{
            fontFamily: "Poppins",
            fontWeight: 400,
            fontSize: "20px",
            lineHeight: "24px",
            opacity: 0.8,
            p: "12px 0",
          }}>
          we will help you to easily get the job you want by following these
          steps.
        </Typography>
        <Typography
          sx={{
            fontFamily: "Poppins",
            fontWeight: 400,
            fontSize: "24px",
            lineHeight: "36px",
            p: "6px 0",
          }}>
          01. upload your cv
        </Typography>
        <Typography
          sx={{
            fontFamily: "Poppins",
            fontWeight: 400,
            fontSize: "18px",
            lineHeight: "24px",
            opacity: 0.75,
          }}>
          we will help you to easily get the job you want by following these
          steps
        </Typography>
        <Typography
          sx={{
            fontFamily: "Poppins",
            fontWeight: 400,
            fontSize: "24px",
            lineHeight: "36px",
            p: "6px 0",
          }}>
          01. upload your cv{" "}
        </Typography>
        <Typography
          sx={{
            fontFamily: "Poppins",
            fontWeight: 400,
            fontSize: "18px",
            lineHeight: "24px",
            opacity: 0.75,
          }}>
          we will help you to easily get the job you want by following these
          steps
        </Typography>
        <Typography
          sx={{
            fontFamily: "Poppins",
            fontWeight: 400,
            fontSize: "24px",
            lineHeight: "36px",
            p: "6px 0",
          }}>
          01. upload your cv{" "}
        </Typography>
        <Typography
          sx={{
            fontFamily: "Poppins",
            fontWeight: 400,
            fontSize: "18px",
            lineHeight: "24px",
            opacity: 0.75,
          }}>
          we will help you to easily get the job you want by following these
          steps
        </Typography>
      </Box>
    </Box>
  );
};
