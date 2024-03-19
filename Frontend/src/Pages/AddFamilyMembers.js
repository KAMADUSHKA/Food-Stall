import { Box, Button, Card, CardContent, CardHeader, Checkbox, Container, Divider, FormControl, FormControlLabel, FormGroup, FormLabel, Grid, Radio, RadioGroup, Stack } from '@mui/material';
import React from 'react'
import { ModifiedTextField } from '../Theam/Theam';
import { useNavigate } from 'react-router-dom';
import * as Yup from "yup";
import {Form, Formik } from 'formik';

export default function AddFamilyMembers() {
    const navigate = useNavigate();

    const initialValues = {
      // departmentID: "",
      BirthYear: "",
      Height: "",
      Weight: "",
      Gender: "",
      Allergies: "",
      NickName:"",
      ExtracurricularActivities:"",
      sick: [],
    };
  
    const validationSchema = Yup.object().shape({
      // departmentID: Yup.string().required("Emplyee ID is required"),
      BirthYear: Yup.string().required("First Birth Year is required"),
      Height: Yup.string().required("Last Height is required"),
      Weight: Yup.string().required("First Weight is required"),
      // Gender: Yup.boolean().required("Gender is required"),
      Allergies: Yup.string().required("First Allergies is required"),
      // sick: Yup.array().min(1, "Select at least one sickness"),
      NickName:Yup.string().required("First Nick Name is required"),
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
          marginTop: 4,
          marginBottom: 4,
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
                            <CardHeader title="ADD Member"></CardHeader>
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
                                      label="Nick Name"
                                      name="NickName"
                                      value={values.NickName}
                                      onBlur={handleBlur}
                                      helperText={errors.NickName}
                                      onChange={handleChange}
                                      error={Boolean(
                                        touched.NickName && errors.NickName
                                      )}
                                      // required
                                    />
                                  </Grid>
                                  <Grid item xs={12} sm={6} md={6} padding={1}>
                                    <ModifiedTextField
                                      fullWidth
                                      label="Birth Year"
                                      name="BirthYear"
                                      value={values.BirthYear}
                                      onBlur={handleBlur}
                                      helperText={errors.BirthYear}
                                      onChange={handleChange}
                                      error={Boolean(
                                        touched.BirthYear && errors.BirthYear
                                      )}
                                      // required
                                    />
                                  </Grid>
                                  <Grid item xs={12} sm={6} md={6} padding={1}>
                                    <ModifiedTextField
                                      fullWidth
                                      label="Height"
                                      name="Height"
                                      value={values.Height}
                                      onBlur={handleBlur}
                                      helperText={errors.Height}
                                      onChange={handleChange}
                                      error={Boolean(
                                        touched.Height && errors.Height
                                      )}
                                      // required
                                    />
                                  </Grid>
                                  <Grid item xs={12} sm={6} md={6} padding={1}>
                                    <ModifiedTextField
                                      fullWidth
                                      label="Weight"
                                      name="Weight"
                                      value={values.Weight}
                                      onBlur={handleBlur}
                                      helperText={errors.Weight}
                                      onChange={handleChange}
                                      error={Boolean(
                                        touched.Weight && errors.Weight
                                      )}
                                      // required
                                    />
                                  </Grid>
                                  

                                  <Grid item xs={12} sm={6} md={6} padding={1}>
                                    <ModifiedTextField
                                      fullWidth
                                      label="Allergies"
                                      name="Allergies"
                                      value={values.Allergies}
                                      onBlur={handleBlur}
                                      helperText={errors.Allergies}
                                      onChange={handleChange}
                                      error={Boolean(
                                        touched.Allergies && errors.Allergies
                                      )}
                                      // required
                                    />
                                  </Grid>

                                  <Grid item xs={12} sm={6} md={6} padding={1}>
                                    <ModifiedTextField
                                      fullWidth
                                      label="ExtracurricularActivities"
                                      name="ExtracurricularActivities"
                                      value={values.ExtracurricularActivities}
                                      onBlur={handleBlur}
                                      helperText={errors.ExtracurricularActivities}
                                      onChange={handleChange}
                                      error={Boolean(
                                        touched.ExtracurricularActivities && errors.ExtracurricularActivities
                                      )}
                                      // required
                                    />
                                  </Grid>

                                  
                                  <Grid
                                    item
                                    xs={12}
                                    padding={1}
                                    sx={{
                                      display: "flex",
                                      justifyContent: "center",
                                      alignItems: "center",
                                    }}
                                  >
                                    <FormControl>
                                      <FormLabel id="demo-radio-buttons-group-label">
                                        Gender
                                      </FormLabel>
                                      <RadioGroup
                                        aria-labelledby="demo-radio-buttons-group-label"
                                        defaultValue="female"
                                        name="Gender"
                                        onChange={handleChange}
                                        row
                                      >
                                        <Box>
                                          {/* <Grid item xs={12} md={2} padding={1}> */}
                                          <FormControlLabel
                                            value="female"
                                            control={<Radio size="small" />}
                                            label="Female"
                                          />
                                          {/* </Grid> */}
                                          {/* <Grid item xs={12} md={2} padding={1}> */}
                                          <FormControlLabel
                                            value="male"
                                            control={<Radio size="small" />}
                                            label="Male"
                                          />
                                          {/* </Grid> */}
                                          {/* <Grid item xs={12} md={2} padding={1}> */}
                                          <FormControlLabel
                                            value="other"
                                            control={<Radio size="small" />}
                                            label="Other"
                                          />
                                          {/* </Grid> */}
                                        </Box>
                                      </RadioGroup>
                                    </FormControl>
                                  </Grid>

                                  <Grid
                                    item
                                    xs={12}
                                    padding={1}
                                    sx={{
                                      display: "flex",
                                      justifyContent: "center",
                                      alignItems: "center",
                                    }}
                                  >
                                    <FormControl component="fieldset">
                                      <FormLabel component="legend">
                                        Are you having
                                      </FormLabel>
                                      <FormGroup row>
                                        <FormControlLabel
                                          control={<Checkbox size="small" />}
                                          label="Diabetes"
                                          name="sick"
                                          value="Diabetes"
                                          onChange={handleChange}
                                        />
                                        <FormControlLabel
                                          control={<Checkbox size="small" />}
                                          label="Cholesterol"
                                          name="sick"
                                          value="Cholesterol"
                                          onChange={handleChange}
                                        />
                                        <FormControlLabel
                                          control={<Checkbox size="small" />}
                                          label="Hypertension"
                                          name="sick"
                                          value="Hypertension"
                                          onChange={handleChange}
                                        />
                                        {/* Add more checkboxes as needed */}
                                      </FormGroup>
                                    </FormControl>
                                  </Grid>

                                  <Divider />
                                  <Grid
                                    item
                                    xs={12}
                                    sm={12}
                                    md={12}
                                    padding={1}
                                    sx={{ display: "flex" }}
                                  >
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
                                        backgroundColor: "rgb(18, 104, 18)",
                                      }}
                                    >
                                      Add More Family Member
                                    </Button>
                                  </Grid>
                                  <Grid
                                    item
                                    xs={12}
                                    sm={12}
                                    md={12}
                                    padding={1}
                                    // sx={{ display: "flex" }}
                                  >
                                    <Box
                                      sx={{
                                        marginTop: 2,
                                        display: "flex",
                                        justifyContent: "space-between",
                                      }}
                                    >
                                      <Button
                                        // disabled={isSubmitting}
                                        // type="submit"
                                        variant="text"
                                        fullWidth
                                        onClick={() => {
                                          navigate("/Profile");
                                        }}
                                        sx={{
                                          borderRadius: 3,
                                          fontSize: 10,
                                          color: "rgb(18, 104, 18)",
                                          // backgroundColor: "rgb(18, 104, 18)",
                                        }}
                                      >
                                        Update My Profile
                                      </Button>
                                      <Button
                                        // disabled={isSubmitting}
                                        // type="submit"
                                        variant="text"
                                        fullWidth
                                        onClick={() => {
                                          navigate("/");
                                        }}
                                        sx={{
                                          borderRadius: 3,
                                        //   color: "rgb(18, 104, 18)",
                                          // backgroundColor: "rgb(18, 104, 18)",
                                        }}
                                      >
                                       Cancel
                                      </Button>
                                    </Box>
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
