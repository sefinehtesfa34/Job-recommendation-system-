import React, { useState } from "react";
import { Stack, Box, Divider } from "@mui/material";
import Header from "../../../components/homepage_components/homepage/Header.jsx";
import Search from "../../../components/homepage_components/homepage/Search.jsx";
import JobsList from "../components/JobsList.js";
import JobDetail from "../components/JobDetail.js";
const JobsPage = () => {
  const [selectedJob, setselectedJob] = useState(null);
  return (
    <Stack>
      <Header />
      <Stack sx={{ margin: "50px" }}>
        <Box
          sx={{
            width: { xs: "90%", sm: "80%", md: "70%", lg: "60%" },
            margin: "auto",
          }}
        >
          <Search />
        </Box>
        <Divider />
        <Stack
          sx={{
            flexDirection: "row",
            justifyContent: "space-between",
            mt: "30px",
            gap: "30px",
            padding: "30px",
          }}
        >
          <JobsList selectedJob={selectedJob} setselectedJob={setselectedJob} />
          <JobDetail  selectedJob={selectedJob} setselectedJob={setselectedJob}  />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default JobsPage;
