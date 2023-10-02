import { Container } from "@mui/material";
import React from "react";
import HomeSecondSection from "./home_second_section";
import HomeLandingSection from "./home_landing_section";
import NavBar from "../nav_bar/nav_bar";
import HomeThirdSection from "./home_third_section";
function Home() {
  return (
    <Container disableGutters={true} maxWidth="false">
      <NavBar />

      <HomeLandingSection />

      <HomeSecondSection />
      <HomeThirdSection />
    </Container>
  );
}

export default Home;
