import React from "react";
import { Box, Typography } from "@mui/material";
function HomeSecondSection() {
  return (
    <Box
      sx={{
        backgroundColor: "#FAE500",
        marginTop: "2rem",
        padding: "3rem 1rem",
        borderTop: "1px solid black",
        borderBottom: "1px solid black",
        boxShadow:
          "0px -10px 40px 0px rgba(0,0,0,0.1),0px 10px 40px 0px rgba(0,0,0,0.1)",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyConten: "center",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontFamily: "Leckerli One, cursive",
            textAlign: "center",
            fontSize: { md: "3rem", xs: "1.5rem", sm: "2rem" },
          }}
        >
          Why Choose Our School Bus Tracking?
        </Typography>
        <ul
          style={{
            listStyleType: "disc",
            width: "60%",
            fontFamily: "Caveat, cursive",
            fontSize: "1.25rem",
          }}
        >
          <li>
            Peace of Mind for Parents: With real-time tracking and instant
            notifications, you can focus on your work or daily tasks without
            constant worries about your child's whereabouts.
          </li>
          <li>
            Transparent and Accountable: Our transparent system keeps you
            informed, and you can hold us accountable for any deviations or
            delays in the school bus route.
          </li>
        </ul>
      </Box>
    </Box>
  );
}

export default HomeSecondSection;
