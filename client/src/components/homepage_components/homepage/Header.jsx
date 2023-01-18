import React, { useState } from "react";
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
import DrawerComponent from "./Drawer";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
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

          <Box
            sx={{
              gap: "30px",
              display: "flex",
            }}
          >
            <Button
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
          {/* Header login signup section end*/}
        </Box>
      )}
    </Box>
  );
};

export default Header;
