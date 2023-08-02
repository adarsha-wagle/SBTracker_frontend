import React from "react";
import { Container } from "@mui/material";
import Home from "../component/home/home.components";
function HomePage() {
  return (
    <Container disableGutters={true} maxWidth="false">
      <Home />
    </Container>
  );
}

export default HomePage;
