import { Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import JobCard from "./JobCard.jsx";
import SearchBox from "./SearchBox.jsx";
import popular_jobs from "../../../data/jobList";

export const ExploreComponent = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          border: "1px solid red",
        }}
      >
        <Box
          flex={1}
          sx={{
            border: "1px solid red",
            display: "flex",
            flexDirection: "column",
            // p: "10px 50px",
            gap: "40px",
          }}
        >
          <SearchBox />
          <Typography sx={{ fontSize: "40px" }}>
            {popular_jobs.length} jobs found for your search{" "}
          </Typography>
          <Divider sx={{ height: "15px", bgcolor: "grey" }} />
          {popular_jobs.map((job) => {
            return (
              <JobCard
                key={job.jobId}
                title={job.jobTitle}
                owner={job.owner}
                description={job.description}
                date={job.timestamp}
              />
            );
          })}
        </Box>
        <Box flex={1} sx={{ border: "2px solid green" }}>
          <Typography>text1</Typography>
        </Box>
      </Box>
    </>
  );
};

export default ExploreComponent;
