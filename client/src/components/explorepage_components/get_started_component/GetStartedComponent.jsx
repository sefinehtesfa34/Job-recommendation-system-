import { Button, Typography, Stack } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { OverlayCard } from "./OverlayCard";
import Person from "../../../assets/person1.png";

export const GetStartedComponent = () => {
  return (
    <Box
      sx={{
        // border: "5px solid red",
        bgcolor: "#DEF0FF",
        // height: { xs: "calc(100%)", md: "content-fit" },
        p: "50px 100px",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        // justifyContent: "center",
        // alignItems: "center",
      }}
    >
      <Box
        sx={{
          flex: "1",
          // border: "1px solid black",
        }}
      >
        <Stack sx={{ justifyContent: "space-between", gap: "40px" }}>
          <Typography
            sx={{
              // p: "40px 80px 30px 80px",
              fontFamily: "Poppins",
              fontStyle: "italic",
              fontSize: { xs: "30px", sm: "35px", md: "40px", lg: "50px" },

              lineHeight: "50px",
              fontWeight: 500,
            }}
          >
            Create An Account <br /> And Find The Your Job
          </Typography>
          <Typography
            sx={{
              opacity: 0.7,
              fontSize: "26px",
              lineHeight: "24px",
              fontFamily: "Poppins",
            }}
          >
            Create an account so you can get job information
            <br />
            that suits you and you can apply the salary you <br />
            want. Create your account for free
          </Typography>
          <Button
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
            }}
          >
            Create account
          </Button>
        </Stack>
      </Box>
      <Box
        sx={{
          flex: "1",
          alignContent: "center",
          justify: "center",
          ml: { xs: 1, sm: 16 },
          mt: 4,
          // border: "1px solid black",
        }}
      >
        <Box sx={{ ml: "30px" }}>
          <img
            width="420px"
            height="300px"
            alt="get started  "
            src={Person}
            sx={{
              ml: "100px",
              // position: "absolute",
              // zIndex: 1,
            }}
          />
        </Box>
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
