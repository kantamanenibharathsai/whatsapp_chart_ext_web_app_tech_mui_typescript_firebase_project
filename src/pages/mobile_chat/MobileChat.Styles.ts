const mobileChatStyles = {
  mobileMainContainer: {
    width: "100%",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    boxSizing: "border-box",
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

  rightContainer: {
    width: "100%",
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

export default mobileChatStyles;
