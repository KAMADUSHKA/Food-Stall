import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Box, Button, Card, CardContent, CardHeader, Container, Divider, Grid, IconButton, InputAdornment, Paper, Stack, Typography, useMediaQuery } from '@mui/material';
import React, { useState } from 'react'
import { ModifiedTextField } from '../Theam/Theam';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useTheme } from '@emotion/react';
import * as Yup from "yup";
import { Form, Formik } from 'formik';

export default function Profile() {
  const navigate = useNavigate();

  const initialValues = {
    // departmentID: "",
    FirstName: "",
  };

  const validationSchema = Yup.object().shape({
    // departmentID: Yup.string().required("Emplyee ID is required"),
    FirstName: Yup.string().required("First Name is required"),
  });


  const handleCreating = (values) => {
    console.log("valuse : ", values);
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
          validationSchema={validationSchema}
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
                            <CardHeader title="ADD PROFILE"></CardHeader>
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

                                  <Divider />
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
                                    Create Profile
                                  </Button>
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
