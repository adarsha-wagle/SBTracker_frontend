import React from "react";
import { Container } from "@mui/material";
import MapContent from "../component/map/map_main";
function MapPage() {
  return (
    <Container disableGutters={true} maxWidth="false">
      <MapContent />
    </Container>
  );
}

export default MapPage;
