const signUpStyles = {
  mainContainer: {
    //     display: 'grid',
    //    gridTemplateColumns : {md : "repeat(2, 1fr )"},
    width: "100%",
    display: "flex",
    flexDirection: "row",
    // alignItems: "strech",
    // height: "100vh",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2C7A7B",
    minHeight: "100vh",
  },

  childContainer: {
    width: "90%",
    margin: "auto",
    display: "grid",
    gridTemplateColumns: { xs: "100%", sm: "100%", md: "40% 1fr" },
    gridGap: "20px",
    // border: "8px solid red",
    minHeight: "95vh",
  },

  leftContainer: {
    width: "100%",
    // border: "6px solid blue",
    // display: "flex",
    // flexDirection: "column",
    // overflow: "auto scroll",
    bgcolor: "white",
    height: "100%",
  },

  whatsAppTopContainer: {
    width: "100%",
    backgroundColor: "#1BD741",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: { xs: "28%", md: "33%" },
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
    height: { xs: "72%", md: "67%" },
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
    fontSize: { xs: "19px", sm: "21px", md: "24px" },
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
    marginTop: { xs: "14px", sm: "14px", md: "18px" },
  },

  inputFieldContainer: {
    display: "flex",
    flexDirection: "column",
    // border: "2px solid red",
    gap: "8px",
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
    //border: "2px solid green",
    // paddingTop: "20px",
    color: "#29746C",
    fontSize: "15px",
  },

  visibIcon: {
    color: "#43857E",
    width: "8px",
    height: "8px",
    marginRight: "1px",
  },

  signUpBtn: {
    marginTop: { xs: "20px", xl: "35px" },
    marginBottom: { xl: "18px" },
    textTransform: "capitalize",
    bgcolor: "#1BD741",
    "&:hover": {
      background: "#1BD741",
    },
  },

  iconButton: {
    border: "1.5px solid #F1F1F1",
    borderRadius: "50%",
  },

  signUpIcons: {
    width: "27px",
    height: "27px",
  },

  signUpWithText: {
    my: { xs: "2rem", md: "1.2rem", lg: "1rem" },
    fontSize: "14px",
    color: "#A7A7A7",
  },

  thirdPartySignUp: {},

  alreadyText: {
    my: { xs: "2rem", md: "1.2rem" },
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

  logoText: {
    marginTop: "20px",
    fontFamily: "Poppins, sans-serif",
    fontWeight: "600",
    fontSize: "15px",
    width: "100%",
    color: "#000000",
    // marginLeft: "20px",
    // border: "1px solid green",
    paddingLeft: "15px",
  },

  parentContainer: {
    width: "100%",
    flexGrow: "1",
    // border: "5px solid pink",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },

  // childContainer: {
  //   display: "grid",
  //   gridTemplateColumns: { md: "repeat(2, 47%)" },
  //   width: { xs: "96%", sm: "90%" },
  //   margin: "auto",
  //   // padding: { xs: "10px", sm: "30px", md: "60px", lg: "80px", xl: "120px" },
  //   // border: "1px solid red",
  //   justifyContent: { md: "space-between" },
  // },

  signUpContainer: {
    display: "flex",
    flexDirection: "column",
    padding: "60px 0px",
    border: "0.5px solid #ebebeb",
    backgroundColor: "#ffffff",
    borderRadius: "10px",
    // width: "100%",
  },

  signUpChildContainer: {
    width: "90%",
    margin: "auto",
    // border: "1px solid green",
  },

  welcomeText: {
    marginBottom: "30px",
    fontFamily: "Poppins, sans-serif",
    fontWeight: "300",
    fontSize: "18px",
    color: "#000000",
    opacity: 0.7,
  },

  signinTextContainer: {
    marginBottom: "30px",
    display: "grid",
    gap: "4px",
  },

  signintoText: {
    fontFamily: "Poppins, sans-serif",
    fontWeight: "600",
    fontSize: "24px",
    color: "#000000",
    opacity: 0.8,
  },

  loremText: {
    fontFamily: "Poppins, sans-serif",
    fontWeight: "400",
    fontSize: "13px",
    color: "#000000",
    opacity: 0.7,
  },

  // formContainer: {
  //   // border: "1px solid red",
  //   marginBottom: "20px",
  //   display: "flex",
  //   flexDirection: "column",
  //   gap: "40px",
  // },

  inputLabelContainer: {
    // border: "2px solid pink",
    display: "grid",
    gap: "8px",
  },

  labelText: {
    fontFamily: "Poppins, sans-serif",
    fontWeight: "400",
    fontSize: "13px",
    color: "#000000",
    opacity: 0.8,
  },

  inputContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderRadius: "5px",
    border: "1px solid #282828",
    height: "42px",
  },

  inputEl: {
    color: "black",
    fontSize: "13px",
    "::placeholder": {
      fontFamily: "Poppins, sans-serif",
      fontWeight: "300",
      fontSize: "13px",
      color: "#ababab",
    },
    outline: "none",
    height: "40px",
    flexGrow: "1",
    paddingLeft: "13px",
    border: "none",
  },

  eye: {
    color: "#000000",
    marginRight: "18px",
  },

  formBtn: {
    backgroundColor: "#000000",
    borderRadius: "6px",
    alignSelf: "strech",
    fontFamily: "Poppins, sans-serif",
    fontWeight: "500",
    fontSize: "13px",
    lineHeight: "24px",
    color: "#ffffff",
    textTransform: "none",
    height: "40px",
    opacity: 0.9,
  },

  rememberContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
    // border: "1px solid red",
    marginTop: "15px",
  },
  labelContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    // border: "1px solid red",
    gap: "5px",
  },
  forget: {
    fontFamily: "Poppins, sans-serif",
    fontWeight: "300",
    fontSize: "11px",
    lineHeight: "18px",
    color: "#4d4d4d",
  },
  remember: {
    fontFamily: "Poppins, sans-serif",
    fontWeight: "300",
    fontSize: "11px",
    lineHeight: "18px",
    color: "#000000",
  },

  checkbox: {
    borderRadius: "0px",
    border: "1px solid #000000",
    marginRight: "2px",
  },

  haveContainer: {
    fontFamily: "Poppins, sans-serif",
    fontWeight: "300",
    fontSize: "14px",
    color: "#7d7d7d",
    textTransform: "none",
    // marginBottom: "20px",
    textAlign: "center",
    marginTop: "40px",
  },
  register: {
    fontFamily: "Poppins, sans-serif",
    fontWeight: "600",
    fontSize: "14px",
    lineHeight: "24px",
    color: "#000000",
    textTransform: "none",
    marginLeft: "5px",
  },

  imgContainer: {
    display: { xs: "none", md: "flex" },
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    // width: { xs: "100%", sm: "50%" },
    // border: "7px solid #000000",
  },
  img: {
    // width: { xs: "600px", sm: "627px", md: "827px", lg: "827px" },
    // height: '650px',
    width: "390px",
    height: "350px",
  },
  errorMsgText: {
    fontFamily: "Poppins, sans-serif",
    fontWeight: "300",
    fontSize: { xs: "9px", lg: "10px" },
    color: "red",
  },
};

export default signUpStyles;
