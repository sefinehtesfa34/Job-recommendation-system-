import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import FolderIcon from "@mui/icons-material/Folder";
const Header = () => {
  return (
    <Box
      sx={{
        display: "flex",
        // border: "1px solid red",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography
        sx={{
          fontWeight: 600,
          color: "black",
          fontFamily: "Poppins",
          fontSize: "28px",
          lineHeight: "44px",
        }}
      >
        Upload CV
      </Typography>
      <Typography
        sx={{
          color: "black",
          fontFamily: "Poppins",
          fontWeight: 400,
          fontSize: "20px",
          opacity: "0.5",
        }}
      >
        File must be in PDF format
      </Typography>
    </Box>
  );
};

const Body = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        ml: 5,
        width: "220px",
        height: "200px",
        bgcolor: "#EDEDED",
        borderRadius: "10px",
      }}
    >
      <FolderIcon
        sx={{ fontSize: "60px", color: "#4D99B6" }}
        // sx={{ color: "#4D99B6", border: "1px solid red" }}
      />
      <Typography
        sx={{
          fontFamily: "Poppins",
          fontWeight: 300,
          fontSize: "16px",
        }}
      >
        Drag and drop or upload
      </Typography>
    </Box>
  );
};

const UploadButton = () => {
  return (
    <Box
      sx={{
        display: "flex",
        // border: "1px solid red",
        justifyContent: "center",
      }}
    >
      <Button
        variant="outlined"
        sx={{
          background: "#4d99b6",
          borderRadius: "20px",
          color: "white",
          textTransform: "capitalize",
          padding: "5px 30px !important",
          ml: "30px",
          "&:hover": {
            opacity: "0.7",
            transition: "400ms all ease-in",
            background: "#4d99b6",
          },
        }}
      >
        <Typography
          sx={{
            fontFamily: "Poppins",
            fontSize: "18px",
          }}
        >
          Upload File
        </Typography>
      </Button>
    </Box>
  );
};

export const UploadCvCard = () => {
  return (
    <Card
      sx={{
        zIndex: 2,
        width: { xs: "300px", sm: "350px", md: "400px" },
        height: "100%",
        bgcolor: "white",
        borderRadius: "12px",
        border: "2px solid silver",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        p: { xs: "20px", md: "0px" },
      }}
    >
      <CardHeader title={<Header />} />
      <CardContent>
        <Body />
      </CardContent>
      <UploadButton />
    </Card>
  );
};

export default UploadCvCard;
