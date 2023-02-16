import React from "react";
import { Avatar, Card, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useDispatch } from "react-redux";
import { searchJobs } from "../../../features/jobs/actions/jobs.js";
import { useNavigate } from "react-router-dom";
const JobCard = ({ Icon, color, title, description }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <Card
      onClick={() => {
        dispatch(searchJobs(title));
        navigate("/jobs");
      }}
      sx={{
        width: "250px",
        height: "280px",
        backgroundColor: "white",
        borderRadius: "8px",
        padding: "30px",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        justifyContent: "center",
        alignItems: "center",
        "&:hover": {
          cursor: "pointer",
          background: "#def0ff",
          transition: "400ms all ease-in",
        },
      }}
    >
      <Box
        sx={{
          width: "100px",
          height: "100px",
          background: color,
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Icon sx={{ color: "yellow", fontSize: "70px" }} />
      </Box>
      <Typography sx={{ fontWeight: "bold", fontSize: "1.2rem", mt: "30px" }}>
        {title}
      </Typography>
      <Typography sx={{ color: "light" }}>{description}</Typography>

      {/* <CardHeader
        sx={{ mt: -1.2 }}
        avatar={
          <Avatar
            alt="Profile"
            src={icon}
            sx={{ width: 28, height: 28, mt: -3.6 }}
          />
        } */}
      {/* // title={ */}
      {/* //   <Typography sx={{ fontSize: 14, fontWeight: 600 }}>
        //     {props.title}
        //   </Typography>
        // }
        // subheader={ */}
      {/* //   <Box sx={{ display: "flex", flexDirection: "column" }}>
        //     <Typography sx={{ fontSize: 12, fontWeight: 300 }}>
        //       Posted: {props.date}
        //     </Typography>
        //     <Box sx={{ ml: "50px" }}>
        //       <Fab color="white" size="small">
        //         <Typography>{props.id}</Typography>
        //       </Fab>
        //     </Box>
        //   </Box>
        // }
      /> */}

      {/* <CardContent sx={{ mt: "-20px", fontSize: 13, fontWeight: 380 }}>
        <Typography variant="p" sx={{ fontSize: 14 }}>
          {props.description}
        </Typography> */}
      {/* </CardContent> */}
    </Card>
  );
};

export default JobCard;
