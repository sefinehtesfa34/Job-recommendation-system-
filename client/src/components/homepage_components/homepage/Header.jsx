import React, { useState, useEffect } from "react";
import JobLogo from "../../../assets/jobfit-logo.png";
import {
  Box,
  Button,
  Link,
  Typography,
  useMediaQuery,
  useTheme,
  IconButton,
} from "@mui/material";
import DrawerComponent from "./Drawer.jsx";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";

const Header = () => {
  let user = localStorage.getItem("loggedUser")
    ? JSON.parse(localStorage.getItem("loggedUser"))
    : null;

  window.onscroll = function () {
    myFunction();
  };
  // useEffect(() => {
  //   console.log(user);
  //   if (typeof user !== "undefined" && user !== null) {
  //     user = JSON.parse(user);
  //   }
  // }, []);

  function myFunction() {
    var header = document.getElementById("myHeader");
    var sticky = header.offsetTop;

    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  }

  const [openDrawer, setOpenDrawer] = useState(false);

  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();
  return (
    <Box
      className="header"
      id="myHeader"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        // border: "2px solid white",
        height: "50px",
      }}
    >
      <DrawerComponent openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />

      <Link
        href="/"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
          textDecoration: "none",
        }}
      >
        <Box sx={{ width: "50px" }}>
          <img style={{ width: "70px" }} src={JobLogo} alt="job logo" />
        </Box>
        <Typography sx={{ color: "black", fontSize: "30px" }}>
          Jobfit
        </Typography>
      </Link>

      {isMatch ? (
        <IconButton
          sx={{ color: "white", marginLeft: "auto" }}
          onClick={() => setOpenDrawer(!openDrawer)}
        >
          <MenuIcon color="white" />
        </IconButton>
      ) : (
        <Box
          sx={{
            display: "flex",
            color: "black",
            flex: { lg: "0.7", md: "0.85" },
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Header links section start*/}

          <Box
            sx={{
              display: "flex",
              gap: "50px !important",
            }}
          >
            <Link
              sx={{
                color: "black",
                fontSize: { lg: "27px", md: "22px" },
                textDecoration: "none",
                "&:hover": {
                  cursor: "pointer",
                  color: "#4d99b6",
                  transition: "300ms all ease-in",
                },
              }}
            >
              Home
            </Link>
            <Link
              onClick={() => navigate("/jobs")}
              sx={{
                color: "black",
                fontSize: { lg: "27px", md: "22px" },
                textDecoration: "none",
                "&:hover": {
                  cursor: "pointer",
                  color: "#4d99b6",
                  transition: "300ms all ease-in",
                },
              }}
            >
              Explore
            </Link>
            <Link
              onClick={() => navigate("/jobs")}
              sx={{
                color: "black",
                fontSize: { lg: "27px", md: "22px" },
                textDecoration: "none",
                "&:hover": {
                  cursor: "pointer",
                  color: "#4d99b6",
                  transition: "300ms all ease-in",
                },
              }}
            >
              Recommended Jobs
            </Link>
            <Link
              sx={{
                color: "black",
                fontSize: { lg: "27px", md: "22px" },
                textDecoration: "none",
                "&:hover": {
                  cursor: "pointer",
                  color: "#4d99b6",
                  transition: "300ms all ease-in",
                },
              }}
            >
              About Us
            </Link>
          </Box>
          {/* Header links section end*/}

          {/* Header login signup section start*/}

          {user?.id ? (
            <Button
              onClick={() => {
                alert("hey");
                localStorage.removeItem("loggedUser");
              }}
              sx={{
                color: "black",
                background: "#4d99b6",
                borderRadius: "70px",
                padding: "2px 30px",
                // fontSize: { lg: "18px", md: "16px" },

                "&:hover": {
                  border: "1px solid #4d99b6",
                  fontSize: "1.001em",
                  fontWeight: "bold",
                  transition: "300ms all ease-in",
                },
              }}
            >
              Logout
            </Button>
          ) : (
            <Box
              sx={{
                gap: "30px",
                display: "flex",
              }}
            >
              <Button
                onClick={() => navigate("/login")}
                sx={{
                  color: "black",
                  background: "#4d99b6",
                  borderRadius: "70px",
                  padding: "2px 30px",
                  // fontSize: { lg: "18px", md: "16px" },

                  "&:hover": {
                    border: "1px solid #4d99b6",
                    fontSize: "1.001em",
                    fontWeight: "bold",
                    transition: "300ms all ease-in",
                  },
                }}
              >
                Login
              </Button>
              <Button
                onClick={() => navigate("/signup/choice")}
                sx={{
                  color: "black",
                  background: "#4d99b6",
                  borderRadius: "70px",
                  padding: "5px 30px",
                  // fontSize: { lg: "18px", md: "16px" },

                  "&:hover": {
                    border: "1px solid #4d99b6",
                    fontSize: "1.001em",
                    fontWeight: "bold",
                    transition: "300ms all ease-in",
                  },
                }}
              >
                Sign Up
              </Button>
            </Box>
          )}
          {/* Header login signup section end*/}
        </Box>
      )}
    </Box>
  );
};

export default Header;
