import React from "react";
import { Grid, Input } from "@mui/material";

const SearchBox = () => {
  return (
    <Grid
      container
      direction="row"
      justify="space-between"
      alignItems="flex-start">
      <Grid item xs={12}>
        <Input
          placeholder="Search"
          disableUnderline={true}
          sx={{
            backgroundColor: "#F2F2F2",
            width: "calc(100%)",
            borderRadius: "10px",
            height: "50px",
          }}
        />
      </Grid>
    </Grid>
  );
};

export default SearchBox;
