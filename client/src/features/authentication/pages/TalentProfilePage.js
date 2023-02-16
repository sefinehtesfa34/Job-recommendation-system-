import React, { useState } from "react";
import {
  Stack,
  Box,
  Link,
  Typography,
  Divider,
  Button,
  useMediaQuery,
  useTheme,
  Avatar,
} from "@mui/material";
import ProfileImage from "../assets/user.png";

import JobLogo from "../../../assets/jobfit-logo.png";

import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TalentDetailForm from "../components/Forms/TalentDetailForm";

const TalentProfilePage = () => {
  const [isSubmit, setIsSubmit] = useState(false);

  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const [selectedProfile, setSelectedProfile] = React.useState("details");

  const handleChange = (event) => {
    setSelectedProfile(event.target.value);
  };
  if (isMatch) {
    return (
      <Stack
        sx={{
          margin: "30px",
          height: "100%",
          position: "relative",
          overflowY: "auto",
          overflowX: "hidden",
        }}
      >
        {" "}
        {/* jofit logo start */}
        <Stack
          sx={{
            flex: "1",
            height: "300px",
          }}
        >
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
          {/* jofit logo start */}
          <Stack
            sx={{
              mt: "30px",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Typography>Settings</Typography>
          </Stack>
          <Stack sx={{ gap: "20px" }}>
            <FormControl sx={{ m: "20px 0px 0px", minWidth: 120 }}>
              <Select
                value={selectedProfile}
                onChange={handleChange}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem value={"details"}>details</MenuItem>
                <MenuItem value={"profile"}>profile</MenuItem>
              </Select>
            </FormControl>
            {/* profile start */}
            <Stack>
              <Typography sx={{ fontWeight: "bold", fontSize: "1.1rem" }}>
                Profile
              </Typography>
              <Typography sx={{}}>
                Update your photo and personal details here
              </Typography>
            </Stack>
            <Divider />
            {/* profile end */}
          </Stack>
        </Stack>
        <TalentDetailForm />
      </Stack>
    );
  } else
    return (
      <Stack
        sx={{
          margin: "30px",
          height: "100%",
          position: "relative",
          overflowY: "auto",
          overflowX: "hidden",
          paddingRight: "20px",
        }}
      >
        {" "}
        {/* jofit logo start */}
        <Stack
          sx={{
            flex: "1",
            height: "300px",
            mt: "20px",
          }}
        >
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
          {/* jofit logo start */}
          <Stack
            sx={{
              m: "30px 0px",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Typography>Settings</Typography>
            {/* <Button
              sx={{
                background: "#4d99b6 !important",
                color: "black",
                "&:hover": {
                  opacity: "0.8",
                  transition: "400ms all ease-in",
                },
              }}
            >
              Save
            </Button> */}
          </Stack>
          <Divider />

          <Stack
            sx={{
              gap: "20px",
              flexDirection: "row",
              height: "100%",
              mt: "20px",
            }}
          >
            <Stack
              sx={{
                flex: "1",
                padding: "30px",
                gap: "20px",
              }}
            >
              <Button
                variant={"light"}
                sx={{
                  background: "#FBFBFB",
                  textTransform: "capitalize",
                  "&:hover": {
                    fontWeight: "bold",
                  },
                }}
              >
                My Details
              </Button>
              <Button
                variant={"light"}
                sx={{
                  background: "#FBFBFB",
                  textTransform: "capitalize",
                  "&:hover": {
                    fontWeight: "bold",
                  },
                }}
              >
                Profile
              </Button>

              <Button></Button>
            </Stack>
            <Stack sx={{ flex: "8" }}>
              <Box
                sx={{
                  position: "relative",
                  height: "200px",
                  background: "#def0ff",
                  borderRadius: "100px 0px 0px",
                }}
              >
                <Stack
                  sx={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    position: "absolute",
                    bottom: "-80px",
                    left: "50px",
                  }}
                >
                  <Avatar
                    alt="Remy Sharp"
                    src={ProfileImage}
                    sx={{ width: "120px", height: "120px" }}
                  />
                </Stack>

                <Stack
                  sx={{ position: "absolute", bottom: "-70px", left: "190px" }}
                >
                  {" "}
                  <Typography sx={{ fontWeight: "bold" }}>Profile</Typography>
                  <Typography sx={{}}>
                    Update your photo and personal details.
                  </Typography>
                </Stack>
              </Box>
              <TalentDetailForm isSubmit={isSubmit} setIsSubmit={setIsSubmit} />
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    );
};

export default TalentProfilePage;
