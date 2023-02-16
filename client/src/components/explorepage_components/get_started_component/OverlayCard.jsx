import { Avatar, Card, CardHeader, Typography } from "@mui/material";
import React from "react";

export const OverlayCard = (props) => {
  return (
    <Card
      sx={{
        width: "180px",
        height: "auto",
        backgroundColor: "white",
        borderRadius: "12px",
        ml: 1.2,
      }}>
      <CardHeader
        sx={{ mt: -1.2 }}
        avatar={
          <Avatar
            alt="Profile"
            src={props.photoUrl}
            sx={{ width: 36, height: 36 }}
          />
        }
        title={
          <Typography sx={{ fontSize: 14, fontWeight: 600 }}>
            {props.title}
          </Typography>
        }
        subheader={
          <Typography sx={{ fontSize: 12, fontWeight: 300 }}>
            {props.date}
          </Typography>
        }
      />
    </Card>
  );
};

export default OverlayCard;
