import React from "react";
import { Container } from "@mui/material";
import RouteDetailsMain from "../component/route_details/route_details_main";

function RouteDetailsPage() {
  return (
    <Container disableGutters={true} maxWidth="false">
      <RouteDetailsMain />
    </Container>
  );
}

export default RouteDetailsPage;
