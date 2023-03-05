import React, { useState, useEffect } from "react";
import { Stack, Box, Divider } from "@mui/material";
import Header from "../../../components/homepage_components/homepage/Header.jsx";
import Search from "../../../components/Search";
import JobsList from "../components/JobsList.js";
import JobDetail from "../components/JobDetail.js";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getRecommendedJobs } from "../actions/jobs.js";

const RecommendedJobsPage = () => {
  const { id } = useParams();
  const { loading, success, jobs } = useSelector((state) => state.jobs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRecommendedJobs(id));
    return () => {};
  }, [id]);

  const [selectedJob, setselectedJob] = useState(null);
  return (
    <Stack sx={{ height: "100vh" }}>
      <Header />
      <Stack
        sx={{
          margin: "50px",
        }}
      >
        <Box
          sx={{
            margin: "auto",
          }}
        >
          <Search />
        </Box>
        <Divider />
        <Stack
          sx={{
            flexDirection: { sm: "column", md: "row" },
            justifyContent: "space-between",
            gap: "30px",
            padding: "30px",
          }}
        >
          <JobsList selectedJob={selectedJob} setselectedJob={setselectedJob} />
          <JobDetail
            selectedJob={selectedJob}
            setselectedJob={setselectedJob}
          />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default RecommendedJobsPage;
