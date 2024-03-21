import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import AdbIcon from "@mui/icons-material/Adb";

import {
  AiOutlineInstagram,
  AiFillLinkedin,
  AiOutlineTwitter,
  AiFillFacebook,
} from "react-icons/ai";

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

export default function Footer() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: "rgb(18, 104, 18)" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ marginBottom: 10 }}>
            {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
            <Grid container>
              <Grid items xs={12}>
                
                <Box sx={{ flexGrow: 0 }}>
                  <Tooltip title="Open settings">
                    <IconButton sx={{ p: 0 }}>
                      <Avatar
                        alt="Remy Sharp"
                        src="https://dsuabgmmtxmj1.cloudfront.net/companyweb/adeona_new_logo_circle.png"
                      />
                    </IconButton>
                  </Tooltip>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: 1300,
                  }}
                >
                  <Box sx={{ marginLeft: 2 }}>
                    <Typography
                      variant="h6"
                      noWrap
                      component="a"
                      href="/"
                      sx={{
                        mr: 2,
                        // display: { xs: 'none', md: 'flex' },
                        display: "flex",
                        fontFamily: "monospace",
                        fontWeight: 700,
                        letterSpacing: ".3rem",
                        color: "inherit",
                        textDecoration: "none",
                      }}
                    >
                      Adeona Technologies
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                    <Box
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <Box sx={{ marginRight: 3 }}>
                        <Typography
                          variant="h6"
                          noWrap
                          component="a"
                          href="/"
                          sx={{
                            display: { xs: "none", md: "flex" },

                            fontFamily: "monospace",
                            fontWeight: 700,
                            letterSpacing: ".0.5rem",
                            color: "inherit",
                            textDecoration: "none",
                          }}
                        >
                          Privacy Policy
                        </Typography>
                      </Box>
                      <Box sx={{ marginRight: 3 }}>
                        <Typography
                          variant="h6"
                          noWrap
                          component="a"
                          href="/"
                          sx={{
                            display: { xs: "none", md: "flex" },

                            fontFamily: "monospace",
                            fontWeight: 700,
                            letterSpacing: ".0.5rem",
                            color: "inherit",
                            textDecoration: "none",
                            marginLeft: 0,
                          }}
                        >
                          Terms
                        </Typography>
                      </Box>
                    </Box>
                    <Box>
                      <Grid container>
                        <Grid items xs={12}>
                          <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                              display: { xs: "none", md: "flex" },

                              fontFamily: "monospace",
                              fontWeight: 700,
                              letterSpacing: ".0.5rem",
                              color: "inherit",
                              textDecoration: "none",
                              marginLeft: 0,
                            }}
                          >
                            dfgsthdrtty
                          </Typography>
                        </Grid>
                      </Grid>
                    </Box>
                  </Box>
                </Box>
              </Grid> 
              <Grid items xs={12}>
                          <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                              display: { xs: "none", md: "flex" },

                              fontFamily: "monospace",
                              fontWeight: 700,
                              letterSpacing: ".0.5rem",
                              color: "inherit",
                              textDecoration: "none",
                              marginLeft: 0,
                            }}
                          >
                            dfgsthdrtty
                          </Typography>
                        </Grid>
            </Grid>
          </Toolbar>
        </Container>
      </AppBar>
    </>

    // <div style={{width:"100%"}}>
    //   <Box sx={{ flexGrow: 1, marginBottom: 0 }}>
    //     <AppBar
    //       position="static"
    //       sx={{ backgroundColor: "rgb(39, 158, 255, 0.5 )" }}
    //     >
    //       <Toolbar>
    //         <Avatar
    //           sx={{
    //             backgroundColor: "rgb(39, 158, 255, 0.5 )",
    //             height: 55,
    //             width: 55,
    //             marginLeft: 25,
    //             marginTop: 3,
    //             marginBottom: 3,

    //           }}
    //           aria-label="recipe"
    //           src="https://dsuabgmmtxmj1.cloudfront.net/companyweb/adeona_new_logo_circle.png"
    //         />
    //         <div style={{ display: "flex", marginLeft: "auto" }}>
    //           <Typography>Privacy Policy</Typography>
    //           &nbsp;&nbsp; &nbsp;&nbsp;
    //           <Typography>Terms</Typography>
    //           &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;
    //         </div>
    //       </Toolbar>

    //       <hr style={{ color: "white", margin: "40px 80px" }} />
    //       <div
    //         style={{
    //           display: "flex",
    //           marginRight: "auto",
    //           marginLeft: 200,
    //           marginTop: 45,
    //         }}
    //       >
    //         <Typography sx={{ fontSize: 10 }}> @ 2023 Copyright: </Typography>
    //         <Typography sx={{ color: "blue", fontSize: 10 }}>
    //           {" "}
    //           &nbsp; Adeona Technologies PVT (LTD) &nbsp;{" "}
    //         </Typography>{" "}
    //         <Typography sx={{ fontSize: 10 }}> All Rights Reserved </Typography>
    //       </div>
    //       <div
    //         style={{
    //           display: "flex",
    //           marginLeft: "auto",
    //           marginRight: 80,
    //           marginBottom: 20,
    //         }}
    //       >
    //         <AiFillFacebook />
    //         &nbsp;&nbsp;&nbsp;
    //         <AiOutlineTwitter />
    //         &nbsp;&nbsp;&nbsp;
    //         <AiOutlineInstagram />
    //         &nbsp;&nbsp;&nbsp;
    //         <AiFillLinkedin />
    //       </div>
    //     </AppBar>
    //   </Box>
    // </div>
  );
}
