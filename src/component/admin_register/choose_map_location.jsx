import React, { useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import "leaflet/dist/leaflet.css";
import { setMap } from "../../redux/locationSlice";
import { markerIcon } from "../ui/customIcon";
import CloseIcon from "@mui/icons-material/Close";

import { useDispatch } from "react-redux";
import { Dialog, IconButton, DialogTitle, DialogContent } from "@mui/material";
import { useEffect } from "react";
function ChooseMap() {
  const dispatch = useDispatch();
  const [openDialog, setOpenDialog] = useState(false);

  const [selectedLocation, setSelectedLocation] = useState({
    lng: 85.3072582,
    lat: 27.6707991,
  });

  useEffect(() => {
    dispatch(
      setMap(
        JSON.stringify({
          lng: 85.3072582,
          lat: 27.6707991,
        })
      )
    );
  }, [dispatch]);
  const handleClickOpen = () => {
    setOpenDialog(true);
  };
  const handleClose = () => {
    setOpenDialog(false);
  };
  function LocationMarker() {
    useMapEvents({
      click(e) {
        console.log(e.latlng);
        setSelectedLocation(e.latlng);
        dispatch(setMap(JSON.stringify(e.latlng)));
      },
    });
    return null;
  }

  return (
    <div style={{ position: "relative" }}>
      <IconButton
        sx={{
          position: "absolute",
          right: "0",
          top: "0",
          zIndex: "1000",
        }}
        onClick={handleClickOpen}
      >
        <OpenInFullIcon />
      </IconButton>
      <MapContainer
        zoom={13}
        center={[selectedLocation.lat, selectedLocation.lng]}
        style={{ height: "180px", width: "100%" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker
          position={[selectedLocation.lat, selectedLocation.lng]}
          icon={markerIcon}
        >
          <Popup>
            Your Selected <br /> Location.
          </Popup>
        </Marker>
        <LocationMarker />
      </MapContainer>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={openDialog}
        fullWidth={true}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Select Property Location
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          {" "}
          <MapContainer
            zoom={13}
            center={[selectedLocation.lat, selectedLocation.lng]}
            style={{ height: "500px", width: "100%" }}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker
              position={[selectedLocation.lat, selectedLocation.lng]}
              icon={markerIcon}
            >
              <Popup>
                Your Selected <br /> Location.
              </Popup>
            </Marker>
            <LocationMarker />
          </MapContainer>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default ChooseMap;
