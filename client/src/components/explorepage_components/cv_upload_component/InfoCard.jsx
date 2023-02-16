import { Typography, Card, Box } from "@mui/material";
import React from "react";

const SlimeBar = (props) => {
  return (
    <Box sx={{ width: 6, height: props.height, bgcolor: props.color }}></Box>
  );
};

export const InfoCard = () => {
  return (
    <Card
      sx={{
        zIndex: 1,
        width: "120px",
        height: "120px",
        display: "flex",
        flexDirection: "column",
        bgcolor: "white",
        alignItem: "center",
        justifyContent: "center",
        position: "absolute",
        top: "150px",
        left: "-60px",
        padding: "20px",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
        <SlimeBar height={29} color={"#54D6B2"} />
        <SlimeBar height={54} color={"#F9F871"} />
        <SlimeBar height={20} color={"#99627F"} />
        <SlimeBar height={59} color={"#9EEC90"} />
      </Box>
      <Box>
        <Typography>10k + jobs</Typography>
      </Box>
      <Box>
        <Typography>15k + users</Typography>
      </Box>
    </Card>
  );
};

export default InfoCard;
