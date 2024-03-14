import React from 'react'
import { useNavigate } from 'react-router-dom';
import { ModifiedTextField } from '../Theam/Theam';
import { useDispatch } from 'react-redux';
import { useTheme } from '@emotion/react';
import * as Yup from "yup";
import { Form, Formik } from 'formik';
import { Box, Button, Card, CardContent, CardHeader, Container, Divider, Grid, Stack } from '@mui/material';


export default function SingUp() {

    const navigate = useNavigate();

    const initialValues = {
      // departmentID: "",
      FirstName: "",
      LastName: "",
      Mobile: "",
      Password: "",
      ReEnterPassword:""

  
    };
  
    const validationSchema = Yup.object().shape({
      // departmentID: Yup.string().required("Emplyee ID is required"),
      FirstName: Yup.string().required("First Name is required"),
      LastName:Yup.string().required("Last Name is required"),
      Mobile:Yup.string().required("Last Name is required"),
      Password:Yup.string().required("Last Name is required"),
      ReEnterPassword:Yup.string().required("Last Name is required")
    });
  
  
    const handleCreating = (values) => {
      console.log("valuse : ", values);
      navigate("/SingUpOTP");
    };
  
  return (
    <>
     <Card
        sx={{
          borderRadius: 10,
          backgroundColor: "rgb(180, 180, 179, 0.5 )",
          marginLeft: 4,
          marginRight: 4,
          marginTop:4,
          marginBottom:4,
        }}
        elevation={2}
      >
        <Formik
          initialValues={initialValues}
        //   validationSchema={validationSchema}
          onSubmit={(values) => handleCreating(values)}
        >
          {({
            errors,
            touched,
            values,
            isSubmitting,
            handleBlur,
            handleChange,
            handleSubmit,
            isValid,
            setFieldValue,
          }) => (
            <Form noValidate onSubmit={handleSubmit}>
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

              <Box
                component="main"
                sx={{
                  flexGrow: 1,
                  py: 8,
                }}
              >
                <Container maxWidth="lg" sx={{ padding: 2 }}>
                  <Stack spacing={2}>
                    <div>
                      <Grid
                        container
                        spacing={2}
                        sx={{ justifyContent: "space-around" }}
                      >
                        <Grid item xs={12} md={7} lg={7} xl={8} margin={2}>
                          <Card sx={{ borderRadius: 6 }} elevation={10}>
                            <CardHeader title="SIGN UP"></CardHeader>
                            <hr
                              style={{
                                color: "white",
                                marginLeft: 15,
                                marginRight: 15,
                              }}
                            />
                            <CardContent>
                              <Box
                                sx={{
                                  alignItems: "center",
                                  display: "flex",
                                  flexDirection: "column",
                                }}
                              >
                                <Grid container spacing={1}>
                            
                                  <Grid item xs={12} sm={6} md={6} padding={1}>
                                    <ModifiedTextField
                                      fullWidth
                                      label="First Name"
                                      name="FirstName"
                                      value={values.FirstName}
                                      onBlur={handleBlur}
                                      helperText={errors.FirstName}
                                      onChange={handleChange}
                                      error={Boolean(
                                        touched.FirstName &&
                                          errors.FirstName
                                      )}
                                      // required
                                    />
                                  </Grid>
                                  <Grid item xs={12} sm={6} md={6} padding={1}>
                                    <ModifiedTextField
                                      fullWidth
                                      label="Last Name"
                                      name="LastName"
                                      value={values.LastName}
                                      onBlur={handleBlur}
                                      helperText={errors.LastName}
                                      onChange={handleChange}
                                      error={Boolean(
                                        touched.LastName &&
                                          errors.LastName
                                      )}
                                      // required
                                    />
                                  </Grid>
                                  <Grid item xs={12} sm={6} md={6} padding={1}>
                                    <ModifiedTextField
                                      fullWidth
                                      label="Mobile Number"
                                      name="Mobile"
                                      value={values.Mobile}
                                      onBlur={handleBlur}
                                      helperText={errors.Mobile}
                                      onChange={handleChange}
                                      error={Boolean(
                                        touched.Mobile &&
                                          errors.Mobile
                                      )}
                                      // required
                                    />
                                  </Grid>
                                  <Grid item xs={12} sm={6} md={6} padding={1}>
                                    <ModifiedTextField
                                      fullWidth
                                      label="Password"
                                      name="Password"
                                      value={values.Password}
                                      onBlur={handleBlur}
                                      helperText={errors.Password}
                                      onChange={handleChange}
                                      error={Boolean(
                                        touched.Password &&
                                          errors.Password
                                      )}
                                      // required
                                    />
                                  </Grid>
                                  <Grid item xs={12} sm={6} md={6} padding={1}>
                                    <ModifiedTextField
                                      fullWidth
                                      label="Re Enter Password"
                                      name="ReEnterPassword"
                                      value={values.ReEnterPassword}
                                      onBlur={handleBlur}
                                      helperText={errors.ReEnterPassword}
                                      onChange={handleChange}
                                      error={Boolean(
                                        touched.ReEnterPassword &&
                                          errors.ReEnterPassword
                                      )}
                                      // required
                                    />
                                  </Grid>

                                  
                                  <Grid item xs={12} sm={12} md={12} padding={1} sx={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                                  <Button
                                    type="submit"
                                    variant="contained"
                                    disabled={!(isValid || isSubmitting)}
                                    sx={{
                                      flexDirection: "column",
                                      justifyContent: "center",
                                      textAlign: "center",
                                      margin: "auto",
                                      borderRadius: 3,
                                      backgroundColor:"rgb(18, 104, 18)",
                                    }}
                                  >
                                    SingUp
                                  </Button>
                                  </Grid>
                                </Grid>
                              </Box>
                            </CardContent>
                          </Card>
                        </Grid>
                      </Grid>
                    </div>
                  </Stack>
                </Container>
              </Box>
            </Form>
          )}
        </Formik>
      </Card>
    </>
  )
}
