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
          sx={{ backgroundColor: "rgba(0, 255, 0, 0.3)" }}
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
              }}
            >
              Adeona Technogy
            </Typography>
            {/* <Typography>Welcome {user}</Typography> */}
            <Typography>Welcome </Typography>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <Button
              variant="contained"
              onClick={handleChange}
              sx={{ borderRadius: 3 }}
            >
              Sign Out
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
      <Box>
        <AppBar
          position="static"
          sx={{
            backgroundColor: "rgba(197, 235, 170, 0.08)",
            borderRadius: 10,
            marginTop: 5,
          }}
        >
          <Toolbar sx={{ justifyContent: 'center' }}>
           
            <Typography sx={{ color: "black", mx: 4 }}>Welcome </Typography>
            <Typography sx={{ color: "black", mx: 4 }}>Name1 </Typography>
            <Typography sx={{ color: "black", mx: 4 }}>Name2 </Typography>
            <Typography sx={{ color: "black", mx: 4 }}>Name3 </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}
