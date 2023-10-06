import { useState, useEffect } from "react";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  Polyline,
} from "react-leaflet";
import { useSelector } from "react-redux";
import osm from "../../config/osm_provider";
import { socket } from "../../config/socket";
import "leaflet/dist/leaflet.css";
import { markerIcon } from "../ui/customIcon";
import { Avatar, Box, Typography } from "@mui/material";
import L from "leaflet";
import motey from "../../assets/motey.png";
import "./routes.css";
import { BASE_URL } from "../../config/base_url";
function RouteDetailContent() {
  const [busLocation, setBusLocation] = useState({});
  const [busMovementPath, setBusMovementPath] = useState([]);
  const studentList = useSelector((state) => state.route.studentList);
  const location = [27.683643626016703, 85.306630364214366];

  useEffect(() => {
    socket.on("currentLocation", (data) => {
      setBusLocation(data);
      console.log("updated data", data);
      console.log(busLocation);
      setBusMovementPath((prev) => [...prev, [data.latitude, data.longitude]]);
    });
    return () => {
      socket.off("currentLocation");
    };
  }, [busLocation]);
  return (
    <Box sx={{ marginTop: "4rem", width: "70%", mx: "auto" }}>
      <Box sx={{ width: "100%" }}>
        <Typography
          sx={{
            fontFamily: "Caveat Brush, cursive",
            fontSize: "2rem",
            textAlign: "start",
          }}
        >
          Track Your Bus
        </Typography>
      </Box>
      <div style={{ border: "2px solid gray" }}>
        <MapContainer center={location} zoom={20} scrollWheelZoom={false}>
          <TileLayer
            url={osm.maptiler.url}
            attribution={osm.maptiler.attribution}
          />

          {/* {busLocation.latitude && busLocation.longitude && ( */}
          <Marker
            position={[
              busLocation?.latitude || 27.683643626016703,
              busLocation?.longitude || 85.306630364214366,
            ]}
            icon={markerIcon}
          >
            <Popup>Bus ID: {557}</Popup>
          </Marker>
          {studentList?.map((student) => {
            return (
              <Marker
                key={student?._id}
                position={[
                  student?.studentPickUp?.pickUpLocation?.coordinates
                    ?.latitude || 27.683643626016703,
                  student?.studentPickUp?.pickUpLocation?.coordinates
                    ?.longitude || 85.306630364214366,
                ]}
                icon={
                  new L.icon({
                    iconUrl: student?.image
                      ? `${BASE_URL}/${student?.image}`
                      : motey,
                    iconRetinaUrl: student?.image
                      ? `${BASE_URL}/${student?.image}`
                      : motey,
                    popupAnchor: [-0, -0],
                    iconSize: [40, 40],
                    className: "rounded-icon",
                  })
                }
              >
                <Popup>
                  <Avatar
                    sx={{ width: "2rem", height: "2rem" }}
                    src={student?.image}
                  />
                  <Typography variant="body1">
                    {student?.name} {student?.studentClass}
                  </Typography>
                </Popup>
              </Marker>
            );
          })}
          {/* )} */}
          {busMovementPath.length > 1 && (
            <Polyline positions={busMovementPath} color="blue" />
          )}
          {/* );
        })} */}
        </MapContainer>
      </div>
      <Box sx={{ mt: "2rem" }}>
        <Typography variant="h5">Bus Details : </Typography>
        <table>
          <tbody>
            <tr>
              <td>
                <Typography variant="body1" fontWeight="bold">
                  Speed :
                </Typography>
              </td>
              <td>
                <Typography variant="body1">{busLocation.speed}</Typography>
              </td>
            </tr>
            <tr>
              <td>
                <Typography variant="body1" fontWeight="bold">
                  Longitude :
                </Typography>
              </td>
              <td>
                <Typography variant="body1">{busLocation.longitude}</Typography>
              </td>
            </tr>
            <tr>
              <td>
                <Typography variant="body1" fontWeight="bold">
                  Latitude :
                </Typography>
              </td>
              <td>
                <Typography variant="body1">{busLocation.latitude}</Typography>
              </td>
            </tr>
            <tr>
              <td>
                <Typography variant="body1" fontWeight="bold">
                  Time :
                </Typography>
              </td>
              <td>
                <Typography variant="body1">{busLocation.time}</Typography>
              </td>
            </tr>
            <tr>
              <td>
                <Typography variant="body1" fontWeight="bold">
                  Course :
                </Typography>
              </td>
              <td>
                <Typography variant="body1">{busLocation.course}</Typography>
              </td>
            </tr>
            <tr>
              <td>
                <Typography variant="body1" fontWeight="bold">
                  Altitude :
                </Typography>
              </td>
              <td>
                <Typography variant="body1">{busLocation.altitude}</Typography>
              </td>
            </tr>
          </tbody>
        </table>
      </Box>
    </Box>
  );
}

export default RouteDetailContent;
