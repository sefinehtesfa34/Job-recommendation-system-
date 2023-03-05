import React from "react";
import {
  TextField,
  Button,
  Stack,
  FormHelperText,
  InputAdornment,
  Box,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { loginUser } from "../../actions/users.js";
import { useSelector } from "react-redux";
import useStyles from "./Style.js";
import EmailIcon from "@mui/icons-material/Email";
import HttpsIcon from "@mui/icons-material/Https";

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
const LogInForm = () => {
  const { message } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {},
  });

  const onSubmit = (data) => {
    dispatch(loginUser(data));
  };

  return (
    <Stack sx={{ width: { xs: "100%" } }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* email field start */}
        {message ? (
          <Box sx={{ color: "red", textAlign: "center" }}>{message}</Box>
        ) : (
          ""
        )}
        <HelperText text="Email" />
        <TextField
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <EmailIcon />
              </InputAdornment>
            ),
          }}
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
          error={Boolean(errors.email)}
          helperText={errors.email && errors.email.message}
          fullWidth
          margin="normal"
          variant="outlined"
          id="outlined-basic email"
        />
        {/* email field end */}

        {/* password field start*/}
        <HelperText text="Password" />

        <TextField
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <HttpsIcon />
              </InputAdornment>
            ),
          }}
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

        <Button sx={useStyles.submitButtonStyle} type="submit">
          Log In
        </Button>
      </form>
    </Stack>
  );
};

export default LogInForm;
