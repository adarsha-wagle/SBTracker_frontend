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
        justifyContent: "space-around",
      }}
    >
      <Box sx={{ position: "relative" }}>
        <img src={Vector} alt="Vector" />
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
              sx={{ fontFamily: "Leckerli One, cursive", fontSize: "4rem" }}
            >
              Introducing our School Bus Tracking System
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{ fontFamily: "Caveat, cursive", fontSize: "2rem" }}
            >
              Say goodbye to missed pickups and waiting in uncertainty.
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box>
        <img src={schoolBus} alt="School Bus " />
      </Box>
    </Box>
  );
}

export default HomeLandingSection;
