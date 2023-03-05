import React from "react";
import JobCard from "./card";
import popular_jobs from "./jobList";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";

import { Box, Typography, Stack } from "@mui/material";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import useStyle from "./Style";
const PopularPageComponent = () => {
  const handleClick = (size) => {
    document.getElementById("job-container").scrollBy(size, 0);
  };
  return (
    <Box
      sx={{
        p: "4px",
        padding: "50px 0 50px",
        position: "relative",
      }}
    >
      <Typography variant="subtitle1" sx={useStyle.title}>
        High Demand Jobs
      </Typography>
      <Typography variant="subtitle1" sx={useStyle.title}>
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
              width: "fit-content",
              height: "fit-content",
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
