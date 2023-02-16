import React, { useEffect } from "react";
import {
  Card,
  Box,
  Typography,
  Link,
  Stack,
  Divider,
  Button,
} from "@mui/material";
import JobLogo from "../../../assets/jobfit-logo.png";

import { FaFacebookF } from "react-icons/fa/index.js";
import { BsGoogle } from "react-icons/bs/index.js";
import { useSelector } from "react-redux";
import LogInForm from "../components/Forms/LogInForm";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cleanUp, getCurrentUser } from "../actions/users";
import Loading from "../../../components/Loading.js";
import { useLocation } from "react-router-dom";

const LogInPage = () => {
  const location = useLocation();
  const { loading, success, currentUser } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (success) {
      if (currentUser?.user_id) {
        dispatch(getCurrentUser(currentUser?.user_id));
        if (location?.state?.talent === true) {
          navigate(`/profile/${currentUser?.user_id}`);
        } else {
          navigate("/");
        }
      }
    }

    return () => {
      dispatch(cleanUp());
    };
  }, [success]);

  if (loading) {
    return <Loading path="login" />;
  }

  return (
    <Box
      sx={{
        background: "#def0ff",
        // margin: "30px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        position: "relative",
      }}
    >
      <Link
        href="/"
        sx={{
          position: "absolute",

          display: "flex",
          justifyContent: "start",
          alignItems: "center",
          gap: "00px",
          textDecoration: "none",
          color: "#5b6a82",
          top: "30px",
          left: "30px",
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
          width: { xs: "80vw", sm: "400px", md: "450px", lg: "450px" },
          height: "500px",
          margin: "30px 0",
          borderRadius: "20px",
          padding: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Typography sx={{ textAlign: "center", fontSize: "25px", mb: "30px" }}>
          Login to Jobfit
        </Typography>
        <LogInForm />

        <Divider
          variant="fullWidth"
          sx={{
            width: { xs: "100%" },
            m: "20px 0 20px",
          }}
        >
          Or
        </Divider>

        <Stack
          sx={{
            width: { xs: "100%" },
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
      </Card>
    </Box>
  );
};

export default LogInPage;
