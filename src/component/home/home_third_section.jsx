import React from "react";
import { Box, Typography } from "@mui/material";
import blueBlob from "../../assets/blueBlob.png";
import blueSchoolBus from "../../assets/blueSchoolBus.png";
function HomeThirdSection() {
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
      <Box>
        <img src={blueSchoolBus} alt="School Bus " style={{ width: "100%" }} />
      </Box>
      <Box sx={{ position: "relative" }}>
        <img src={blueBlob} alt="Vector" style={{ width: "100%" }} />
        <Box
          sx={{
            position: "absolute",
            top: "40%",
            left: "10%",
            transform: "translateY(-50%)",
          }}
        >
          <Box>
            <Typography
              variant="h4"
              sx={{ fontFamily: "Leckerli One, cursive", fontSize: "3rem" }}
            >
              Join Us Today!
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default HomeThirdSection;
