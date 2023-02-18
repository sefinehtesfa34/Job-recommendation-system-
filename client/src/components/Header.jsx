import React, { useState } from "react";
import JobLogo from "../assets/jobfit-logo.png";
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
import { useSelector } from "react-redux";

import AccountMenu from "./Profile.js";
import useStyles from "./Style";
const Header = () => {
  const { currentUser } = useSelector((state) => state.users);

  window.onscroll = function () {
    myFunction();
  };

  function myFunction() {
    var header = document.getElementById("myHeader");
    var sticky = header?.offsetTop;

    if (window.pageYOffset > sticky) {
      header?.classList?.add("sticky");
    } else {
      header?.classList?.remove("sticky");
    }
  }

  const [openDrawer, setOpenDrawer] = useState(false);

  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();
  return (
    <Box className="header" id="myHeader">
      <DrawerComponent openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />

      <Link href="/" sx={useStyles.jobFitLink}>
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
        <Box sx={useStyles.headerContent}>
          {/* Header links section start*/}

          <Box
            sx={{
              display: "flex",
              gap: "50px !important",
              ml: "100px",
            }}
          >
            <Link onClick={() => navigate("/")} sx={useStyles.headerLinks}>
              Home
            </Link>
            <Link onClick={() => navigate("/jobs")} sx={useStyles.headerLinks}>
              Explore
            </Link>
            {currentUser?.resume ? (
              <Link
                onClick={() => navigate(`/job/${currentUser?.id}`)}
                sx={useStyles.headerLinks}
              >
                Recommended Jobs
              </Link>
            ) : (
              ""
            )}

            <Link href="#about" sx={useStyles.headerLinks}>
              About Us
            </Link>
          </Box>
          {/* Header links section end*/}

          {/* Header login signup section start*/}

          {currentUser?.id ? (
            <AccountMenu />
          ) : (
            <Box
              sx={{
                gap: "30px",
                display: "flex",
              }}
            >
              <Button
                onClick={() => navigate("/login")}
                sx={useStyles.loginLinks}
              >
                Login
              </Button>
              <Button
                onClick={() => navigate("/signup/choice")}
                sx={useStyles.loginLinks}
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
