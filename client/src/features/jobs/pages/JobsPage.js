import React, { useState } from "react";
import { Stack, Box, Divider } from "@mui/material";
import Header from "../../../components/Header.jsx";
import Search from "../../../components/Search";
import JobsList from "../components/JobsList.js";
import JobDetail from "../components/JobDetail.js";

const JobsPage = () => {
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

export default JobsPage;
