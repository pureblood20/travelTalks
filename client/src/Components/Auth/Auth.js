import {
  Grid,
  Typography,
  Button,
  Box,
  Container,
  CssBaseline,
  Paper,
} from "@mui/material";
import { GoogleLogin, googleLogout } from "@react-oauth/google";
import React, { useState } from "react";
import Input from "./Input";
import { AUTH_ACTION_TYPE } from "../../store/auth/auth.type";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const Auth = () => {
  const [isSignup, setIsSignUp] = useState(false);
  const [showPassword, setshowPassword] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = () => {};
  const handleShowPassword = () => {
    setshowPassword((prevPass) => !prevPass);
  };
  const handleSignIn = () => {
    setIsSignUp((prevState) => !prevState);
  };
  const handleClick = () => {
    console.log("git");
  };
  const createOrGetUser = (res) => {
    const decoded = jwt_decode(res.credential);
    localStorage.setItem("profile", JSON.stringify(decoded));
    dispatch({ type: AUTH_ACTION_TYPE.GOOGLE_SIGN_IN, data: decoded });
    navigate("/");
  };

  return (
    <div>
      <Container component="main" maxWidth="lg">
        <Box
          sx={{
            marginTop: 8,
            marginBottom: 8,
          }}
        >
          <Grid container>
            <CssBaseline />
            <Grid
              item
              xs={false}
              sm={4}
              md={7}
              sx={{
                backgroundImage: "url(https://source.unsplash.com/random)",
                backgroundRepeat: "no-repeat",
                backgroundColor: (t) =>
                  t.palette.mode === "light"
                    ? t.palette.grey[50]
                    : t.palette.grey[900],
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <Grid
              item
              xs={12}
              sm={8}
              md={5}
              component={Paper}
              elevation={6}
              square
            >
              <Box
                sx={{
                  my: 10,
                  mx: 4,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Typography component="h1" variant="h5">
                  {isSignup ? "SIGN UP" : "SIGN IN"}
                </Typography>
                <Box component="form" noValidate sx={{ mt: 2 }}>
                  {isSignup && (
                    <>
                      <Input
                        name="firstName"
                        type="text"
                        label="First Name"
                        handleChange={handleChange}
                      />{" "}
                      <br></br>
                      <Input
                        name="lastname"
                        type="text"
                        label="Last Name"
                        handleChange={handleChange}
                      />
                      <br></br>
                    </>
                  )}
                  <Input
                    name="email"
                    type="email"
                    label="Email Address"
                    handleChange={handleChange}
                  />
                  <br></br>
                  <Input
                    name="password"
                    type={showPassword ? "text" : "password"}
                    label="Password"
                    handleChange={handleChange}
                    handleShowPassword={handleShowPassword}
                  />
                  <br></br>
                  {isSignup && (
                    <>
                      <Input
                        name="confirmpassword"
                        label=" Repeat Password"
                        handleChange={handleChange}
                        type="password"
                      />{" "}
                      <br></br>
                    </>
                  )}

                  <Button
                    variant="outlined"
                    color="primary"
                    fullWidth
                    onClick={handleClick}
                  >
                    {isSignup ? "SIGN UP" : "SIGN IN"}
                  </Button>
                  <Grid container>
                    <Grid item xs>
                      {" "}
                      <br></br>
                      {isSignup ? (
                        <Typography variant="p">
                          <GoogleLogin
                            onSuccess={(res) => createOrGetUser(res)}
                            onError={(err) => console.log(err)}
                          />
                          Already have an account?
                          <Button
                            variant="text"
                            color="error"
                            onClick={handleSignIn}
                          >
                            SIGN IN
                          </Button>
                        </Typography>
                      ) : (
                        <Typography variant="p">
                          Dont have an account?
                          <Button
                            variant="text"
                            color="error"
                            onClick={handleSignIn}
                          >
                            SIGN UP
                          </Button>
                        </Typography>
                      )}
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default Auth;
