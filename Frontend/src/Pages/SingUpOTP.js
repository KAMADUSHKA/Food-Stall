import React from 'react'
import { useNavigate } from 'react-router-dom';
import * as Yup from "yup";
import { Form, Formik } from 'formik';
import { Box, Button, Card, CardContent, CardHeader, Container, Divider, Grid, Stack } from '@mui/material';
import { ModifiedTextField } from '../Theam/Theam';


export default function SingUpOTP() {
  const navigate = useNavigate();

  const initialValues = {
    // departmentID: "",
    NO_1: "",
    No_2: "",
    No_3: "",
    No_4: "",
    No_5:""


  };

  const validationSchema = Yup.object().shape({
    // departmentID: Yup.string().required("Emplyee ID is required"),
    NO_1: Yup.string().required("required"),
    No_2:Yup.string().required("required"),
    No_3:Yup.string().required("required"),
    No_4:Yup.string().required("required"),
    No_5:Yup.string().required("required")
  });


  const handleCreating = (values) => {
    console.log("valuse : ", values);
    navigate("/Profile");
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
                  navigate("/SingUp");
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
                        sx={{ justifyContent: "space-around"  }}
                      >
                        <Grid item xs={12} md={7} lg={7} xl={8} margin={2}>
                          <Card sx={{ borderRadius: 6 }} elevation={10}>
                            {/* <CardHeader title="ADD PROFILE"></CardHeader> */}
                            {/* <hr
                              style={{
                                color: "white",
                                marginLeft: 15,
                                marginRight: 15,
                              }}
                            /> */}
                            <CardContent>
                              <Box
                                sx={{
                                  alignItems: "center",
                                  display: "flex",
                                  flexDirection: "column",
                                }}
                              >
                                <Grid container spacing={1}  sx={{display: "flex", justifyContent: "center",  textAlign: "center" }}>
                                <Grid item xs={12} sm={12} md={12} padding={1} sx={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                                  <Button
                                    // type="submit"
                                    variant="outlined"
                                    // disabled={!(isValid || isSubmitting)}
                                    sx={{
                                      flexDirection: "column",
                                      justifyContent: "center",
                                      textAlign: "center",
                                      marginBottom: 10,
                                      // margin: "auto",
                                      borderRadius: 3,
                                      color:"rgb(18, 104, 18)",
                                      borderColor: "rgb(18, 104, 18)"
                                      // backgroundColor:"rgb(18, 104, 18)",
                                    }}
                                  >
                                    Request OTP
                                  </Button>
                                  </Grid>
                                  <Divider/>
                                  
                            
                                  <Grid item xs={2.3} sm={1.8} md={2} lg={1.5} padding={1}>
                                    <ModifiedTextField
                                      fullWidth
                                      label=""
                                      name="NO_1"
                                      value={values.NO_1}
                                      onBlur={handleBlur}
                                      helperText={errors.NO_1}
                                      // onChange={handleChange}
                                      onChange={(e) => {
                                        // Use regex to allow only single digits
                                        if (/^\d{0,1}$/.test(e.target.value)) {
                                          handleChange(e);
                                        }
                                      }}
                                      error={Boolean(
                                        touched.NO_1 &&
                                          errors.NO_1
                                      )}
                                      // required
                                    />
                                  </Grid>
                                  <Grid item xs={2.3} sm={1.8} md={2} lg={1.5} padding={1}>
                                    <ModifiedTextField
                                      fullWidth
                                      label=""
                                      name="No_2"
                                      value={values.No_2}
                                      onBlur={handleBlur}
                                      helperText={errors.No_2}
                                      // onChange={handleChange}
                                      onChange={(e) => {
                                        if (/^\d{0,1}$/.test(e.target.value)) {
                                          handleChange(e);
                                        }
                                      }}
                                      error={Boolean(
                                        touched.No_2 &&
                                          errors.No_2
                                      )}
                                      // required
                                    />
                                  </Grid>
                                  <Grid item xs={2.3} sm={1.8} md={2} lg={1.5} padding={1}>
                                    <ModifiedTextField
                                      fullWidth
                                      label=""
                                      name="No_3"
                                      value={values.No_3}
                                      onBlur={handleBlur}
                                      helperText={errors.No_3}
                                      // onChange={handleChange}
                                      onChange={(e) => {
                                        if (/^\d{0,1}$/.test(e.target.value)) {
                                          handleChange(e);
                                        }
                                      }}
                                      error={Boolean(
                                        touched.No_3 &&
                                          errors.No_3
                                      )}
                                      // required
                                    />
                                  </Grid>
                                  <Grid item xs={2.3} sm={1.8} md={2} lg={1.5} padding={1}>
                                    <ModifiedTextField
                                      fullWidth
                                      label=""
                                      name="No_4"
                                      value={values.No_4}
                                      onBlur={handleBlur}
                                      helperText={errors.No_4}
                                      // onChange={handleChange}
                                      onChange={(e) => {
                                        if (/^\d{0,1}$/.test(e.target.value)) {
                                          handleChange(e);
                                        }
                                      }}
                                      error={Boolean(
                                        touched.No_4 &&
                                          errors.No_4
                                      )}
                                      // required
                                    />
                                  </Grid>
                                  <Grid item xs={2.3} sm={1.8} md={2} lg={1.5} padding={1}>
                                    <ModifiedTextField
                                      fullWidth
                                      label=""
                                      name="No_5"
                                      value={values.No_5}
                                      onBlur={handleBlur}
                                      helperText={errors.No_5}
                                      // onChange={handleChange}
                                      onChange={(e) => {
                                        if (/^\d{0,1}$/.test(e.target.value)) {
                                          handleChange(e);
                                        }
                                      }}
                                      error={Boolean(
                                        touched.No_5 &&
                                          errors.No_5
                                      )}
                                      // required
                                    />
                                  </Grid>

                                  <Divider/>
                                  <br/>
                                  <br/>
                                  <Grid item xs={12} sm={12} md={12} padding={1} sx={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                                  <Button
                                    type="submit"
                                    variant="contained"
                                    disabled={!(isValid || isSubmitting)}
                                    sx={{
                                      flexDirection: "column",
                                      justifyContent: "center",
                                      textAlign: "center",
                                     marginTop: 10,
                                      // margin: "auto",
                                      borderRadius: 3,
                                      backgroundColor:"rgb(18, 104, 18)",
                                    }}
                                  >
                                    Validate
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
