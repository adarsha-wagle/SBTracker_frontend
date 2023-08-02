import React from "react";
import { Box, AppBar, Toolbar, Typography } from "@mui/material";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <Box>
      <AppBar position="static" sx={{ height: "8rem" }}>
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
              display: "flex",
              justifyContent: "center",
              alignItems: "end",
              gap: "4rem",
            }}
          >
            <Typography
              variant="body2"
              sx={{
                color: "#584444",
                fontSize: "32px",
                fontFamily: "Caveat Brush, cursive",
              }}
              component={Link}
              to="/"
              replace={true}
            >
              Home
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "#584444",
                fontSize: "32px",
                fontFamily: "Caveat Brush, cursive",
              }}
              component={Link}
              to="/map"
              replace={true}
            >
              Map
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "#584444",
                fontSize: "32px",
                fontFamily: "Caveat Brush, cursive",
              }}
            >
              About Us
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "#584444",
                fontSize: "32px",
                fontFamily: "Caveat Brush, cursive",
              }}
            >
              Contact
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar;
