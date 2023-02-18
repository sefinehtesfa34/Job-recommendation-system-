import React, { useRef, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import ProfileImage from "../../assets/profile.png";
import { FaFolder } from "../../../../../node_modules/react-icons/fa/index.js";
import { updateUser, cleanUp } from "../../actions/users.js";
import { useNavigate } from "react-router-dom";
import {
  TextField,
  Button,
  Stack,
  FormHelperText,
  Divider,
  Avatar,
  Typography,
  Box,
} from "@mui/material";
import { useSelector } from "react-redux";
import useStyles from "./Style.js";
import Loading from "../../../../components/Loading.js";

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

const TalentDetailForm = () => {
  const navigate = useNavigate();
  const myRefname = useRef(null);
  const handleClick = () => {
    myRefname.current.click();
  };

  const { message, currentUser, success, loading } = useSelector(
    (state) => state.users
  );
  const [resume, setResume] = useState(null);

  const dispatch = useDispatch();
  let user = JSON.parse(localStorage.getItem("loggedUser"));

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: currentUser?.username,
      about: currentUser?.about,
      specialization: currentUser?.specialization,
    },
  });
  const onSubmit = (data) => {
    let formData = new FormData();
    if (resume) {
      formData.append("resume", resume);
    }
    formData.append("username", data?.username);
    formData.append("email", user?.email);
    formData.append("password", "12345");
    formData.append("specialization", data.specialization);
    formData.append("about", data.about);
    formData.append("id", user?.id);
    dispatch(updateUser(formData, user.id));
  };

  useEffect(() => {
    if (success) {
      navigate("/");
    }

    return () => {
      dispatch(cleanUp());
    };
  }, [success]);

  if (loading) {
    return <Loading />;
  }
  return (
    <Stack
      className="talent-form"
      sx={{
        width: {
          xs: "100%",
          md: "80%",
          lg: "70%",

          //   border: "5px solid green",
        },

        height: "100vh",
        display: "flex",
        overflowY: "auto",
        overflowX: "hidden",
        flexGrow: "1",
        paddingRight: "50px !important",
        marginTop: { sm: "0", md: "100px" },
      }}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* username start */}

        <Stack
          sx={{
            m: { sm: "20px 0" },
            flexDirection: { md: "row" },
            gap: { md: "100px" },
            alignItems: { md: "center" },
            width: { sm: "100%", md: "100%" },
          }}
        >
          <Box sx={{ flex: "1" }}>
            <HelperText text="Username" />
          </Box>
          <TextField
            type={"text"}
            sx={{ mb: "15px !important", flex: "2" }}
            placeholder="Input username"
            name="username"
            {...register("username", {
              required: "User name is required",
            })}
            error={Boolean(
              errors.username ||
                message === "A user with that username already exists."
            )}
            value={register.username}
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
        {/* username end */}
        <Divider />

        {/* profile image start */}
        <Stack
          sx={{
            m: { sm: "20px 0" },
            flexDirection: { md: "row" },
            gap: { md: "100px" },
            alignItems: { md: "center" },
            width: { sm: "100%", md: "100%" },
          }}
        >
          <Stack
            sx={{
              gap: "20px",
              flex: 1,
            }}
          >
            <HelperText text="Your photo" />
            <Typography>This will be displayed on your profile</Typography>
          </Stack>

          <Stack
            flexDirection="row"
            sx={{
              justifyContent: "space-between",
              flex: "2",
            }}
          >
            <Avatar
              alt="Remy Sharp"
              src={ProfileImage}
              sx={{ width: "50px", height: "50px" }}
            />
            <Stack flexDirection="row" sx={{ gap: "20px" }}>
              <Typography>Update</Typography>
              <Typography>Delete</Typography>
            </Stack>
          </Stack>
        </Stack>
        {/* profile image end */}
        <Divider />

        {/* jot title start */}
        <Stack
          sx={{
            m: { sm: "20px 0" },
            flexDirection: { md: "row" },
            gap: { md: "100px" },
            alignItems: { md: "center" },
            width: { sm: "100%", md: "100%" },
          }}
        >
          <Box sx={{ flex: 1 }}>
            <HelperText text="Job title" />
          </Box>
          <TextField
            type={"text"}
            sx={{ mb: "15px !important", flex: 2 }}
            placeholder="Job title"
            name="specialization"
            {...register("specialization", {})}
            error={Boolean(errors.specialization)}
            value={register?.specialization}
            helperText={errors.specialization && errors.specialization.message}
            fullWidth
            margin="normal"
            variant="outlined"
            id="outlined-basic job title"
          />
        </Stack>
        {/* username end */}
        <Divider />

        {/* resume field start  */}
        <Stack
          sx={{
            m: { sm: "20px 0" },
            flexDirection: { md: "row" },
            gap: { md: "100px" },
            alignItems: { md: "center" },
            width: { sm: "100%", md: "100%" },
          }}
        >
          {/* <HelperText text="Resume" /> */}
          <Box sx={{ flex: 1 }}>
            <HelperText text="Resume" />
          </Box>
          <Box
            sx={{ flex: "2", p: "20px 0" }}
            onClick={handleClick}
            className="resume-container"
          >
            <TextField
              inputRef={myRefname}
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
        {/* resume field end */}
        <Divider />

        {/* about start */}
        <Stack
          sx={{
            m: { sm: "20px 0" },
            flexDirection: { md: "row" },
            gap: { md: "100px" },
            alignItems: { md: "center" },
            width: { sm: "100%", md: "100%" },
          }}
        >
          <Stack sx={{ flex: 1, gap: "20px" }}>
            <HelperText text="Your bio" />
            <Typography>Write a short introduction</Typography>
          </Stack>

          <TextField
            sx={{ m: "0px 0px 15px !important", flex: 2 }}
            placeholder="Add a short bio..."
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

        {/* about end */}
        <Divider />

        <Button sx={useStyles.submitButtonStyle} type="submit">
          Save
        </Button>
      </form>
    </Stack>
  );
};

export default TalentDetailForm;
