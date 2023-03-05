const useStyle = {
  title: {
    fonFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: 650,
    fontSize: { xs: "30px", md: "40px" },

    textAlign: "center",
  },
  cardContainer: {
    width: "250px",
    height: "280px",
    backgroundColor: "white",
    borderRadius: "8px",
    padding: "30px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    justifyContent: "center",
    alignItems: "center",
    "&:hover": {
      cursor: "pointer",
      background: "#def0ff",
      transition: "400ms all ease-in",
    },
  },
  cardIcon: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};

export default useStyle;
