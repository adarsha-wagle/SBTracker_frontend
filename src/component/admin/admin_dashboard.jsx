import React from "react";
import { Box } from "@mui/material";
import NavBar from "../nav_bar/nav_bar";
import AdminContent from "./admin_content";
import MapComponent from "../map/map";
function AdminDashboard() {
  return (
    <div>
      <NavBar />
      <AdminContent />
      <Box sx={{ width: "80%", mx: "auto" }}>
        <MapComponent />
      </Box>
    </div>
  );
}

export default AdminDashboard;
