import React from "react";
import { Card, Typography, Stack } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AdjustIcon from "@mui/icons-material/Adjust";
const JobCard = ({ job, selectedJob, setselectedJob }) => {
  return (
    <Card
      onClick={() => setselectedJob(job)}
      sx={{
        minHeight: "200px",
        maxHeight: "350px",
        padding: "30px",

        border: "1px solid silver",
        "&:hover": {
          background: "#6fc2e3",
          transition: "400ms all ease-in",
          cursor: "pointer",
        },
        fontFamily: "poppins",
        fontSize: "1.2rem",
        background: selectedJob === job ? "#6fc2e3" : "",
      }}
    >
      <Stack sx={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Typography sx={{ fontWeight: "bold", fontSize: "1.3rem" }}>
          {job?.jobTitle}
        </Typography>
        <MoreVertIcon />
      </Stack>
      <AdjustIcon sx={{ fontSize: "20px", m: "10px 5px 0 0" }} />
      <Typography variant="span" sx={{ fontSize: "1.1rem" }}>
        {job?.responsibility.slice(0, 200)} ...
      </Typography>
      <br />
      <AdjustIcon sx={{ fontSize: "20px", m: "20px 5px 0 0" }} />

      <Typography variant="span" sx={{ fontSize: "1.1rem" }}>
        {job?.description.slice(0, 200)} ...
      </Typography>
    </Card>
  );
};

export default JobCard;
