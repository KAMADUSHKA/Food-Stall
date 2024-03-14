import React, { useState } from "react";
import "../Style/Style.css";
import AdeonaLogo from "../componant/AdeonaLogo.png";

import {
  Grid,
  Paper,
  Button,
  InputAdornment,
  IconButton,
  Stack,
  Typography,
  useMediaQuery,
  Avatar,
  Box,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { ModifiedTextField } from "../Theam/Theam";
import { useTheme } from "@mui/material/styles";
import { Formik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { handleLogin } from "./handleLogin";
import Loade from "../componant/Loader";
import { services } from "../Services/services";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const theme = useTheme();
  const matchDownSM = useMediaQuery(theme.breakpoints.down("md"));
  const paperStyle = {
    padding: 5,
    maxWidth: { xs: 400, lg: 475 },
    margin: { xs: 2.5, md: 3 },
    borderRadius: 8,
    "& > *": {
      flexGrow: 1,
      flexBasis: "50%",
    },
  };

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().max(255).required("User mail is required"),
    password: Yup.string()
      .max(255)
      .required("Password is required")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      ),
  });

  return (
    <>
      <Button
        variant="contained"
        sx={{
          marginTop: 4,
          marginLeft: 4,
          borderRadius: 5,
          paddingLeft: 1,
          paddingRight: 1,
          paddingTop: 0.5,
          paddingBottom: 0.5,
          backgroundColor: "rgb(216, 0, 50, 0.2)",
          color: "red",
          fontSize: 16,
          border: "1px solid red",
        }}
        onClick={() => {
          navigate("/");
        }}
      >
        <b> {" < "} back </b>
      </Button>
      <Formik
        initialValues={{ username: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(false);
          setLoading(true);
          dispatch(handleLogin(values, setSubmitting, navigate, setLoading));
        }}
      >
        {({
          errors,
          handleBlur,
          handleChange,
          handleSubmit,
          isSubmitting,
          touched,
          values,
        }) => (
          <form noValidate onSubmit={handleSubmit}>
            <Grid container justifyContent="center" alignItems="center">
              <Grid item sx={{ m: { xs: 3, sm: 3 }, mb: 0 }}>
                <Paper elevation={10} sx={paperStyle}>
                  <Grid align={"center"} marginTop={1}>
                    {/* <img alt="" src={AdeonaLogo} height={70} width={110} /> */}
                    <Avatar
                      alt="Remy Sharp"
                      src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?size=626&ext=jpg&ga=GA1.1.972764281.1692088791&semt=ais"
                      sx={{ width: 150, height: 150 ,border: '1px solid #000',}}
                     
                    />
                    <Typography fontSize="40px">Login</Typography>
                    <Grid item>
                      <Stack
                        alignItems="center"
                        justifyContent="center"
                        spacing={1}
                      >
                        <Typography
                          fontWeight="bold"
                          color="rgb(18, 104, 18)"
                          gutterBottom
                          variant={matchDownSM ? "h3" : "h2"}
                        >
                          Hi, Welcome to Food Stall
                        </Typography>
                        <Typography
                          variant="caption"
                          fontSize="16px"
                          textAlign={matchDownSM ? "center" : "inherit"}
                        >
                          Enter your credentials to continue
                        </Typography>
                      </Stack>
                    </Grid>
                    <br />
                    <ModifiedTextField
                      type="email"
                      id="outlined-basic"
                      label="User Email"
                      name="username"
                      placeholder="Enter Your User Email"
                      variant="outlined"
                      fullWidth
                      value={values.username}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      helperText={errors.username}
                      error={Boolean(touched.username && errors.username)}
                    />
                    <br />
                   
                    <ModifiedTextField
                      id="outlined-basic"
                      label="Password"
                      name="password"
                      placeholder="Enter your Password"
                      variant="outlined"
                      fullWidth
                      type={showPassword ? "text" : "password"}
                      value={values.password}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      helperText={errors.password}
                      error={Boolean(touched.password && errors.password)}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton onClick={togglePasswordVisibility}>
                              {showPassword ? (
                                <Visibility />
                              ) : (
                                <VisibilityOff />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                    <br />
                    <br />
                    <Button
                      disabled={isSubmitting}
                      type="submit"
                      variant="contained"
                      fullWidth
                      sx={{
                        borderRadius: 3,
                        backgroundColor: "rgb(18, 104, 18)",
                      }}
                    >
                      LOGIN
                    </Button>
                    <Box sx={{marginTop:2, display: 'flex', justifyContent:"space-between"}}>
                    <Button
                      disabled={isSubmitting}
                      type="submit"
                      variant="text"
                      fullWidth
                      onClick={() => {
                        navigate("/");
                      }}
                      sx={{
                        borderRadius: 3,
                        fontSize:10,
                        color:"rgb(18, 104, 18)"
                        // backgroundColor: "rgb(18, 104, 18)",
                      }}
                    >
                      Forget Password
                    </Button><Button
                      disabled={isSubmitting}
                      type="submit"
                      variant="text"
                      fullWidth
                      onClick={() => {
                        navigate("/SingUp");
                      }}
                      sx={{
                        borderRadius: 3,
                        // backgroundColor: "rgb(18, 104, 18)",
                      }}
                    >
                      Sign Up
                    </Button>
                    </Box>
                  </Grid>
                </Paper>
              </Grid>
            </Grid>
            {loading && <Loade />}
          </form>
        )}
      </Formik>
    </>
  );
}
