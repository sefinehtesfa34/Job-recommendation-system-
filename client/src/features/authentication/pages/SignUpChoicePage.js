import React, { useState } from "react";
import {
  Box,
  Button,
  Link,
  Typography,
  Card,
  Stack,
  Radio,
} from "@mui/material";
import ClientImg from "../assets/client.svg";
import FreelancerImg from "../assets/freelancer.png";
import JobLogo from "../../../assets/jobfit-logo.png";
import { useNavigate } from "react-router-dom";

const SignUpChoicePage = () => {
  const [selectedAccount, setSelectedAccount] = useState("");
  const navigate = useNavigate();

  return (
    <Box sx={{ padding: "30px" }}>
      <Link
        href="/"
        sx={{
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
          gap: "00px",
          textDecoration: "none",
          color: "#5b6a82",
        }}
      >
        <Box sx={{ width: "50px" }}>
          <img style={{ width: "50px" }} src={JobLogo} alt="job logo" />
        </Box>
        <Typography sx={{ fontSize: "25px", fontWeight: "550" }}>
          Jobfit
        </Typography>
      </Link>

      <Card
        sx={{
          width: { xs: "80vw", sm: "60vw", md: "600px" },
          border: "1px solid silver",
          padding: "50px 20px",
          margin: "50px auto",
          textAlign: "center",
        }}
      >
        <Typography
          sx={{ fontWeight: "bold", fontSize: { xs: "25px", md: "30px" } }}
        >
          Join as a client or freelancer
        </Typography>

        <Stack sx={{ flexDirection: { xs: "col", md: "row" } }}>
          {/* Client Card Container Start */}
          <Card
            onClick={() => setSelectedAccount("client")}
            sx={{
              padding: "20px",
              border: "1px solid silver",
              margin: "20px",
              textAlign: "left",
              cursor: "pointer",

              "&:hover": {
                border: "2px solid #4d99b6",
              },
              backgroundColor: selectedAccount === "client" ? "#89deff" : "",
            }}
          >
            <Stack
              sx={{
                justifyContent: "space-between",
                flexDirection: "row",
                mb: "15px",
              }}
            >
              <img alt="client" width="50px" height="50px" src={ClientImg} />
              <Box>
                <Radio
                  sx={{ color: "#4d99b6 !important" }}
                  checked={selectedAccount === "client"}
                  onChange={() => {}}
                  value="a"
                  name="radio-buttons"
                  inputProps={{ "aria-label": "A" }}
                />
              </Box>
            </Stack>
            <Typography sx={{ fontWeight: "bold" }}>
              I'm a client, hiring for a project
            </Typography>
          </Card>
          {/* Client Card Container End */}

          {/* Freelance Card Container Start */}

          <Card
            onClick={() => setSelectedAccount("freelance")}
            sx={{
              padding: "20px",
              border: "1px solid silver",
              margin: "20px",
              cursor: "pointer",
              textAlign: "left",
              "&:hover": {
                border: "2px solid #4d99b6",
              },
              backgroundColor: selectedAccount === "freelance" ? "#89deff" : "",
            }}
          >
            <Stack
              sx={{
                justifyContent: "space-between",
                flexDirection: "row",
                mb: "15px",
              }}
            >
              <img
                alt="freelance"
                width="50px"
                height="50px"
                src={FreelancerImg}
              />
              <Box>
                <Radio
                  sx={{ color: "#4d99b6 !important" }}
                  checked={selectedAccount === "freelance"}
                  onChange={() => {}}
                  value="a"
                  name="radio-buttons"
                  inputProps={{ "aria-label": "A" }}
                />
              </Box>
            </Stack>
            <Typography sx={{ fontWeight: "bold" }}>
              I'm a freelance, looking for work
            </Typography>
          </Card>
          {/* Freelance Card Container End */}
        </Stack>
        <Button
          onClick={() => {
            if (selectedAccount === "client") {
              navigate("/signup/client");
            }
            if (selectedAccount === "freelance") {
              navigate("/signup/talent");
            }
          }}
          sx={{
            margin: "30px 0px",
            border: "1px solid silver",
            borderRadius: "30px",
            background: selectedAccount === "" ? "#dbeaef" : "#4d99b6",
            color: selectedAccount === "" ? "silver" : "white",
            textTransform: "capitalize",
            fontWeight: "bold",
            "&:hover": {
              background: selectedAccount === "" ? "#dbeaef" : "#4d99b6",
              color: selectedAccount === "" ? "silver" : "white",
              opacity: "0.85",
              transition: "300ms all ease-in",
            },
            width: "270px",
          }}
        >
          {selectedAccount === ""
            ? "Create Account"
            : selectedAccount === "client"
            ? "Join as a Client"
            : "Apply as a Freelancer"}
        </Button>
        <Typography>
          Already have an account?{" "}
          <Typography
            onClick={() => navigate("/login")}
            variant="span"
            sx={{ color: "#4d99b6", fontWeight: "bold", cursor: "pointer" }}
          >
            Log In
          </Typography>{" "}
        </Typography>
      </Card>
    </Box>
  );
};

export default SignUpChoicePage;
