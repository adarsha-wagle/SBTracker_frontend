import React from "react";
import MapComponent from "./map";
import { Box, Container } from "@mui/material";
import NavBar from "../nav_bar/nav_bar";

import RouteList from "../routes/route_list";
function MapContent() {
  return (
    <div>
      <NavBar />
      <Container sx={{ marginTop: "5rem", maxWidth: "xl" }}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          <MapComponent />
          <RouteList />
        </Box>
      </Container>
    </div>
  );
}

export default MapContent;
