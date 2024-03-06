import { AppBar, Avatar, Box, Toolbar, Typography } from "@mui/material";
import React from "react";
import {
  AiOutlineInstagram,
  AiFillLinkedin,
  AiOutlineTwitter,
  AiFillFacebook,
} from "react-icons/ai";

export default function Footer() {
  return (
    <div style={{width:"100%"}}>
      <Box sx={{ flexGrow: 1, marginBottom: 0 }}>
        <AppBar
          position="static"
          sx={{ backgroundColor: "rgb(39, 158, 255, 0.5 )" }}
        >
          <Toolbar>
            <Avatar
              sx={{
                backgroundColor: "rgb(39, 158, 255, 0.5 )",
                height: 55,
                width: 55,
                marginLeft: 25,
                marginTop: 3,
                marginBottom: 3,
                
              }}
              aria-label="recipe"
              src="https://dsuabgmmtxmj1.cloudfront.net/companyweb/adeona_new_logo_circle.png"
            />
            <div style={{ display: "flex", marginLeft: "auto" }}>
              <Typography>Privacy Policy</Typography>
              &nbsp;&nbsp; &nbsp;&nbsp;
              <Typography>Terms</Typography>
              &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;
            </div>
          </Toolbar>

          <hr style={{ color: "white", margin: "40px 80px" }} />
          <div
            style={{
              display: "flex",
              marginRight: "auto",
              marginLeft: 200,
              marginTop: 45,
            }}
          >
            <Typography sx={{ fontSize: 10 }}> @ 2023 Copyright: </Typography>
            <Typography sx={{ color: "blue", fontSize: 10 }}>
              {" "}
              &nbsp; Adeona Technologies PVT (LTD) &nbsp;{" "}
            </Typography>{" "}
            <Typography sx={{ fontSize: 10 }}> All Rights Reserved </Typography>
          </div>
          <div
            style={{
              display: "flex",
              marginLeft: "auto",
              marginRight: 80,
              marginBottom: 20,
            }}
          >
            <AiFillFacebook />
            &nbsp;&nbsp;&nbsp;
            <AiOutlineTwitter />
            &nbsp;&nbsp;&nbsp;
            <AiOutlineInstagram />
            &nbsp;&nbsp;&nbsp;
            <AiFillLinkedin />
          </div>
        </AppBar>
      </Box>
    </div>
  );
}
