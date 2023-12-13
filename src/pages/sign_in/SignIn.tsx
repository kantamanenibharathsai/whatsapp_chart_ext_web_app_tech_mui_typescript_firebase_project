import {
  Box,
  Button,
  Divider,
  FormControl,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import signInStyles from "./SignIn.Styles";
import React, { useState } from "react";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GoogleIcon from "@mui/icons-material/Google";
import { Link, useNavigate } from "react-router-dom";
// import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
// import { useNavigate } from "react-router-dom";
import { auth } from "../../Firebase-Config";

interface SignUpFormDataInterface {
  email: string;
  password: string;
  isPasswordVisible: boolean;
  authenticateText: string;
}

const SignIn: React.FC = () => {
  const [formData, setFormData] = useState<SignUpFormDataInterface>({
    email: "",
    password: "",
    isPasswordVisible: false,
    authenticateText: "",
  });
  const [errorMsg, setErrorMsg] = useState<String>("");

  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setFormData((prevFormObj) => ({
      ...prevFormObj,
      isPasswordVisible: !prevFormObj.isPasswordVisible,
    }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "email") {
      setFormData((prevFormObj) => ({ ...prevFormObj, email: value }));
    } else {
      setFormData((prevFormObj) => ({ ...prevFormObj, password: value }));
    }
  };

  //   const authenticateUser = async () => {
  //     const { email, password } = formState;

  //     try {
  //       const response = await fetch("https://reqres.in/api/login", {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({ email, password }),
  //       });

  //       if (response.ok) {
  //         const data = await response.json();
  //         const token = data.token;
  //         setFormState((prevState) => ({
  //           ...prevState,
  //           authenticateText: "Login Successful",
  //         }));
  //         localStorage.setItem("token", JSON.stringify(token));
  //         navigate("/");
  //       } else {
  //         setFormState((prevState) => ({
  //           ...prevState,
  //           authenticateText: "Invalid email or password",
  //         }));
  //       }
  //     } catch (error: any) {
  //       setFormState((prevState) => ({
  //         ...prevState,
  //         authenticateText: error.message,
  //       }));
  //     }
  //   };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // const auth = getAuth();
    signInWithEmailAndPassword(auth, formData.email, formData.password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigate("/");
      })
      .catch((error) => {
        setErrorMsg("*user doesn't exist, Please create an account");
      });
  };

  // const loginHandlerWithGoogleIcon = async () => {
  //   const provider = new GoogleAuthProvider();
  //   await signInWithPopup(auth, provider);
  //   navigate("/home");
  // };

  return (
    <Box sx={signInStyles.mainContainer}>
      <Box sx={signInStyles.childContainer}>
        <Box sx={signInStyles.leftContainer}>
          <Box sx={signInStyles.whatsAppTopContainer}>
            <Box sx={signInStyles.whatsAppLogoContainer}>
              <WhatsAppIcon sx={signInStyles.whatsAppIcon} />
              <Typography component="h2" sx={signInStyles.whatsAppText}>
                WhatsApp
              </Typography>
            </Box>
          </Box>
          <Box sx={signInStyles.createAccountBottomContainer}>
            <Box sx={signInStyles.createAccountBottomChildContainer}>
              <Typography component="h1" sx={signInStyles.createAccountText}>
                Login
              </Typography>
              <FormControl
                sx={signInStyles.formContainer}
                onSubmit={handleSubmit}
                component="form"
              >
                <Stack direction={"column"} spacing={4}>
                  <TextField
                    sx={signInStyles.inputField}
                    id="email"
                    label="Email"
                    variant="standard"
                    type="email"
                    name="email"
                    onChange={handleInputChange}
                  />
                  <TextField
                    sx={signInStyles.inputField}
                    id="password"
                    label="Password"
                    variant="standard"
                    type={formData.isPasswordVisible ? "text" : "password"}
                    name="password"
                    onChange={handleInputChange}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={togglePasswordVisibility}
                            edge="end"
                            sx={signInStyles.visibIcon}
                          >
                            {formData.isPasswordVisible ? (
                              <VisibilityOffIcon />
                            ) : (
                              <VisibilityIcon />
                            )}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    sx={signInStyles.signInBtn}
                  >
                    Login
                  </Button>
                  {errorMsg && (
                    <Typography sx={signInStyles.errorMsg}>
                      {errorMsg}
                    </Typography>
                  )}
                </Stack>
              </FormControl>

              <Divider sx={signInStyles.signUpWithText}>or signin with</Divider>
              <Stack
                sx={signInStyles.thirdPartySignUp}
                direction={"row"}
                alignItems={"center"}
                justifyContent={"center"}
                spacing={2}
              >
                <IconButton sx={signInStyles.iconButton}>
                  <FacebookIcon sx={signInStyles.signInIcons} />
                </IconButton>
                <IconButton sx={signInStyles.iconButton}>
                  <InstagramIcon sx={signInStyles.signInIcons} />
                </IconButton>
                <IconButton
                  sx={signInStyles.iconButton}
                  // onClick={loginHandlerWithGoogleIcon}
                >
                  <GoogleIcon sx={signInStyles.signInIcons} />
                </IconButton>
              </Stack>
              <Typography sx={signInStyles.alreadyText}>
                Don't have an account?{" "}
                <Box component="span" sx={signInStyles.loginHereText}>
                  <Link
                    to="/signup"
                    style={{
                      textDecoration: "none",
                      color: "#0B6057",
                      fontWeight: "600",
                      fontSize: "13px",
                    }}
                  >
                    Register Here
                  </Link>
                </Box>
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box sx={signInStyles.rightContainer}>
          <Box sx={signInStyles.rightChildContainer}>
            <Typography sx={signInStyles.rightContainerText}>
              LOGIN <Box component="br" />
              WHATSAPP <Box component="br" />
              ACCOUNT <Box component="br" />
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SignIn;
