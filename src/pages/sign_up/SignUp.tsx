import {
  Box,
  Button,
  Divider,
  FormControl,
  IconButton,
  InputAdornment,
  NativeSelect,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import signUpStyles from "./SignUp.Styles";
import React, { useState } from "react";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GoogleIcon from "@mui/icons-material/Google";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

interface SignUpFormDataInterface {
  email: string;
  password: string;
  isPasswordVisible: boolean;
  authenticateText: string;
  phoneNumber: string;
}

const SignUp: React.FC = () => {
  console.log("login");
  const [formData, setFormData] = useState<SignUpFormDataInterface>({
    email: "",
    password: "",
    isPasswordVisible: false,
    authenticateText: "",
    phoneNumber: "",
  });

  const togglePasswordVisibility = () => {
    setFormData((prevFormObj) => ({
      ...prevFormObj,
      isPasswordVisible: !prevFormObj.isPasswordVisible,
    }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "phoneNumber") {
      setFormData((prevFormObj) => ({ ...prevFormObj, phoneNumber: value }));
    } else if (name === "email") {
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
    // authenticateUser();
  };

  return (
    <Box sx={signUpStyles.mainContainer}>
      <Box sx={signUpStyles.childContainer}>
        <Box sx={signUpStyles.leftContainer}>
          <Box sx={signUpStyles.whatsAppTopContainer}>
            <Box sx={signUpStyles.whatsAppLogoContainer}>
              <WhatsAppIcon sx={signUpStyles.whatsAppIcon} />
              <Typography component="h2" sx={signUpStyles.whatsAppText}>
                WhatsApp
              </Typography>
            </Box>
          </Box>
          <Box sx={signUpStyles.createAccountBottomContainer}>
            <Box sx={signUpStyles.createAccountBottomChildContainer}>
              <Typography component="h1" sx={signUpStyles.createAccountText}>
                Create a New Account
              </Typography>
              <FormControl sx={signUpStyles.formContainer}>
                <Stack direction={"column"} spacing={4}>
                  <TextField
                    sx={signUpStyles.inputField}
                    id="phone"
                    label="Phone"
                    variant="standard"
                    type="number"
                    name="phoneNumber"
                    onChange={handleInputChange}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <NativeSelect
                            defaultValue={91}
                            inputProps={{
                              name: "phoneNumberCodes",
                              id: "uncontrolled-native",
                            }}
                            sx={signUpStyles.phoneNumberCode}
                          >
                            <option value={91}>+91</option>
                            <option value={92}>+92</option>
                            <option value={93}>+93</option>
                          </NativeSelect>
                        </InputAdornment>
                      ),
                    }}
                  />
                  <TextField
                    sx={signUpStyles.inputField}
                    id="email"
                    label="Email"
                    variant="standard"
                    type="email"
                    name="email"
                    onChange={handleInputChange}
                  />
                  <TextField
                    sx={signUpStyles.inputField}
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
                            sx={signUpStyles.visibIcon}
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
                  <Button variant="contained" sx={signUpStyles.signUpBtn}>
                    Sign Up
                  </Button>
                </Stack>
              </FormControl>

              <Divider sx={signUpStyles.signUpWithText}>or signup with</Divider>
              <Stack
                sx={signUpStyles.thirdPartySignUp}
                direction={"row"}
                alignItems={"center"}
                justifyContent={"center"}
                spacing={2}
              >
                <IconButton sx={signUpStyles.iconButton}>
                  <FacebookIcon sx={signUpStyles.signUpIcons} />
                </IconButton>
                <IconButton sx={signUpStyles.iconButton}>
                  <InstagramIcon sx={signUpStyles.signUpIcons} />
                </IconButton>
                <IconButton sx={signUpStyles.iconButton}>
                  <GoogleIcon sx={signUpStyles.signUpIcons} />
                </IconButton>
              </Stack>
              <Typography sx={signUpStyles.alreadyText}>
                Already have an account?{" "}
                <Box component="span" sx={signUpStyles.loginHereText}>
                  <Link
                    to="/signin"
                    style={{
                      textDecoration: "none",
                      color: "#0B6057",
                      fontWeight: "600",
                      fontSize: "13px",
                    }}
                  >
                    Login Here
                  </Link>
                </Box>
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box sx={signUpStyles.rightContainer}>
          <Box sx={signUpStyles.rightChildContainer}>
            <Typography sx={signUpStyles.rightContainerText}>
              REGISTER <Box component="br" />
              WHATSAPP <Box component="br" />
              ACCOUNT <Box component="br" />
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SignUp;
