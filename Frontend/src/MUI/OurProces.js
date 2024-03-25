import React from 'react'
import {
    Box,
    Card,
    CardHeader,
    Container,
    Grid,
    Typography,
  } from "@mui/material";
  import P1 from "../Image/P1.jpg"
  import P2 from "../Image/P2.jpg"
  import P3 from "../Image/P3.jpg"
  import P4 from "../Image/P4.jpg"
  import P5 from "../Image/P5.jpg"
  import P6 from "../Image/P6.jpg"

export default function OurProces() {
  return (
    <>
    <Container>
      <Grid container spacing={3} marginTop={5} marginBottom={5}>
        <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
          <Card
            // className="nutritionMeal-card"
            sx={{
              Width: 365,
              height: 350,
              borderRadius: 6,

              // backgroundColor: "rgba(197, 235, 170, 0.1)",
              // border: "1px solid rgba(0, 0, 0, 0.1)",
            }}
            elevation={0}
          >
            <Box sx={{ height: 280, padding: 1, position: "relative",  }}>
              <CardHeader
                sx={{
                  flexDirection: "column",
                  justifyContent: "center",
                  textAlign: "center",
                  height: 80,
                  overflow: "hidden",
                }}
                title={
                  <Typography gutterBottom variant="h4" component="h2">
                    Set Your Goal
                  </Typography>
                }
              />

              <Box
                sx={{
                  // backgroundColor: "rgba(255, 255, 255, 0.8)",
                  height: 180,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 6,
                  marginTop:5
                }}
              >
                <img
                  src={P1}
                  height="auto"
                  width="300px"
                  style={{ borderRadius: '10px', maxWidth: '100%', height: 'auto' }}
                  alt=""
                  
                />
              </Box>
            </Box>
          </Card>
        </Grid>

        {/*  Second card  */}

        <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
          <Card
            className="nutritionMeal-card"
            sx={{
              Width: 365,
              height: 330,
              borderRadius: 6,
              // backgroundColor: "rgba(197, 235, 170, 0.1)",
              // border: "1px solid rgba(0, 0, 0, 0.1)",
            }}
            elevation={0}
          >
            <Box sx={{ height: 280, padding: 1, position: "relative" }}>
              <CardHeader
                sx={{
                  flexDirection: "column",
                  justifyContent: "center",
                  textAlign: "center",
                  height: 80,
                  overflow: "hidden",
                }}
                title={
                  <Typography gutterBottom variant="h4" component="h2">
                    Select Your Meal
                  </Typography>
                }
              />

              <Box
                sx={{
                  // backgroundColor: "rgba(255, 255, 255, 0.8)",
                  height: 180,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 5,
                  marginTop:2
                }}
              >
                <img
                  src={P2}
                  height="auto"
                  width="265px"
                  style={{ borderRadius: '10px', maxWidth: '100%', height: 'auto' }}
                  alt=""
                />
              </Box>
            </Box>
          </Card>
        </Grid>

        {/*  third card  */}

        <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
          <Card
            // className="nutritionMeal-card"
            sx={{
              Width: 365,
              height: 380,
              borderRadius: 6,

              // backgroundColor: "rgba(197, 235, 170, 0.1)",
              // border: "1px solid rgba(0, 0, 0, 0.1)",
            }}
            elevation={0}
          >
            <Box sx={{ height: 280, padding: 1, position: "relative" }}>
              <CardHeader
                sx={{
                  flexDirection: "column",
                  justifyContent: "center",
                  textAlign: "center",
                  height: 80,
                  overflow: "hidden",
                }}
                title={
                  <Typography gutterBottom variant="h4" component="h2">
                    Enter Your Information
                  </Typography>
                }
              />

              <Box
                sx={{
                  // backgroundColor: "rgba(255, 255, 255, 0.8)",
                  height: 180,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 5,
                  marginTop:5
                }}
              >
                <img
                  src={P3}
                  height="auto"
                  width="280px"
                  style={{ borderRadius: '10px', maxWidth: '100%', height: 'auto' }}
                  alt=""
                />
              </Box>
            </Box>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
          <Card
            // className="nutritionMeal-card"
            sx={{
              Width: 365,
              height: 380,
              borderRadius: 6,

              // backgroundColor: "rgba(197, 235, 170, 0.1)",
              // border: "1px solid rgba(0, 0, 0, 0.1)",
            }}
            elevation={0}
          >
            <Box sx={{ height: 280, padding: 1, position: "relative" }}>
              <CardHeader
                sx={{
                  flexDirection: "column",
                  justifyContent: "center",
                  textAlign: "center",
                  height: 80,
                  overflow: "hidden",
                }}
                title={
                  <Typography gutterBottom variant="h4" component="h2">
                    place Your Order
                  </Typography>
                }
              />

              <Box
                sx={{
                  // backgroundColor: "rgba(255, 255, 255, 0.8)",
                  height: 180,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 5,
                  marginTop:5
                }}
              >
                <img
                  src={P4}
                  height="auto"
                  width="280px"
                  style={{ borderRadius: '10px', maxWidth: '100%', height: 'auto' }}
                  alt=""
                />
              </Box>
            </Box>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
          <Card
            // className="nutritionMeal-card"
            sx={{
              Width: 365,
              height: 350,
              borderRadius: 6,

              // backgroundColor: "rgba(197, 235, 170, 0.1)",
              // border: "1px solid rgba(0, 0, 0, 0.1)",
            }}
            elevation={0}
          >
            <Box sx={{ height: 280, padding: 1, position: "relative" }}>
              <CardHeader
                sx={{
                  flexDirection: "column",
                  justifyContent: "center",
                  textAlign: "center",
                  height: 80,
                  overflow: "hidden",
                }}
                title={
                  <Typography gutterBottom variant="h4" component="h2">
                    We Process and Deliver Your Order
                  </Typography>
                }
              />

              <Box
                sx={{
                  // backgroundColor: "rgba(255, 255, 255, 0.8)",
                  height: 180,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 5,
                  marginTop:4.5
                }}
              >
                <img
                  src={P5}
                  height="auto"
                  width="330px"
                  style={{ borderRadius: "10px" }}
                  alt=""
                />
              </Box>
            </Box>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
          <Card
            // className="nutritionMeal-card"
            sx={{
              Width: 365,
              height: 350,
              borderRadius: 6,

              // backgroundColor: "rgba(197, 235, 170, 0.1)",
              // border: "1px solid rgba(0, 0, 0, 0.1)",
            }}
            elevation={0}
          >
            <Box sx={{ height: 280, padding: 1, position: "relative" }}>
              <CardHeader
                sx={{
                  flexDirection: "column",
                  justifyContent: "center",
                  textAlign: "center",
                  height: 80,
                  overflow: "hidden",
                  
                }}
                title={
                  <Typography gutterBottom variant="h4" component="h2">
                    Enjoy Your Meals
                  </Typography>
                }
              />

              <Box
                sx={{
                  // backgroundColor: "rgba(255, 255, 255, 0.8)",
                  height: 180,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 5,
                  marginTop:2.5
                }}
              >
                <img
                  src={P6}
                  height="auto"
                  width="390px"
                  style={{ borderRadius: '10px', maxWidth: '100%', height: 'auto' }}
                  alt=""
                />
              </Box>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Container>
  </>
  )
}
