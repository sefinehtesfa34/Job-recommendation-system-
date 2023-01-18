import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  Button,
  Stack,
  Typography,
} from "@mui/material";

const DrawerComponent = ({ openDrawer, setOpenDrawer }) => {
  return (
    <React.Fragment>
      <Drawer
        anchor="right"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <Stack
          sx={{
            padding: "10px",
            width: "200px",
          }}
        >
          <Typography>Hello World</Typography>
        </Stack>
      </Drawer>
    </React.Fragment>
  );
};

export default DrawerComponent;
