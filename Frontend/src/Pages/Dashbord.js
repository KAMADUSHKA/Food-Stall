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
  Container,
  Grid,
  Tooltip,
  Typography,
} from "@mui/material";
import "../Style/Style.css";
import { Key } from "@mui/icons-material";

const CardData = [
  {
    id: 1,
    image: "https://cdn130.picsart.com/289328266010211.png?to=crop&type=webp&r=1456x712&q=85",
    cardName: "Pizza",
    carSubName: "BBQ",
    price: "1800",
  },
  {
    id: 2,
    image: "https://cdn130.picsart.com/289328266010211.png?to=crop&type=webp&r=1456x712&q=85",
    cardName: "Pizza",
    carSubName: "Hot and spyce",
    price: "2000",
  },
  {
    id: 3,
    image: "https://cdn130.picsart.com/289328266010211.png?to=crop&type=webp&r=1456x712&q=85",
    cardName: "Pizza",
    carSubName: "tandoori chicken ",
    price: "2500",
  },
  {
    id: 4,
    image: "https://cdn130.picsart.com/289328266010211.png?to=crop&type=webp&r=1456x712&q=85",
    cardName: "Pizza",
    carSubName: "cheese",
    price: "3000",
  },
];

export default function Dashbord() {

  const cardData = (item, key) => (
  <Grid key={Key} item xs={12} sm={6} md={4} lg={4} xl={3}>
  <Card
    sx={{
      Width: 345,
      height: 330,
      borderRadius: 6,
      backgroundColor: "rgba(197, 235, 170, 0.1)",
      border: "1px solid rgba(0, 0, 0, 0.2)",
    }}
    elevation={10}
   
  >
    <Box
      sx={{ height: 280, padding: 2 }}
      // onClick={() => {
      //   navigate(`/DigiBill/${item.card_id}`);
      // }}
    >
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
            {item.cardName}
          </Typography>
        }
        subheader={item.carSubName}
      />
      <Box
        sx={{
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          height: 180,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 5,
        }}
      >
        <img
          src={item.image}
          height="auto"
          width="200px"
        />
      </Box>
    </Box>
    <CardActionArea>
      <Box
        sx={{
          backgroundColor: "rgba(0, 255, 0, 0.3)",
          padding: "0px 1px 3px 1px",
          borderRadius: "10px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          margin: "0px 5px 2px 5px",
        }}
      >
        <Typography variant="h5" gutterBottom>
          eprice is {item.price}
        </Typography>
      </Box>
    </CardActionArea>
  </Card>
</Grid>
  )

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

      <Container>

      <Grid container spacing={2} marginTop={3} marginBottom={3}>
          {CardData.map((card, key) => cardData(card, key))}
          {/* {data.map((card) => cardData(card, card.card_id))} */}
        </Grid>
        </Container>
    </>
  );
}
