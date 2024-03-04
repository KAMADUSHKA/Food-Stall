import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Box } from "@mui/material";
import "../Style/Style.css"



export default function Dashbord() {
 
  
  return (
    <>
    <Box sx={{padding:10, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      
    {/* <Carousel className="main-slide" showThumbs={false} showStatus={false} style={{ maxWidth: '60%' }}> */}
    <Carousel className="main-slide" autoPlay={true} infiniteLoop={true} showThumbs={false} showStatus={false} >
                <div>
                    <img src="https://cdn141.picsart.com/317513228192211.png?to=crop&type=webp&r=1456x1456&q=85" height="auto" width="200px" />
                    
                </div>
                <div>
                    <img src="https://cdn130.picsart.com/249619770004212.png?to=crop&type=webp&r=1456x1147&q=85" height="auto" width="200px" />
                    
                </div>
                <div>
                    <img src="https://cdn130.picsart.com/289328266010211.png?to=crop&type=webp&r=1456x712&q=85" height="auto" width="200px" />
                    
                </div>
            </Carousel>

            </Box>
    
    </>
  );
}
