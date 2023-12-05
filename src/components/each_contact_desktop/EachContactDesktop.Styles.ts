const eachContactStyles = {
  listItemContact: {
    // border: "2px solid pink",
    listStyleType: "none",
    "& : hover": {
      backgroundColor: "#E9EAEB",
    },
  },

  listItemContactStack: {
    color: "#cfccc2",
    // border: "2px solid pink",
  },

  contactProfileImg: {
    width: "56px",
    height: "56px",
    borderRadius: "50%",
  },

  contactName: {
    fontSize: "18px",
    fontWeight: "500",
    color: "black",
  },

  recentMsg: {
    fontSize: "13px",
    ml: 1,
    fontWeight: "500",
    color: "#B9BBBD",
  },

  time: {
    fontSize: "13px",
    fontWeight: "500",
    color: "#B9BBBD",
    alignSelf: "center",
  },
};

export default eachContactStyles;
