import React from "react";
import { Box, Typography } from "@mui/material";
import schoolBus from "../../assets/schoolBus.png";
import Vector from "../../assets/Vector.png";
function HomeLandingSection() {
  return (
    <Box
      sx={{
        marginTop: "4rem",
        display: "flex",
        justifyContent: { lg: "space-around", xs: "center" },
        alignItems: "center",
        flexDirection: { md: "row", xs: "column" },
        padding: { xs: "0 1rem" },
      }}
    >
      <Box sx={{ position: "relative" }}>
        <img src={Vector} alt="Vector" style={{ width: "100%" }} />
        <Box
          sx={{
            position: "absolute",
            top: "40%",
            left: "0",
            transform: "translateY(-50%)",
          }}
        >
          <Box>
            <Typography
              variant="h4"
              sx={{
                fontFamily: "Leckerli One, cursive",
                fontSize: { lg: "4rem", xs: "2rem", sm: "3rem" },
              }}
            >
              Introducing our School Bus Tracking System
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{
                fontFamily: "Caveat, cursive",
                fontSize: { xl: "2rem", xs: "1rem", sm: "1.85rem" },
              }}
            >
              Say goodbye to missed pickups and waiting in uncertainty.
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box>
        <img src={schoolBus} alt="School Bus" style={{ width: "100%" }} />
      </Box>
    </Box>
  );
}

export default HomeLandingSection;
