import { useState, useEffect } from "react";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  Polyline,
} from "react-leaflet";
import osm from "../../config/osm_provider";
import { socket } from "../../config/socket";
import "leaflet/dist/leaflet.css";
import { markerIcon } from "../ui/customIcon";
import { Box, Typography } from "@mui/material";
function Map() {
  const [busLocation, setBusLocation] = useState({});
  const [busMovementPath, setBusMovementPath] = useState([]);
  const location = [27.676, 85.3046];

  useEffect(() => {
    socket.on("initialBusLocation", (data) => {
      console.log("initial data", data);
      setBusLocation(data);
      setBusMovementPath((prev) => [...prev, [data.latitude, data.longitude]]);
    });
    socket.on("busLocationUpdated", (data) => {
      setBusLocation(data);
      console.log("updated data", data);
      console.log(busLocation);
      setBusMovementPath((prev) => [...prev, [data.latitude, data.longitude]]);
    });
    return () => {
      socket.off("initialBusLocation");
      socket.off("busLocationUpdated");
    };
  }, [busLocation]);
  return (
    <Box
      sx={{
        marginTop: "5rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: "4rem",
        flexDirection: "column",
      }}
    >
      <Box sx={{ width: "100%" }}>
        <Typography
          sx={{
            fontFamily: "Caveat Brush, cursive",
            fontSize: "2rem",
            textAlign: "start",
            marginLeft: "5rem",
          }}
        >
          Track Your Bus
        </Typography>
      </Box>
      <div style={{ width: "90%", border: "2px solid gray" }}>
        <MapContainer center={location} zoom={20} scrollWheelZoom={false}>
          <TileLayer
            url={osm.maptiler.url}
            attribution={osm.maptiler.attribution}
          />

          {busLocation.latitude && busLocation.longitude && (
            <Marker
              position={[busLocation.latitude, busLocation.longitude]}
              icon={markerIcon}
            >
              <Popup>Bus ID: {busLocation.longitude}</Popup>
            </Marker>
          )}
          {busMovementPath.length > 1 && (
            <Polyline positions={busMovementPath} color="blue" />
          )}
          {/* );
        })} */}
        </MapContainer>
      </div>
    </Box>
  );
}

export default Map;
