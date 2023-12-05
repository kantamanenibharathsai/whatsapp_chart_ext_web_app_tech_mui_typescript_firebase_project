const signInStyles = {
  mainContainer: {
    //     display: 'grid',
    //    gridTemplateColumns : {md : "repeat(2, 1fr )"},
    width: "100%",
    display: "flex",
    flexDirection: "row",
    // alignItems: "strech",
    minHeight: "100vh",
    backgroundColor: "#2C7A7B",
  },

  childContainer: {
    width: "90%",
    margin: "auto",
    display: "grid",
    gridTemplateColumns: { xs: "100%", sm: "100%", md: "40% 1fr" },
    gridGap: "20px",
    border: "2px solid green",
    minHeight: "95vh",
  },

  leftContainer: {
    width: "100%",
    // border: "2px solid red",
    display: "flex",
    flexDirection: "column",
  },

  whatsAppTopContainer: {
    width: "100%",
    backgroundColor: "#1BD741",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "33%",
  },

  whatsAppLogoContainer: {
    // border: "2px solid red",
    display: "flex",
    flexDirection: "column",
  },

  whatsAppIcon: {
    height: "70px",
    width: "70px",
    color: "#85F19D",
    alignSelf: "center",
  },

  whatsAppText: {
    fontSize: "26px",
    fontWeight: "500",
    color: "#85F19D",
  },

  createAccountBottomContainer: {
    backgroundColor: "#ffffff",
    height: "67%",
    // border: "3px solid yellow",
    paddingTop: "25px",
  },

  createAccountBottomChildContainer: {
    // border: "3px solid yellow",
    width: "90%",
    margin: "auto",
  },

  createAccountText: {
    color: "#29746C",
    fontSize: "24px",
    fontWeight: "500",
    textAlign: "center",
  },

  // stackContainer: {
  //   gap: "40px",
  //   border: "4px solid red",
  // },

  formContainer: {
    // border: "2px solid red",
    width: "100%",
    marginTop: "25px",
  },

  inputField: {
    "& .MuiInput-input::placeholder": {
      opacity: 0.7,
      fontSize: "0.8rem",
    },
    "& .MuiInputBase-root .MuiInputBase-input": {
      borderBottom: "2px solid white",
    },
    "& .Mui-error .MuiInputBase-input": {
      borderBottom: "initial",
    },
    "& .MuiInputBase-root.Mui-focused:after": {
      borderBottom: "2px solid #1BD741",
    },
    "& .MuiFormLabel-root.Mui-focused": {
      color: "#508D87",
      fontWeight: 700,
    },
  },

  phoneNumberCode: {
    width: "50px",
    // border: "2px solid green",
    // paddingTop: "20px",
    color: "#29746C",
  },

  visibIcon: {
    color: "#43857E",
  },

  signInBtn: {
    marginTop: "170px",
    textTransform: "capitalize",
    bgcolor: "#1BD741",
    "&:hover": {
      bgcolor: "#1BD741",
    },
    outline: "none",
    cursor: "pointer",
  },

  iconButton: {
    border: "1.5px solid #F1F1F1",
    borderRadius: "50%",
  },

  signInIcons: {
    width: "35px",
    height: "35px",
  },

  signUpWithText: {
    mt: "2rem",
    mb: "2rem",
    fontSize: "14px",
    color: "#A7A7A7",
  },

  thirdPartySignUp: {},

  alreadyText: {
    mt: "2rem",
    mb: "2rem",
    fontSize: "14px",
    color: "#3D746C",
    textAlign: "center",
  },

  loginHereText: {
    color: "#0B6057",
  },

  rightContainer: {
    // border: "2px solid red",
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    display: { xs: "none", md: "flex" },
    backgroundColor: "#ffffff",
  },

  rightChildContainer: {},

  rightContainerText: {
    fontSize: { md: "35px", lg: "50px" },
    color: "#898989",
    fontWeight: "500",
  },
};

export default signInStyles;
