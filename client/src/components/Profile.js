import * as React from "react";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";

import {
  Stack,
  Avatar,
  Box,
  Menu,
  MenuItem,
  ListItemIcon,
  Divider,
  IconButton,
  Typography,
  Tooltip,
} from "@mui/material";

import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { logOutUser } from "../features/authentication/actions/users.js";
import { useDispatch } from "react-redux";
import useStyles from "./Style.js";

export default function AccountMenu() {
  const { currentUser } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <React.Fragment>
      <Box sx={useStyles.profileAvatorStyle}>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            sx={{ ml: 2, fontSize: "2rem" }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Avatar
              sx={{
                width: 40,
                height: 40,
                background: "#6fc2e3",
                textTransform: "capitalize",
              }}
            >
              {currentUser?.username[0]}
            </Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={useStyles.profileMenuStyle}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <Stack sx={useStyles.profileContainer}>
          <Box sx={useStyles.profileImage}></Box>
          <Typography sx={{ fontWeight: "bold" }}>
            {currentUser?.username}
          </Typography>
          <Typography>
            {currentUser?.role === "talent" ? "Freelancer" : "Client"}
          </Typography>
        </Stack>

        <Divider />

        <MenuItem
          onClick={() => {
            handleClose();
            navigate(`/profile/${currentUser?.id}`);
          }}
        >
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose();
            dispatch(logOutUser());
          }}
        >
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}
