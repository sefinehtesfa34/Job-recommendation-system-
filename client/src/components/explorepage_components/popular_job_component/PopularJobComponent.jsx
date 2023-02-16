import React, { useRef } from "react";
import JobCard from "./card";
import popular_jobs from "../../../data/jobList";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import ArrowRightAltOutlinedIcon from "@mui/icons-material/ArrowRightAltOutlined";
import { Box, Typography, Stack } from "@mui/material";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
const PopularPageComponent = () => {
  const handleClick = (size) => {
    document.getElementById("job-container").scrollBy(size, 0);
  };
  return (
    <Box
      className="job-container"
      sx={{
        p: "4px",
        padding: "50px 0 100px",
        position: "relative",
      }}
    >
      <Typography
        variant="subtitle1"
        sx={{
          fonFamily: "Poppins",
          fontStyle: "normal",
          fontWeight: 650,
          fontSize: "40px",
          textAlign: "center",
        }}
      >
        High Demand Jobs
      </Typography>
      <Typography
        variant="subtitle1"
        sx={{
          fonFamily: "Poppins",
          fontStyle: "normal",
          fontWeight: 550,
          fontSize: "40px",
          textAlign: "center",
        }}
      >
        Categories Fractured
      </Typography>
      <Box
        id="job-container"
        className="job-container"
        sx={{
          alignItems: "left",
          display: "flex",
          overflowX: "scroll",
        }}
      >
        {popular_jobs.map((job, index) => (
          <Box
            key={index}
            sx={{
              width: {
                sm: "fit-content",
              },
              // bgcolor: "red",
              height: {
                sm: "fit-content",
              },
              m: 3,
              WebkitFlexShrink: 0,
            }}
          >
            <JobCard
              Icon={job.Icon}
              title={job.title}
              description={job.description}
              color={job.color}
            />
          </Box>
        ))}
      </Box>
      <Stack
        sx={{
          flexDirection: "row",
          justifyContent: "space-between",
          padding: "0px 30px",
        }}
      >
        <ArrowBackOutlinedIcon
          sx={{
            fontSize: "3rem",
            "&:hover": {
              cursor: "pointer",
            },
          }}
          onClick={() => handleClick(-200)}
        />
        <ArrowForwardOutlinedIcon
          onClick={() => handleClick(200)}
          sx={{
            fontSize: "3rem",
            "&:hover": {
              cursor: "pointer",
            },
          }}
        />
      </Stack>
    </Box>
  );
};

export default PopularPageComponent;
