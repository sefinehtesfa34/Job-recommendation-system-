import React from "react";
import { Stack, Card, Typography, Button, Divider } from "@mui/material";
const JobDetail = ({ selectedJob }) => {
  if (!selectedJob) {
    return "";
  }

  return (
    <Card
      className="job-detail"
      sx={{
        border: "1px solid silver",
        width: "50vw",
        height: `calc(100vh - 280px)`,
      }}
    >
      <Stack
        id="cont"
        sx={{
          justifyContent: "center",
          alignItems: "start",
          gap: "10px",
          padding: "30px 30px 20px",
          fontFamily: "poppins !important",
        }}
      >
        <Typography
          sx={{
            fontSize: "20px",
            color: "#1e5f78",
            opacity: "1",
            fontWeight: "bold",
            fontFamily: "poppins !important",
          }}
        >
          {selectedJob?.jobTitle}
        </Typography>
        <Button
          sx={{
            background: "#1e5f78",
            color: "white",
            fontWeight: "bold",
            "&:hover": {
              background: "#4d99b6",
            },
            padding: "10px 20px",
            fontFamily: "poppins !important",
          }}
        >
          Apply on employer's website
        </Button>
      </Stack>
      <Divider />

      <Stack sx={{ height: `calc(100vh - 480px)`, overflow: "auto" }}>
        <Stack
          sx={{
            justifyContent: "center",
            alignItems: "start",
            gap: "10px",
            padding: "30px 30px 20px",
            fontFamily: "poppins !important",
          }}
        >
          <Typography
            sx={{
              fontSize: "20px",
              color: "#1e5f78",
              opacity: "1",
              fontWeight: "bold",
              fontFamily: "poppins !important",
            }}
          >
            Job description
          </Typography>
          <Typography
            sx={{
              fontFamily: "poppins !important",
            }}
          >
            {selectedJob?.description}
          </Typography>
        </Stack>
        <Divider />

        <Stack
          sx={{
            justifyContent: "center",
            alignItems: "start",
            gap: "10px",
            padding: "30px 30px 20px",
            fontFamily: "poppins !important",
          }}
        >
          <Typography
            sx={{
              fontSize: "20px",
              color: "#1e5f78",
              opacity: "1",
              fontWeight: "bold",
              fontFamily: "poppins !important",
            }}
          >
            Job qualification
          </Typography>
          <Typography
            sx={{
              fontFamily: "poppins !important",
            }}
          >
            {selectedJob?.qualification}
          </Typography>
        </Stack>
        <Divider />

        <Stack
          sx={{
            justifyContent: "center",
            alignItems: "start",
            gap: "10px",
            padding: "30px 30px 20px",
            fontFamily: "poppins !important",
          }}
        >
          <Typography
            sx={{
              fontSize: "20px",
              color: "#1e5f78",
              opacity: "1",
              fontWeight: "bold",
              fontFamily: "poppins !important",
            }}
          >
            Responsibility
          </Typography>
          <Typography
            sx={{
              fontFamily: "poppins !important",
            }}
          >
            {selectedJob?.responsibility}
          </Typography>
        </Stack>
        <Divider />
      </Stack>

      {/* <Stack
        sx={{
          justifyContent: "center",
          alignItems: "start",
          gap: "10px",
          padding: "30px 30px 20px",
        }}
      >
        <Typography
          sx={{
            fontSize: "20px",
            color: "#1e5f78",
            opacity: "1",
            fontWeight: "bold",
          }}
        >
          Preferred qualification
        </Typography>
        <Typography sx={{ mb: "20px" }}>
          {selectedJob?.preferredQualification}
        </Typography>
      </Stack> */}
      <Divider />
    </Card>
  );
};

export default JobDetail;
