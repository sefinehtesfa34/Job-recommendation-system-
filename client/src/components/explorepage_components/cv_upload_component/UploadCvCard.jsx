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
      }}>
      <Typography
        sx={{
          fontSize: 14,
          fontWeight: 600,
          color: "black",
          fontFamily: "Poppins",
          fontSize: "28px",
          lineHeight: "44px",
        }}>
        Upload Cv
      </Typography>
      <Typography
        sx={{
          fontSize: 12,
          color: "white",
          fontFamily: "Poppins",
          fontWeight: 400,
          fontSize: "16px",
        }}>
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
        width: "200px",
        height: "140px",
        bgcolor: "#EDEDED",
      }}>
      <FolderIcon
        sx={{ fontSize: "60px", color: "#4D99B6" }}
        // sx={{ color: "#4D99B6", border: "1px solid red" }}
      />
      <Typography
        sx={{
          fontFamily: "Poppins",
          fontWeight: 300,
          fontSize: "16px",
        }}>
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
      }}>
      <Button
        variant="outlined"
        sx={{
          background: "#4d99b6",
          borderRadius: "16px",
          color: "white",
          textTransform: "capitalize",
        }}>
        <Typography
          sx={{
            fontFamily: "Poppins",
            fontSize: "18px",
          }}>
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
        width: "300px",
        height: "330px",
        bgcolor: "#707C90",
        borderRadius: "12px",
      }}>
      <CardHeader title={<Header />} />
      <CardContent>
        <Body />
      </CardContent>
      <UploadButton />
    </Card>
  );
};

export default UploadCvCard;
