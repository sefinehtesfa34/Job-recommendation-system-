import React from "react";
import { Box, Input, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { searchJobs } from "../features/jobs/actions/jobs";
import { useNavigate } from "react-router-dom";
import useStyles from "./Style";

const Search = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  const onSubmit = (data) => {
    dispatch(searchJobs(data));
    navigate("/jobs");
  };

  return (
    <Box sx={useStyles.searchContainer}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          disableUnderline={true}
          type={"search"}
          sx={useStyles.searchField}
          placeholder="Job title or keyword"
          name="search"
          {...register("search", {})}
          error={Boolean(errors.search)}
          helperText={errors.search && errors.search.message}
          margin="normal"
          variant="outlined"
          id="outlined-basic search"
        />
        <Button type="submit" sx={useStyles.searchButton}>
          Search
        </Button>
      </form>
    </Box>
  );
};

export default Search;
