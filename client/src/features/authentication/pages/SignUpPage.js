import React, { useEffect } from "react";

import { Box, Button, Link, Typography, Stack, Divider } from "@mui/material";

import JobImg from "../assets/4565.jpg";

import JobLogo from "../../../assets/jobfit-logo.png";

import { FaFacebookF } from "react-icons/fa/index.js";
import { BsGoogle } from "react-icons/bs/index.js";
import { useNavigate, useParams } from "react-router-dom";
import SignUpForm from "../components/Forms/SignUpForm.js";
import { cleanUp } from "../actions/users";
import Loading from "../../../components/Loading.js";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const SignUpPage = () => {
  const { role } = useParams();
  const navigate = useNavigate();
  const { loading, success, currentUser } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    if (success) {
      navigate("/login", { state: { talent: role === "talent" } });
    }

    return () => {
      dispatch(cleanUp());
    };
  }, [success]);

  if (loading) {
    return <Loading path="login" />;
  }

  return (
    <Stack
      sx={{
        flexDirection: "row",
        height: "100%",
      }}
    >
      <Box
        sx={{
          flex: "1",
          background: "#def0ff",
          width: "50vw",
          display: { xs: "none", md: "flex" },
          maxHeight: "100%",
        }}
      >
        <Stack
          sx={{
            // padding: "100px 0px",
            textAlign: "center",
            alignItems: "center",
            margin: "auto",
          }}
        >
          <Typography
            sx={{
              color: "#1e5f78",
              fontWeight: "bold",
              fontSize: "2rem",
            }}
          >
            Jobfit Recommendation Site
          </Typography>

          <Typography sx={{ opacity: "0.5", m: "10px 0 20px" }}>
            {/* Get a chance to explore our site and find the best professionals */}
            Are you looking for the best candidates for your open positions? We
            can provide <br /> you with high-quality, qualified applicants.
          </Typography>
          <Box sx={{ position: "relative" }}>
            <img
              style={{ background: "ggre" }}
              width="100%"
              alt="client sign up logo"
              src={JobImg}
            />
          </Box>
        </Stack>
      </Box>
      <Stack
        sx={{
          flex: "1",
          m: {
            xs: "30px 20px 20px",
            md: "50px 50px 20px",
          },
          textAlign: "center",
          alignItems: "center",
          width: { xs: "90%", md: "80%", lg: "70%" },
          overflow: "auto",
        }}
      >
        <Link
          href="/"
          sx={{
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
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
        <Typography sx={{ fontSize: "25px", fontWeight: "500", mt: "20px" }}>
          {role == "client"
            ? "Sign Up To Hire Client"
            : "Sign up to find work you love"}
        </Typography>

        <Typography
          sx={{
            fontSize: "15px",
            fontWeight: "200",
            color: "black",
            opacity: "0.5",
            m: "0px 0 10px",
          }}
        >
          Already have an account?{" "}
          <Typography
            onClick={() => navigate("/login")}
            sx={{
              color: "#1e5f78",
              opacity: "1 !important",
              fontWeight: "bold",
              cursor: "pointer",
            }}
            variant="span"
          >
            Sign In
          </Typography>
        </Typography>
        <SignUpForm />
        <Divider
          variant="fullWidth"
          sx={{
            width: { xs: "90%", md: "80%", lg: "70%" },
            m: "20px 0 20px",
          }}
        >
          Or sign up with
        </Divider>

        <Stack
          sx={{
            width: { xs: "90%", md: "80%", lg: "70%" },
            flexDirection: "row",
            gap: "20px",
            height: "35px",
          }}
        >
          <Button
            sx={{
              background: "blue",
              color: "white",
              flex: "1",
              fontSize: "1.3rem",
              "&:hover": {
                background: "blue",
                opacity: "0.8",
              },
            }}
          >
            <FaFacebookF />
          </Button>
          <Button
            sx={{
              background: "red",
              color: "white",
              flex: "1",
              fontSize: "1.2rem",
              "&:hover": {
                background: "red",
                opacity: "0.7",
              },
            }}
          >
            <BsGoogle />
          </Button>
        </Stack>
        <Divider
          variant="fullWidth"
          sx={{
            width: { xs: "90%", md: "80%", lg: "70%" },
            m: "20px 0 30px",
          }}
        ></Divider>

        <Typography
          sx={{
            fontSize: "15px",
            fontWeight: "200",
            color: "black",
            opacity: "0.5",
            width: { xs: "90%", md: "80%", lg: "70%" },
          }}
        >
          By Sign up, you agree to our{" "}
          <Typography
            sx={{
              color: "#1e5f78",
              opacity: "1",
              fontWeight: "bold",
              cursor: "pointer",
            }}
            variant="span"
          >
            Terms of Use
          </Typography>{" "}
          and{" "}
          <Typography
            sx={{
              color: "#1e5f78",
              opacity: "1",
              fontWeight: "bold",
              cursor: "pointer",
            }}
            variant="span"
          >
            Privacy Policy
          </Typography>
        </Typography>
      </Stack>
    </Stack>
  );
};

export default SignUpPage;
