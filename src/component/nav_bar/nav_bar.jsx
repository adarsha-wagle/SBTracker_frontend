import React from "react";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  Divider,
  Drawer,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const navItems = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Map",
    link: "/map",
  },
  {
    name: "About Us",
    link: "/about",
  },
  {
    name: "Contact",
    link: "/contact",
  },
  {
    name: "Login",
    link: "/login",
  },
];

const drawerWidth = 240;
function NavBar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    console.log(mobileOpen);
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography
        variant="h6"
        sx={{ my: 2, fontFamily: "Caveat Brush, cursive", fontSize: "2rem" }}
      >
        School Bus
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <Typography
                variant="body2"
                sx={{
                  color: "#584444",
                  fontSize: "28px",
                  fontFamily: "Caveat Brush, cursive",
                }}
                component={Link}
                to={item.link}
                replace={true}
              >
                {item.name}
              </Typography>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ width: "100vw" }}>
      <AppBar position="static" sx={{ height: "8rem", width: "100%" }}>
        <Toolbar
          sx={{
            height: "100%",
            position: "relative",
            backgroundColor: "#FAE500",
            borderBottom: "1px solid black",
          }}
        >
          <Box
            sx={{ position: "absolute", bottom: "-50%", left: "5%" }}
            component={Link}
            to="/"
            replace={true}
          >
            <img
              src={logo}
              alt="Logo"
              style={{ width: "8rem", height: "8rem" }}
            />
          </Box>

          <Box
            sx={{
              width: "100%",
              height: "100%",
              display: { md: "flex", xs: "none" },
              justifyContent: "center",
              alignItems: "end",
              gap: "4rem",
            }}
          >
            {navItems.map((item) => (
              <Typography
                key={item.name}
                variant="body2"
                sx={{
                  color: "#584444",
                  fontSize: "32px",
                  fontFamily: "Caveat Brush, cursive",
                }}
                component={Link}
                to={item.link}
                replace={true}
              >
                {item.name}
              </Typography>
            ))}
          </Box>

          <Box
            sx={{
              width: "100%",
              height: "100%",
              display: { md: "none", xs: "flex" },
              justifyContent: "flex-end",
              alignItems: "end",
            }}
          >
            <IconButton onClick={handleDrawerToggle}>
              <MenuIcon
                sx={{ width: "2.5rem", height: "2.5rem", color: "white" }}
              />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  );
}

export default NavBar;
