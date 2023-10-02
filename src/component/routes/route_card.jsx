import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
function RouteCard({ route }) {
  const navigate = useNavigate();
  const goToRouteDetails = () => {
    navigate("/route-details");
  };
  return (
    <Card
      sx={{ minWidth: 300, border: "1px solid black", cursor: "pointer" }}
      onClick={goToRouteDetails}
    >
      <CardContent
        sx={{
          padding: "0",
          "&:last-child": {
            paddingBottom: "0",
          },
        }}
      >
        <Box sx={{ padding: "0.5rem 0.5rem 0.2rem 0.5rem" }}>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {route.routeName}
          </Typography>
          <Typography variant="h5" component="div">
            {route.busName}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {route.destination}
          </Typography>
        </Box>

        <Box
          sx={{
            padding: "0.3rem 0.5rem",
            display: "flex",
            justifyContent: "space-between",
            backgroundColor: "#f7f7f7",
            borderTopLeftRadius: "0.5rem",
            borderTopRightRadius: "0.5rem",
          }}
        >
          <Typography variant="body2">Std : {route.std}</Typography>
          <Typography variant="body2">Stops : {route.stops}</Typography>
          <Typography variant="body2">Distance : {route.distance}</Typography>
        </Box>
      </CardContent>
    </Card>
  );
}

export default RouteCard;
