import React from "react";
import { Box, Grid } from "@mui/material";
import RouteCard from "./route_card";
function RouteList() {
  const routesList = [
    {
      id: 1,
      routeName: "Route 1",
      busName: "Bus - 5644",
      destination: "(Sanepa - Kalanki)",
      std: 40,
      stops: 10,
      distance: "3 km",
    },
    {
      id: 2,
      routeName: "Route 2",
      busName: "Bus - 5477",
      destination: "(Sanepa - Baneshwor)",
      std: 20,
      stops: 5,
      distance: "5 km",
    },
    {
      id: 3,
      routeName: "Route 3",
      busName: "Bus - 7411",
      destination: "(Sanepa - Ratnapark)",
      std: 30,
      stops: 8,
      distance: "8 km",
    },
  ];
  return (
    <Box>
      <Grid container spacing={2} justifyContent={"center"}>
        {routesList.map((route) => (
          <Grid item>
            <RouteCard key={route.id} route={route} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default RouteList;
