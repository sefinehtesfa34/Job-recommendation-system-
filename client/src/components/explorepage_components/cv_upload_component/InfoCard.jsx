import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const SlimeBar = (props) => {
  return (
    <Box sx={{ width: 6, height: props.height, bgcolor: props.color }}></Box>
  );
};

export const InfoCard = () => {
  return (
    <Box
      sx={{
        // mb: -18,
        border: "1px solid red ",
        width: "150px",
        height: "130px",
        display: "flex",
        flexDirection: "column",
        bgcolor: "white",
        alignItem: "center",
        justifyContent: "center",
      }}>
      <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
        <SlimeBar height={29} color={"#54D6B2"} />
        <SlimeBar height={54} color={"#F9F871"} />
        <SlimeBar height={31} color={"#8F6889"} />
        <SlimeBar height={20} color={"#99627F"} />
        <SlimeBar height={59} color={"#9EEC90"} />
      </Box>
      <Box>
        <Typography>10k + jobs</Typography>
      </Box>
      <Box>
        <Typography>15k + users</Typography>
      </Box>
    </Box>
  );
};

export default InfoCard;
