import { Box, Typography } from "@mui/material";
import React from "react";
import InfoCard from "./InfoCard";
import UploadCvCard from "./UploadCvCard";

export const CvUploadComponent = () => {
  return (
    <Box
      sx={{
        mt: "30px",
        display: "flex",
        p: { xs: "30px", sm: "30px", md: "50px 70px" },

        flexDirection: { xs: "column", md: "row" },
        gap: "40px",
      }}
    >
      <Box
        sx={{
          position: "relative",
          flex: { xs: 4, lg: 6 },
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            position: "relative",
          }}
        >
          <UploadCvCard />
          <InfoCard />
        </Box>
      </Box>
      <Box
        sx={{
          flex: 6,
          alignContent: "center",
          //   border: "1px solid black",
          m: { xs: "50px auto 30px", md: "0" },
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
          Finding A Job Never <br />
          Been So Easy Before
        </Typography>
        <Typography
          sx={{
            fontFamily: "Poppins",
            fontWeight: 400,
            fontSize: "20px",
            lineHeight: "24px",
            opacity: 0.8,
            p: "8px 0",
          }}
        >
          We provide you the flexiblitity in your hands so
        </Typography>
        <Typography
          sx={{
            fontFamily: "Poppins",
            fontWeight: 400,
            fontSize: "20px",
            opacity: 0.8,
          }}
        >
          you can manage everything so easily now.
        </Typography>

        <Typography
          sx={{
            fontFamily: "Poppins",
            fontStyle: "italic",
            fontWeight: 500,
            fontSize: "32px",
            mt: "12px",
          }}
        >
          01. Upload your CV
        </Typography>
        <Typography
          sx={{
            fontFamily: "Poppins",
            fontWeight: 400,
            fontSize: "20px",
            opacity: 0.8,
            p: "8px 0",
          }}
        >
          you can upload your resume or CV directly from
        </Typography>
        <Typography
          sx={{
            fontFamily: "Poppins",
            fontWeight: 400,
            fontSize: "20px",
            opacity: 0.8,
          }}
        >
          our website and soon find the best jobs
        </Typography>

        <Typography
          sx={{
            fontFamily: "Poppins",
            fontStyle: "italic",
            fontWeight: 500,
            fontSize: "32px",
            mt: "12px",
          }}
        >
          02. Scheduling Interview
        </Typography>
        <Typography
          sx={{
            fontFamily: "Poppins",
            fontWeight: 400,
            fontSize: { xs: "20px", lg: "20px" },

            opacity: 0.8,
            p: "8px 0",
          }}
        >
          You can schedule the interview. But the recruiter
        </Typography>
        <Typography
          sx={{
            fontFamily: "Poppins",
            fontWeight: 400,
            fontSize: { xs: "20px", lg: "20px" },
            opacity: 0.8,
          }}
        >
          have to review your re-schedule
        </Typography>
      </Box>
    </Box>
  );
};
