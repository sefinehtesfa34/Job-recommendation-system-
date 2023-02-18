import { Button, Typography, Stack } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { OverlayCard } from "./OverlayCard";
import Person from "../../../assets/person1.png";
import { useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
export const GetStartedComponent = () => {
  const { currentUser } = useSelector((state) => state.users);
  const navigate = useNavigate();
  return (
    <Box
      id="about"
      sx={{
        bgcolor: "#DEF0FF",
        p: { xs: "40px", lg: "20px 100px" },
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
      }}
    >
      <Stack
        sx={{
          flex: "1",
          display: "flex",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Poppins",
            fontStyle: "italic",
            fontSize: { xs: "30px", sm: "35px", md: "40px", lg: "50px" },

            lineHeight: "50px",
            fontWeight: 500,
          }}
        >
          Create An Account <br /> And Find The Your Job
        </Typography>

        <Stack sx={{ gap: "10px" }}>
          <Typography
            sx={{
              opacity: 0.7,
              fontSize: "26px",
              lineHeight: "24px",
              fontFamily: "Poppins",
            }}
          >
            Create an account so you can get job information
          </Typography>
          <Typography
            sx={{
              opacity: 0.7,
              fontSize: "26px",
              lineHeight: "24px",
              fontFamily: "Poppins",
            }}
          >
            that suits you and you can apply the salary you
          </Typography>

          <Typography
            sx={{
              opacity: 0.7,
              fontSize: "26px",
              lineHeight: "24px",
              fontFamily: "Poppins",
            }}
          >
            want. Create your account for free
          </Typography>
        </Stack>

        <Button
          onClick={() => {
            if (!currentUser) {
              navigate("/signup/choice");
            }
          }}
          variant="contained"
          sx={{
            background: "#4d99b6",
            borderRadius: "44px",
            color: "#000000",
            fontStyle: "italic",
            fontWeight: 500,
            fontFamily: "Poppins",
            fontSize: "18px",
            height: "36px",
            lineHeight: "24px",
            textTransform: "capitalize",
            width: "200px",
            "&:hover": {
              background: "transparent",
            },
          }}
        >
          Create account
        </Button>
      </Stack>
      <Box
        sx={{
          flex: "1",
          alignContent: "center",
          justifyContent: "center",
          margin: " 30px auto",
        }}
      >
        <Box
          component="img"
          sx={{
            ml: "30px",
            width: { xs: "250px", sm: "350px", md: "350px", lg: "400px" },
            height: { xs: "250px", sm: "350px", md: "350px", lg: "400px" },
          }}
          src={Person}
        ></Box>
        <Box
          sx={{
            position: "relative",
            // zIndex: 1,
            bottom: 100,
            left: { xs: -30, md: -70 },
          }}
        >
          <OverlayCard photoUrl="Abelo" title="Becky Becker" date="Designer" />
        </Box>
      </Box>
    </Box>
  );
};

export default GetStartedComponent;
