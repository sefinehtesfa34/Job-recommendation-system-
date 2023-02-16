import React from "react";
import { Stack, Box, Divider, Typography } from "@mui/material";
import jobs from "../assets/dummyobs.js";
import JobCard from "./JobCard.js";

const JobsList = ({ selectedJob, setselectedJob }) => {
  return (
    <Box sx={{ flex: 1 }}>
      <Typography
        sx={{
          fontSize: "24px",
          color: "#1e5f78",
          opacity: "1",
          fontWeight: "bold",
        }}
      >
        Recommended Jobs
      </Typography>

      <Stack sx={{ gap: "30px", mt: "30px" }}>
        {jobs.map((job, index) => {
          return <JobCard key={index} job={job} />;
        })}
      </Stack>
    </Box>
  );
};

export default JobsList;
