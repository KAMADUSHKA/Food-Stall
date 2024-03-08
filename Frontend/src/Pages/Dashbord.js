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
  ImageList,
  ImageListItem,
  Tooltip,
  Typography,
} from "@mui/material";
import "../Style/Style.css";
import { Key } from "@mui/icons-material";
import P1 from "../Image/P1.jpg";
import P2 from "../Image/P2.jpg";
import P3 from "../Image/P3.jpg";
import P4 from "../Image/P4.jpg";
import P5 from "../Image/P5.jpg";
import P6 from "../Image/P6.jpg";

const CardData = [
  {
    id: 1,
    image:
      "https://cdn130.picsart.com/289328266010211.png?to=crop&type=webp&r=1456x712&q=85",
    cardName: "Pizza",
    carSubName: "BBQ",
    price: "1800",
  },
  {
    id: 2,
    image:
      "https://cdn130.picsart.com/289328266010211.png?to=crop&type=webp&r=1456x712&q=85",
    cardName: "Pizza",
    carSubName: "Hot and spyce",
    price: "2000",
  },
  {
    id: 3,
    image:
      "https://cdn130.picsart.com/289328266010211.png?to=crop&type=webp&r=1456x712&q=85",
    cardName: "Pizza",
    carSubName: "tandoori chicken ",
    price: "2500",
  },
  {
    id: 4,
    image:
      "https://cdn130.picsart.com/289328266010211.png?to=crop&type=webp&r=1456x712&q=85",
    cardName: "Pizza",
    carSubName: "cheese",
    price: "3000",
  },
  {
    id: 5,
    image:
      "https://cdn130.picsart.com/289328266010211.png?to=crop&type=webp&r=1456x712&q=85",
    cardName: "Pizza",
    carSubName: "cheese",
    price: "3000",
  },
];

const itemData = [
  {
    img: P1,
    title: "Set Your Goal",
  },
  {
    img: P2,
    title: "Select Your Meal",
  },
  {
    img: P3,
    title: "Enter Your Information",
  },
  {
    img: P4,
    title: "place Your Order",
  },
  {
    img: P5,
    title: "We Process and Deliver Your Order",
  },
  {
    img: P6,
    title: "Enjoy Your Meals",
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
            <img src={item.image} height="auto" width="200px" />
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
  );

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
          // dotColor="rgba(0, 255, 0)"
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

      <br />
      <br />
      <Container>
        <Typography
          variant="h2"
          align="center"
          gutterBottom
          sx={{
            fontWeight: "bold",
            fontFamily: "Cormorant Garamond, serif",
            color: "rgb(18, 104, 18)",
            textShadow: "2px 45px 4px rgba(18,104,18,0.1)",
          }}
        >
          OUR PROCESS
        </Typography>
        <br />
        <br />
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <ImageList
              variant="woven"
              cols={3}
              gap={60}
              sx={{ width: "100%", maxWidth: "auto" }}
            >
              {itemData.map((item) => (
                <ImageListItem key={item.title}>
                  <img
                    srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
                    src={`${item.img}?w=161&fit=crop&auto=format`}
                    alt={item.title}
                    loading="lazy"
                  />
                  <Typography variant="subtitle1" align="center">
                    {item.title}
                  </Typography>
                </ImageListItem>
              ))}
            </ImageList>
          </Grid>
        </Grid>

        <br />
        <br />
        <br />
        <br />
        <Typography
          variant="h2"
          align="center"
          gutterBottom
          sx={{
            fontWeight: "bold",
            fontFamily: "Cormorant Garamond, serif",
            color: "rgb(18, 104, 18)",
            textShadow: "2px 45px 4px rgba(18,104,18,0.1)",
          }}
        >
          NUTRITION MEAL PLANS
        </Typography>

        <br />
        <br />



        <Grid container spacing={2} marginTop={3} marginBottom={3}>
        <Grid key={Key} item xs={12} sm={6} md={4} lg={4} xl={3}>
      <Card
        sx={{
          Width: 345,
          height: 330,
          borderRadius: 6,
          // backgroundColor: "rgba(197, 235, 170, 0.1)",
          // border: "1px solid rgba(0, 0, 0, 0.1)",
        }}
        elevation={0}
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
              cardName
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
            <img src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e" height="auto" width="300px" style={{ borderRadius: '10px' }} />
          </Box>
        </Box>
        
      </Card>
      
    </Grid>
        </Grid>



        <Grid container spacing={2} marginTop={3} marginBottom={3}>
          {CardData.map((card, key) => cardData(card, key))}
          {/* {data.map((card) => cardData(card, card.card_id))} */}
        </Grid>
      </Container>
    </>
  );
}
