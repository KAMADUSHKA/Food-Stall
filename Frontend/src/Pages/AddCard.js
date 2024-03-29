import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React, { useRef, useState } from "react";
import { ModifiedTextField } from "../Theam/Theam";

import { Formik } from "formik";
// import { Formik, useField, useFormikContext } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import Loade from "../componant/Loader";
import { services } from "../Services/services";
// import BackButton from "../MUI/BackButton";

export default function AddCard() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleCreating = (values) => {
    setLoading(true);
    services.cardCreat(values).then((response) => {
      if (response.isSuccess) {
        console.log("card Data:", values);
        navigate("/Cards");
        alert("your card create successfully");
      } else {
        console.log("add card respons error");
      }

      setLoading(false);
    });
  };

  const validationSchema = Yup.object().shape({
    cardName: Yup.string().required("Card name is required"),
    cardDetails: Yup.string().required("Card details are required"),
    profile: Yup.mixed()
      .nullable()
      .notRequired()
      .test(
        "FILE_SIZE",
        "Uploaded file is too big.",
        ({ file: value }) => !value || (value && value?.size <= 200000)
      )
      .test(
        "FILE_FORMAT",
        "Uploaded file has unsupported format.",
        ({ file: value }) =>
          !value ||
          (value &&
            "image/jpg,image/jpeg,image/png,".includes(`${value?.type},`))
      ),
  });

  const handleUploadClick = () => {
    fileInputField.current.click();
  };

  const fileInputField = useRef(null);
  /////////
  // const [image, setImage] = useState("");

  const handleUpload = (e, setFiledValue) => {
    const { files: newFiles } = e.target;
    if (newFiles.length) {
      setFiledValue("profile", newFiles[0]);
      setUrl(URL.createObjectURL(newFiles[0]));
    }
  };
  // console.log(image);

  const [url, setUrl] = useState(null);

  return (
    <>
      <Formik
        initialValues={{ cardName: "", cardDetails: "", profile: {} }}
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
          <form noValidate onSubmit={handleSubmit}>
            <Button
              variant="contained"
              sx={{ marginTop: 4, marginLeft: 4, borderRadius: 3 }}
              onClick={() => {
                navigate("/Cards");
              }}
            >
              {" < "} back{" "}
            </Button>

            <Box
              component="main"
              sx={{
                flexGrow: 1,
                py: 8,
              }}
            >
              <Container maxWidth="lg" sx={{ padding: 2 }}>
                <Stack spacing={3}>
                  <div>
                    <Typography variant="h4">Add Card</Typography>
                    <br />
                  </div>
                  <div>
                    <Grid
                      container
                      spacing={2}
                      sx={{ justifyContent: "space-around" }}
                    >
                      <Grid item xs={12} sm={5} md={4} lg={4} xl={3} margin={2}>
                        <Card sx={{ borderRadius: 6 }} elevation={10}>
                          <CardContent>
                            <Box
                              sx={{
                                alignItems: "center",
                                display: "flex",
                                flexDirection: "column",
                              }}
                            >
                              <Avatar
                                src="https://dsuabgmmtxmj1.cloudfront.net/companyweb/adeona_new_logo_circle.png"
                                sx={{
                                  height: 110,
                                  mb: 2,
                                  width: 110,
                                }}
                              />
                            </Box>
                          </CardContent>
                          <Divider />
                          <CardActions>
                            <Button
                              variant="text"
                              onClick={handleUploadClick}
                              sx={{
                                justifyContent: "center",
                                textAlign: "center",
                                display: "flex",
                                margin: "auto",
                              }}
                            >
                              Upload picture
                            </Button>
                            <input
                              type="file"
                              accept=".png,.jpg"
                              ref={fileInputField}
                              onChange={(e) => handleUpload(e, setFieldValue)}
                              title=""
                              value=""
                              style={{ display: "block", opacity: 0, width: 0 }}
                            />
                          </CardActions>
                        </Card>
                      </Grid>
                      <Grid item xs={12} sm={5} md={6} lg={7} xl={8} margin={2}>
                        <Card sx={{ borderRadius: 6 }} elevation={10}>
                          <CardHeader
                            title="Package Data"
                            subheader="Add data of your new package"
                          ></CardHeader>
                          <CardContent>
                            <Box
                              sx={{
                                alignItems: "center",
                                display: "flex",
                                flexDirection: "column",
                              }}
                            >
                              <Grid container spacing={1}>
                                <Grid item xs={12} md={6} padding={1}>
                                  <ModifiedTextField
                                    fullWidth
                                    label="Card Name"
                                    name="cardName"
                                    value={values.cardName}
                                    onBlur={handleBlur}
                                    helperText={errors.cardName}
                                    onChange={handleChange}
                                    error={Boolean(
                                      touched.cardName && errors.cardName
                                    )}
                                    // required
                                  />
                                </Grid>
                                <Grid item xs={12} md={6} padding={1}>
                                  <ModifiedTextField
                                    fullWidth
                                    label="Card Details"
                                    name="cardDetails"
                                    value={values.cardDetails}
                                    onBlur={handleBlur}
                                    helperText={errors.cardDetails}
                                    onChange={handleChange}
                                    error={Boolean(
                                      touched.cardDetails && errors.cardDetails
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
                                  }}
                                >
                                  Create Package
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
          </form>
        )}
      </Formik>
      {loading && <Loade />}
    </>
  );
}
