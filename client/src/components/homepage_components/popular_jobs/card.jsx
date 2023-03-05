import React from "react";
import { Card, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useDispatch } from "react-redux";
import { searchJobs } from "../../../features/jobs/actions/jobs.js";
import { useNavigate } from "react-router-dom";
import useStyle from "./Style.js";
const JobCard = ({ Icon, color, title, description }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <Card
      onClick={() => {
        dispatch(searchJobs(title));
        navigate("/jobs");
      }}
      sx={useStyle.cardContainer}
    >
      <Box sx={{ ...useStyle.cardIcon, background: color }}>
        <Icon sx={{ color: "white", fontSize: "50px" }} />
      </Box>
      <Typography sx={{ fontWeight: "bold", fontSize: "1.2rem", mt: "30px" }}>
        {title}
      </Typography>
      <Typography sx={{ color: "light" }}>{description}</Typography>
    </Card>
  );
};

export default JobCard;
