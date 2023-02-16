import React from "react";

import {
  Card,
  CardContent,
  Box,
  Typography,
  Chip,
  Divider,
} from "@mui/material";

const JobCard = (props) => {
  return (
    <Card
      sx={{
        borderRadius: "6px",
        bgColor: "red",
      }}>
      <CardContent>
        <Box display="flex" justifyContent="space-around" alignItems="center">
          <Typography variant="h5" component="h2">
            {props.title}
          </Typography>
          <Chip label={`Posted by ${props.owner}`} />
        </Box>
        <Divider sx={{ height: 1.3, bgcolor: "black" }} />

        <Typography variant="body2" color="textSecondary" component="p">
          {props.description}
        </Typography>
        <Box display="flex" justifyContent="flex-end">
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            style={{ marginTop: 10 }}>
            {new Date(props.date).toLocaleDateString()}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default JobCard;
