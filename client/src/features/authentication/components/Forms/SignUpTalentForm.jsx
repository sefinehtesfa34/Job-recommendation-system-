import React, { useState, useRef } from "react";
import {
  TextField,
  Button,
  FormHelperText,
  Stack,
  Box,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { createUser } from "../../actions/users.js";
import { useSelector } from "react-redux";
import { FaFolder } from "../../../../../node_modules/react-icons/fa/index.js";
import { useNavigate } from "react-router-dom";

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

function SignUpTalentForm() {
  const myRefname = useRef(null);
  const handleClick = () => {
    myRefname.current.click();
  };

  const [resume, setResume] = useState(null);

  const { message } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      role: "talent",
    },
  });

  const onSubmit = (data) => {
    let formData = new FormData();

    if (resume) {
      formData.append("resume", resume);
    }
    formData.append("username", data.username);
    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("residence", data.residence);
    formData.append("specialization", data.specialization);
    formData.append("about", data.about);

    dispatch(createUser(formData));
  };

  return (
    <Stack sx={{ width: { xs: "95%", md: "95%", lg: "95%" } }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Stack of username and email start */}

        <Stack
          sx={{
            flexDirection: { xs: "col", lg: "row" },
            width: "100%",
            gap: { xs: "0", lg: "20px" },
          }}
        >
          <Stack sx={{ flex: 1 }}>
            <HelperText text="Full Name" />
            <TextField
              sx={{ mb: "15px !important" }}
              placeholder="Input your full name"
              name="hiringManagerName"
              {...register("username", {
                required: "Full name is required",
              })}
              error={Boolean(
                errors.username ||
                  message === "A user with that username already exists."
              )}
              helperText={
                (errors.username && errors.username.message) ||
                (message === "A user with that username already exists." &&
                  message)
              }
              fullWidth
              margin="normal"
              variant="outlined"
              id="outlined-basic full nam"
            />
          </Stack>

          <Stack sx={{ flex: 1 }}>
            <HelperText text="Email" />

            <TextField
              sx={{ mb: "15px !important" }}
              placeholder="Email"
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
                errors.email ||
                  message === "user with this email already exists."
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
          </Stack>
        </Stack>
        {/* Stack of username and email end */}

        {/* Stack of specialization and residence start */}
        <Stack
          sx={{
            flexDirection: { xs: "col", lg: "row" },
            width: "100%",
            gap: { xs: "0", lg: "20px" },
          }}
        >
          <Stack sx={{ flex: 1 }}>
            <HelperText text="Specialization" />
            <TextField
              sx={{ mb: "15px !important" }}
              placeholder="Career specialization"
              name="specialization"
              {...register("specialization", {
                required: "Specialization is required",
              })}
              error={Boolean(errors.specialization)}
              helperText={
                errors.specialization && errors.specialization.message
              }
              fullWidth
              margin="normal"
              variant="outlined"
              id="outlined-basic specialization"
            />
          </Stack>

          <Stack sx={{ flex: 1 }}>
            <HelperText text="Residence" />

            <TextField
              sx={{ mb: "15px !important" }}
              placeholder="Country of residence"
              name="residence"
              type="text"
              {...register("residence", {
                required: "Country of residence is required",
              })}
              error={Boolean(errors.residence)}
              helperText={errors.residence && errors.residence.message}
              fullWidth
              margin="normal"
              variant="outlined"
              id="outlined-basic residence"
            />
          </Stack>
        </Stack>

        {/* Stack of specialization and residence end */}

        {/* Stack of password and confirm password start */}
        <Stack
          sx={{
            flexDirection: { xs: "col", lg: "row" },
            width: "100%",
            gap: { xs: "0", lg: "20px" },
          }}
        >
          <Stack sx={{ flex: 1 }}>
            <HelperText text="Password" />

            <TextField
              sx={{ mb: "15px !important" }}
              placeholder="Password"
              name="password"
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters",
                },
              })}
              error={Boolean(errors.password)}
              helperText={errors.password && errors.password.message}
              fullWidth
              margin="normal"
              variant="outlined"
              id="outlined-basic password"
            />
          </Stack>

          <Stack sx={{ flex: 1 }}>
            <HelperText text="Confirm Password" />

            <TextField
              sx={{ mb: "15px !important" }}
              placeholder="Confirm Password"
              name="confirmPassword"
              type="password"
              {...register("confirmPassword", {
                required: "Confirm Password is required",
                validate: (value) =>
                  value === watch("password") || "Passwords do not match",
              })}
              error={Boolean(errors.confirmPassword)}
              helperText={
                errors.confirmPassword && errors.confirmPassword.message
              }
              fullWidth
              margin="normal"
              variant="outlined"
              id="outlined-basic confirm password"
            />
          </Stack>
        </Stack>

        {/* Stack of password and confirm password end */}
        {/* Stack of file and about start */}

        <Stack
          sx={{
            flexDirection: { xs: "col", lg: "row" },
            width: "100%",
            gap: { xs: "0", lg: "20px" },
          }}
        >
          <Stack sx={{ flex: 1 }}>
            {/* <HelperText text="Resume" /> */}
            <HelperText text="Resume" />
            <Box
              sx={{ border: "5px solid green" }}
              onClick={handleClick}
              // onClick={() => {
              //   const fileInput = document.querySelector(".file-input");
              //   fileInput.click();
              // }}
              className="resume-container"
            >
              <TextField
                inputRef={myRefname}
                onClick={() => console.log("hello world")}
                // ref={myRefname}
                className="file-input"
                placeholder="Resume"
                accept=".pdf"
                onChange={(event) => setResume(event.target.files[0])}
                type="file"
                name="resume"
                id="resume"
                sx={{ display: "none" }}

                // {...register("resume", {
              />
              <Stack
                sx={{
                  fontSize: "2.5rem",
                  color: "#5b6a82",
                  width: "250px",
                  background: "#def0ff",
                  height: "100px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "col !important",
                  borderRadius: "5px",
                }}
              >
                <FaFolder className="fa-cloud-upload-alt" />
                <Typography>
                  {resume ? resume.name : "Drag and drop or upload"}
                </Typography>
              </Stack>
              <Button
                sx={{
                  m: "20px 0 0",
                  background: "#5b6a82",
                  color: "white",
                  borderRadius: "20px",
                  "&:hover": {
                    background: "#5b6a82",
                  },
                  padding: "5px 30px",
                  textTransform: "capitalize",
                }}
              >
                Upload File
              </Button>
            </Box>
          </Stack>

          <Stack sx={{ flex: 1 }}>
            <HelperText text="About" />

            <TextField
              sx={{ m: "15px 0px 15px !important" }}
              placeholder="Write about you (optional)"
              name="about"
              type="text"
              {...register("about", {})}
              fullWidth
              margin="normal"
              variant="outlined"
              multiline
              rows={6}
              rowsmax={10}
              id="outlined-basic about"
            />
          </Stack>
        </Stack>

        {/* Stack of file and about end */}

        <Button
          type="submit"
          sx={{
            width: {
              xs: "100%",
              md: "90%",
              lg: "60%",
            },
            background: "#4d99b6",
            color: "black",
            fontWeight: "bold",
            mt: "30px",
            fontSize: "1.05rem",
            "&:hover": {
              background: "#4d99b6",
              opacity: "0.8",
            },
          }}
        >
          Sign Up
        </Button>
      </form>
    </Stack>
  );
}

export default SignUpTalentForm;
