import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import {
  Avatar,
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  Grid,
  Tooltip,
  Typography,
} from "@mui/material";
import "../Style/Style.css";
import { Key } from "@mui/icons-material";

const dataCard = [
  {
    id: 1,
    image: "ghmn",
    cardName: "Pizza",
    carSubName: "BBQ",
    price: "1800",
  },
  {
    id: 2,
    image: "ghmn",
    cardName: "Pizza",
    carSubName: "Hot and spyce",
    price: "2000",
  },
  {
    id: 3,
    image: "ghmn",
    cardName: "Pizza",
    carSubName: "tandoori chicken ",
    price: "2500",
  },
  {
    id: 4,
    image: "ghmn",
    cardName: "Pizza",
    carSubName: "cheese",
    price: "3000",
  },
 
];

export default function Dashbord() {
  return (
    <>
      <Box
        sx={{
          padding: 10,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* <Carousel className="main-slide" showThumbs={false} showStatus={false} style={{ maxWidth: '60%' }}> */}
        <Carousel
          className="main-slide"
          autoPlay={true}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
        >
          <div>
            <img
              src="https://cdn141.picsart.com/317513228192211.png?to=crop&type=webp&r=1456x1456&q=85"
              height="auto"
              width="200px"
            />
          </div>
          <div>
            <img
              src="https://cdn130.picsart.com/249619770004212.png?to=crop&type=webp&r=1456x1147&q=85"
              height="auto"
              width="200px"
            />
          </div>
          <div>
            <img
              src="https://cdn130.picsart.com/289328266010211.png?to=crop&type=webp&r=1456x712&q=85"
              height="auto"
              width="200px"
            />
          </div>
        </Carousel>
      </Box>

      <Grid container spacing={2} margin={3}>
        <Grid key={Key} item xs={6} sm={4} md={3} lg={2.4} xl={2.4}>
          <Card
            sx={{ Width: 345, height: 300, borderRadius: 6, backgroundColor: 'rgba(197, 235, 170, 0.2)' }} 
            elevation={10}
          >
            <CardActionArea>
              <Box
                sx={{ height: 260, padding: 2 }}
                // onClick={() => {
                //   navigate(`/DigiBill/${item.card_id}`);
                // }}
              >
                <CardHeader
                  sx={{
                    flexDirection: "column",
                    justifyContent: "center",
                    textAlign: "center",
                    height: 140,
                    overflow: "hidden",
                  }}
                  title={
                    <Typography gutterBottom variant="h5" component="h2">
                      Pan Pizza
                    </Typography>
                  }
                  subheader="BBQ Chiken"
                />
              </Box>
            </CardActionArea>
            <Typography sx={{ textAlign: 'center', marginTop: 'auto' }} >eprice is 2800</Typography>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}
