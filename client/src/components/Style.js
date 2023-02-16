const useStyles = {
  searchContainer: {
    position: "relative",
    width: {
      xs: "80vw !important",
      md: "35vw !important",
    },
  },
  searchField: {
    mb: "15px !important",
    background: "white",
    width: { xs: "350px", sm: "450px", md: "500px" },
    width: { xs: "80vw !important", md: "35vw !important", lg: "100%" },

    borderRadius: "30px",
    border: "none",
    padding: "7px 30px",
    border: "1px solid silver",
  },
  searchButton: {
    position: "absolute",
    right: "0",
    background: "#4d99b6",
    top: "0px",
    padding: "7px 30px 8px !important",
    borderRadius: "0px 25px 25px 0px !important",
    textTransform: "capitalize",
    "&:hover": {
      cursor: "pointer",
      background: "#6fc2e3",
    },
    fontSize: "1.2rem",
    color: "black",
  },
};

export default useStyles;
