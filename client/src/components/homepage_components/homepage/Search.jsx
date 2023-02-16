import React from "react";
import {
  InputField,
  Box,
  Stack,
  TextField,
  Input,
  Button,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

const Search = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {},
  });

  const onSubmit = (data) => {
    // dispatch(createUser(data));
  };

  return (
    <Box sx={{ position: "relative" }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type={"search"}
          sx={{
            mb: "15px !important",
            background: "white",
            width: { xs: "350px", sm: "450px", md: "500px" },
            borderRadius: "30px",
            border: "none",
            padding: "7px 30px",
          }}
          placeholder="Job title or keyword"
          name="search"
          {...register("search", {})}
          error={Boolean(errors.search)}
          helperText={errors.search && errors.search.message}
          fullWidth
          margin="normal"
          variant="outlined"
          id="outlined-basic full nam"
          required
        />
        <Box
          sx={{
            position: "absolute",
            right: "0",
            background: "#4d99b6",
            top: "0px",
            padding: "11px 30px",
            borderRadius: "0px 20px 20px 0px ",
            "&:hover": {
              cursor: "pointer",
            },
            fontSize: "1.2rem",
          }}
        >
          Search
        </Box>
      </form>
    </Box>
  );
};

export default Search;
