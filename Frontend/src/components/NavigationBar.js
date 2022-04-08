import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Stack from "@mui/material/Stack";

import "./NavigationStyles.css";
import logoPic from "../images/Logo.png";
import emergencyPic from "../images/Emergency.png";
import textLogoPic from "../images/TextLogo.png";
import Link from "./routing/Link";

const pages = ["About Us"];

const NavigationBar = ({ setOnAboutUs, emergencyClicked,onEmergencyClick }) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };



  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar className="navbar" position="sticky; top: 0">
      <Container maxWidth="xl">
        <Toolbar disableGutters onClick={() => setOnAboutUs(false)}>
            <Link href="/">
          <img className="image2" src={textLogoPic} />
          <img className="image" src={logoPic} />
          </Link>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={() => {setOnAboutUs(true);console.log("test")}}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={() => {setOnAboutUs(true);console.log("test")}}>
                    <Link href="aboutus"></Link>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Link href="aboutus"><Button
                key={page}
                onClick={() => {setOnAboutUs(true);console.log("test")}}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
                </Button></Link>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Preferences">
              <Stack spacing={0}>
                <IconButton
                  onClick={() => {
                    onEmergencyClick();
                  }}
                  sx={{ p: 0 }}
                >
                  <img className={`image ${emergencyClicked?"red-highlight":""}`} src={emergencyPic} />
                </IconButton>
                <div style={{ color: "red",display: "flex",alignContent: "spaceBetween",justifyContent: "center",paddingLeft:"5px",fontSize: "24px",fontWeight: "bolder" }}>Emergency</div>
              </Stack>
            </Tooltip>

            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            ></Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavigationBar;
