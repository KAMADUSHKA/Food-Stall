import {
  Box,
  Card,
  CardHeader,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";

export default function Plans_and_Diets() {
  return (
    <>
      <Container>
        <Grid container spacing={3} marginTop={5} marginBottom={5}>
          <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
            <Card
              // className="nutritionMeal-card"
              sx={{
                Width: 365,
                height: 330,
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
                    marginTop:2
                  }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
                    height="auto"
                    width="380px"
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
                  }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
                    height="auto"
                    width="300px"
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
                    marginTop:4
                  }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
                    height="auto"
                    width="350px"
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
                    marginTop:2
                  }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
                    height="auto"
                    width="380px"
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
                    marginTop:2
                  }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
                    height="auto"
                    width="300px"
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
                    marginTop:2
                  }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
                    height="auto"
                    width="380px"
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
  );
}
