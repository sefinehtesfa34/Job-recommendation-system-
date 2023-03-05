import React, { useState, useEffect } from "react";
import { Stack, Box, Typography } from "@mui/material";
import JobCard from "./JobCard.js";

const JobsList = ({ selectedJob, setselectedJob }) => {
  const [recommendedJobs, setrecommendedJobs] = useState(null);

  useEffect(() => {
    if (localStorage.getItem("jobs")) {
      const data = localStorage.getItem("jobs");
      setrecommendedJobs(JSON.parse(data));
    }
    return () => {};
  }, [localStorage.getItem("jobs")]);

  return (
    <Box
      className="jobslist-container"
      sx={{
        width: "50vw",
        height: {
          lg: `calc(100vh - 280px)`,
        },
        overflow: "auto",
      }}
    >
      <Typography
        sx={{
          fontSize: "24px",
          color: "#1e5f78",
          opacity: "1",
          fontWeight: "bold",
          pl: "20px",
        }}
      >
        Recommended Jobs
      </Typography>

      <Stack sx={{ gap: "30px", mt: "30px", p: "0 20px" }}>
        {recommendedJobs?.map((job, index) => {
          return (
            <JobCard
              selectedJob={selectedJob}
              setselectedJob={setselectedJob}
              key={index}
              job={job}
            />
          );
        })}
      </Stack>
    </Box>
  );
};

export default JobsList;
