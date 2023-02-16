import React, { useEffect } from "react";
import PropagateLoader from "react-spinners/PropagateLoader";
import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Loading = ({ path }) => {
  const navigate = useNavigate();

  const { success } = useSelector((state) => state.users);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        height: "100%",
        alignItems: "center",
      }}
    >
      <PropagateLoader
        color="#4d99b6"
        loading
        size={25}
        speedMultiplier={0.7}
      />
      <Typography sx={{ mt: "100px", color: "#1e5f78", fontSize: "1.3rem" }}>
        Loading
      </Typography>
    </Box>
  );
};
export default Loading;
