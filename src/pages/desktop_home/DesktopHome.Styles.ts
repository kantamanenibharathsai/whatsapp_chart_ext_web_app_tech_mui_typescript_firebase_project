const homeStyles = {
  homeMainContainer: {
    width: "100%",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    boxSizing: "border-box",
  },

  greenContainer: {
    backgroundColor: "#1fa884",
    height: "20vh",
    width: "100%",
  },

  greenBottomContainer: {
    backgroundColor: "#DFDFDF",
    height: "80vh",
    width: "100%",
  },

  homeChildContainer: {
    width: "96%",
    height: "95vh",
    position: "absolute",
    top: "20px",
    bottom: "20px",
    // border: "2px solid red",
    boxSizing: "border-box",
  },

  chatScreenContainer: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
    // border: "4px solid green",
  },

  leftContactsContainer: {
    width: { xs: "100%", md: "35%" },
    backgroundColor: "white",
    overflow: { md: "hidden" },
    // border: "4px solid yellow",
    height: "100%",
  },

  header: {
    height: "82px",
    backgroundColor: "#f0f2f5",
    // border: "4px solid red",
  },

  profileImg: {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
  },

  headerIcons: {
    fontSize: "25px",
    color: "#546570",
  },

  searchOrStartInputField: {
    width: "95%",
    "& fieldset": { border: "none" },
    color: "#546570",
    // border: "2px solid green",
    padding: "8px 0px",
    pl: "16px",
  },

  searchIcon: {
    fontSize: "20px",
    color: "#546570",
  },

  filterIcon: {
    fontSize: "23px",
  },

  unorderedListContainer: {
    padding: "0px",
    margin: "0px",
    // border: "3px solid grey",
    overflow: "auto",
    height: "86%",
    paddingBottom: "30px",
  },

  rightContainer: {
    width: { xs: "100%", md: "65%" },
    height: "100%",
    // border: "3px solid red",
    position: "relative",
  },

  rightHeader: {
    height: "82px",
    backgroundColor: "#f0f2f5",
    // border: "4px solid red",

    width: "100%",
  },

  chatHolderContainer: {
    backgroundImage:
      "url('https://mcdn.wallpapersafari.com/335/27/32/jt4AoG.jpg')",
    backgroundSize: "cover",
    height: "83%",
    overflow: "auto",
    px: "30px",
    py: "30px",
    display: "flex",
    flexDirection: "column",

    // border: "3px solid pink",
  },

  rightBottomHeader: {
    height: "82px",
    backgroundColor: "#f0f2f5",
    // border: "4px solid red",
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
  },

  bottomHeaderTextField: {
    width: "90%",
    "& fieldset": { border: "none" },
    backgroundColor: "white",
    borderRadius: "10px",
    padding: "6px 0px",
  },
};

export default homeStyles;
