import React from "react";
import {
  Drawer,
  List,
  Button,
  Stack,
  Typography,
  ListItem,
  Link,
  Divider,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/system";
import { useSelector } from "react-redux";
import CloseIcon from "@mui/icons-material/Close";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import useStyles from "./Style";

import { logOutUser } from "../features/authentication/actions/users.js";
import { useDispatch } from "react-redux";

const DrawerComponent = ({ openDrawer, setOpenDrawer }) => {
  const { currentUser } = useSelector((state) => state.users);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <>
      <Drawer
        anchor="top"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        sx={{
          "& .MuiDrawer-paper": {
            transform: "translateY(-50%)",
            display: "flex",
          },
        }}
      >
        <List>
          <ListItem Button>
            <Link
              onClick={() => navigate("/")}
              sx={{
                color: "black",
                fontSize: { lg: "27px", md: "22px" },
                textDecoration: "none",
                p: "10px 0",
                "&:hover": {
                  cursor: "pointer",
                  color: "#4d99b6",
                  transition: "300ms all ease-in",
                },
                width: "100%",
              }}
            >
              <Stack
                sx={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Box> </Box>
                <Box>
                  {" "}
                  <Link
                    onClick={() => {
                      navigate("/");
                      setOpenDrawer(false);
                    }}
                    sx={{
                      textDecoration: "none",
                      color: "#4d99b6",
                      fontSize: "24px",
                      fontWeight: "bold",
                    }}
                  >
                    JobFit
                  </Link>
                </Box>

                <CloseIcon onClick={() => setOpenDrawer(false)} />
              </Stack>
            </Link>
          </ListItem>
          <Divider />

          {currentUser ? (
            <ListItem Button>
              <Link
                onClick={() => navigate("/")}
                sx={{
                  color: "black",
                  fontSize: { lg: "27px", md: "22px" },
                  textDecoration: "none",
                  p: "10px 0",
                  "&:hover": {
                    cursor: "pointer",
                    color: "#4d99b6",
                    transition: "300ms all ease-in",
                  },
                  width: "100%",
                }}
              >
                <Stack sx={{ flexDirection: "row", gap: "20px" }}>
                  <Box
                    sx={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                      background: "grey",
                    }}
                  ></Box>
                  <Stack>
                    <Typography sx={{ fontWeight: "bold" }}>
                      {currentUser?.username}
                    </Typography>
                    <Typography>
                      {currentUser?.role === "talent" ? "Freelancer" : "Client"}
                    </Typography>
                  </Stack>
                </Stack>
              </Link>
            </ListItem>
          ) : (
            ""
          )}
          <Divider />
          <ListItem Button>
            <Link
              onClick={() => {
                navigate("/");
                setOpenDrawer(false);
              }}
              sx={{
                color: "black",
                fontSize: { lg: "27px", md: "22px" },
                textDecoration: "none",
                p: "10px 0",
                "&:hover": {
                  cursor: "pointer",
                  color: "#4d99b6",
                  transition: "300ms all ease-in",
                },
                width: "100%",
              }}
            >
              <Typography
                sx={{
                  // color: "white",
                  fontSize: "1.2rem",
                  fontWeight: "400",
                }}
              >
                Home
              </Typography>
            </Link>
          </ListItem>
          <Divider />
          <ListItem Button>
            <Link
              onClick={() => {
                navigate("/jobs");
                setOpenDrawer(false);
              }}
              sx={{
                color: "black",
                fontSize: { lg: "27px", md: "22px" },
                textDecoration: "none",
                p: "10px 0",
                "&:hover": {
                  cursor: "pointer",
                  color: "#4d99b6",
                  transition: "300ms all ease-in",
                },
                width: "100%",
              }}
            >
              <Typography
                sx={{
                  // color: "white",
                  fontSize: "1.2rem",
                  fontWeight: "400",
                }}
              >
                Explore
              </Typography>
            </Link>
          </ListItem>
          <Divider />

          {currentUser?.resume ? (
            <Stack>
              <ListItem Button>
                <Link
                  onClick={() => navigate("/jobs")}
                  sx={{
                    color: "black",
                    fontSize: { lg: "27px", md: "22px" },
                    textDecoration: "none",
                    p: "10px 0",
                    "&:hover": {
                      cursor: "pointer",
                      color: "#4d99b6",
                      transition: "300ms all ease-in",
                    },
                    width: "100%",
                  }}
                >
                  <Typography
                    sx={{
                      // color: "white",
                      fontSize: "1.2rem",
                      fontWeight: "400",
                    }}
                  >
                    Recommended Jobs
                  </Typography>
                </Link>
              </ListItem>
              <Divider />
            </Stack>
          ) : (
            ""
          )}

          <ListItem Button>
            <Link
              to="#about"
              sx={{
                color: "black",
                fontSize: { lg: "27px", md: "22px" },
                textDecoration: "none",
                p: "10px 0",
                "&:hover": {
                  cursor: "pointer",
                  color: "#4d99b6",
                  transition: "300ms all ease-in",
                },
                width: "100%",
              }}
            >
              <Typography
                sx={{
                  // color: "white",
                  fontSize: "1.2rem",
                  fontWeight: "400",
                }}
              >
                About Us
              </Typography>
            </Link>
          </ListItem>
          <Divider />

          {currentUser ? (
            <Stack flexDirection="column">
              <ListItem Button>
                <Link
                  onClick={() => navigate(`/profile/${currentUser?.id}`)}
                  sx={{
                    color: "black",
                    textDecoration: "none",
                    p: "10px 0",
                    "&:hover": {
                      cursor: "pointer",
                      color: "#4d99b6",
                      transition: "300ms all ease-in",
                    },
                    width: "100%",
                    display: "flex",
                    gap: "10px",
                    fontSize: "22px",
                  }}
                >
                  <Settings fontSize="medium" />
                  Settings
                </Link>
              </ListItem>
              <Divider />
              <ListItem Button>
                <Link
                  onClick={() => {
                    setOpenDrawer(false);
                    dispatch(logOutUser());
                  }}
                  sx={{
                    color: "black",
                    textDecoration: "none",
                    p: "10px 0",
                    "&:hover": {
                      cursor: "pointer",
                      color: "#4d99b6",
                      transition: "300ms all ease-in",
                    },
                    width: "100%",
                    display: "flex",
                    gap: "10px",
                    fontSize: "22px",
                  }}
                >
                  <Logout fontSize="medium" />
                  Logout
                </Link>
              </ListItem>
            </Stack>
          ) : (
            <ListItem Button>
              <Box
                sx={{
                  color: "black",
                  textDecoration: "none",
                  p: "10px 0",
                  "&:hover": {
                    cursor: "pointer",
                    color: "#4d99b6",
                    transition: "300ms all ease-in",
                  },
                  width: "100%",
                  display: "flex",
                  gap: "50px",
                  fontSize: "22px",
                  justifyContent: "center",
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
            </ListItem>
          )}
        </List>
      </Drawer>
    </>
  );
};

export default DrawerComponent;
