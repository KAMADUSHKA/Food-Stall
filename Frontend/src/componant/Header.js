import {
  AppBar,
  Avatar,
  Box,
  Button,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LOGOUT } from "./const";
import { Link } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  // const user = useSelector((state) => state.auth.authData.userData?.fname);
  // const user = useSelector((state) => state.auth.authData.data?.email);

  // console.log("user is a", user);

  const handleChange = () => {
    dispatch({ type: LOGOUT });
    navigate("/");
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          sx={{ backgroundColor: "rgba(0, 255, 0, 0.2)" }}
        >
          <Toolbar>
            <Avatar
              sx={{ height: 55, width: 55 }}
              aria-label="recipe"
              src="https://dsuabgmmtxmj1.cloudfront.net/companyweb/adeona_new_logo_circle.png"
            />
            &nbsp;&nbsp;
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                flexGrow: 1,
                display: { xs: "none", sm: "block" },
                fontFamily: "'Great Vibes', cursive",
                color: "black",
              }}
            >
              Adeona Food Stall
            </Typography>
            {/* <Typography>Welcome {user}</Typography> */}
            <Typography>Welcome </Typography>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <Button
              variant="contained"
              // onClick={handleChange}
              sx={{
                borderRadius: 3,
                backgroundColor: "rgba(0, 255, 0, 0.4)",
                color: "black",
              }}
            >
              <b>Sign In</b>
            </Button>
            &nbsp;&nbsp;
            <Button
              variant="contained"
              onClick={handleChange}
              sx={{
                borderRadius: 3,
                backgroundColor: "rgba(0, 255, 0, 0.4)",
                color: "black",
              }}
            >
              <b>Sign Out</b>
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
      <Box>
        <AppBar
          position="static"
          className="custom-navbar"
          sx={{
            backgroundColor: "rgba(197, 235, 170, 0.08)",
            borderRadius: 10,
            marginTop: 5,
            marginRight:10
          }}
        >
          <Toolbar sx={{ display:"flex", justifyContent:"space-between",  }}>
            {/* <Typography className="nav_link" sx={{ color: "black", mx: 4 }}>
              Home
            </Typography>
            <Typography className="nav_link" sx={{ color: "black", mx: 4 }}>
              Plans and Diets
            </Typography>
            <Typography className="nav_link" sx={{ color: "black", mx: 4 }}>
              Custom Meals
            </Typography>
            <Typography className="nav_link" sx={{ color: "black", mx: 4 }}>
              Quick Check Out
            </Typography>
            <Typography className="nav_link" sx={{ color: "black", mx: 4 }}>
              Channel Nutritionist
            </Typography> */}
            <Box sx={{backgroundColor:"black", display: "flex", justifyContent: "center", alignItems: "center"}}>
            <Link to="/" className="nav_link">Home</Link>
            <Link to="Plans_and_Diets" className="nav_link">Plans and Diets</Link>
            <Link to="Custom_Meals" className="nav_link">Custom Meals</Link>
            <Link to="Quick_Check_Out" className="nav_link">Quick Check Out</Link>
            <Link to="Channel_Nutritionist" className="nav_link">Channel Nutritionist</Link>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}
