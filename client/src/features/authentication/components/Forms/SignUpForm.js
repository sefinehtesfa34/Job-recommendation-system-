import React, { useState } from "react";
import { TextField, Button, Stack, FormHelperText } from "@mui/material";
import { useForm } from "react-hook-form";
import { createUser } from "../../actions/users.js";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import useStyles from "./Style.js";
import { useParams } from "react-router-dom";
import { CountryDropdown } from "react-country-region-selector";

const HelperText = ({ text }) => {
  return (
    <FormHelperText
      sx={{
        mb: "-15px",
        fontSize: "16px",
        color: "#1e5f78",
        opacity: "1",
        fontWeight: "bold",
      }}
    >
      {text}
    </FormHelperText>
  );
};
const SignUpForm = () => {
  const [residence, setResidence] = useState("");

  const { role } = useParams();

  const { message } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      role: role,
    },
  });

  const onSubmit = (data) => {
    dispatch(createUser(data));
  };

  return (
    <Stack
      sx={{ width: { xs: "90%", md: "80%", lg: "70%" }, position: "relative" }}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* username start */}
        <HelperText text="Username" />
        <TextField
          type={"text"}
          sx={{ mb: "15px !important" }}
          placeholder="Input username"
          name="username"
          {...register("username", {
            required: "User name is required",
          })}
          error={Boolean(
            errors.username ||
              message === "A user with that username already exists."
          )}
          helperText={
            (errors.username && errors.username.message) ||
            (message === "A user with that username already exists." && message)
          }
          fullWidth
          margin="normal"
          variant="outlined"
          id="outlined-basic full nam"
        />
        {/* username end */}

        {/* email field start */}
        <HelperText text="Email" />
        <TextField
          sx={{ mb: "15px !important" }}
          placeholder="Input email"
          name="email"
          type="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: "Invalid email address",
            },
          })}
          error={Boolean(
            errors.email || message === "user with this email already exists."
          )}
          helperText={
            (errors.email && errors.email.message) ||
            (message === "user with this email already exists." && message)
          }
          fullWidth
          margin="normal"
          variant="outlined"
          id="outlined-basic email"
        />
        {/* email field end */}

        {/* password field start*/}
        <HelperText text="Password" />

        <TextField
          sx={{ mb: "15px !important" }}
          placeholder="Password"
          name="password"
          type="password"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 4,
              message: "Password must be at least 4 characters",
            },
          })}
          error={Boolean(errors.password)}
          helperText={errors.password && errors.password.message}
          fullWidth
          margin="normal"
          variant="outlined"
          id="outlined-basic password"
        />
        {/* password field ned*/}

        {/* confirm password start */}

        <HelperText text="Confirm Password" />

        <TextField
          sx={{ mb: "15px !important" }}
          placeholder="Confirm password"
          name="confirmPassword"
          type="password"
          {...register("confirmPassword", {
            required: "Confirm Password is required",
            validate: (value) =>
              value === watch("password") || "Passwords do not match",
          })}
          error={Boolean(errors.confirmPassword)}
          helperText={errors.confirmPassword && errors.confirmPassword.message}
          fullWidth
          margin="normal"
          variant="outlined"
          id="outlined-basic confirm password"
        />
        {/* confirm password end */}
        <HelperText text="Location" />
        <br />
        {/* country form field start */}
        <CountryDropdown
          style={{
            width: "100%",
            padding: "12px 8px",
            borderRadius: "5px",
            background: "white",
            border: "1px solid silver",
            fontSize: "1.05rem",
            opacity: "0.7",
          }}
          value={residence}
          onChange={(value) => setResidence(value)}
          required
        />
        {/* country form field start */}

        <Button sx={useStyles.submitButtonStyle} type="submit">
          Sign Up
        </Button>
      </form>
    </Stack>
  );
};

export default SignUpForm;
