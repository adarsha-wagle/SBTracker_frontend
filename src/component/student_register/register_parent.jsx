import React, { useState } from "react";

import {
  Box,
  TextField,
  Typography,
  Button,
  Paper,
  IconButton,
} from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import ChooseMap from "./choose_map_location";
import { useDispatch, useSelector } from "react-redux";
import { registerParent } from "../../redux/authSlice";
function AdminDashboard({ setOpenParentDialog }) {
  const dispatch = useDispatch();
  const [showNextContent, setShowNextContent] = useState(false);
  const [parentName, setParentName] = useState("");
  const [studentName, setStudentName] = useState("");
  const [studentClass, setStudentClass] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");

  const selectedMap = useSelector((state) => state.location.selectedMap);

  const [selectedImage, setSelectedImage] = useState(null);
  const [image, setImage] = useState(null);
  const handleImageSelect = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();

      reader.onload = (e) => {
        setSelectedImage(e.target.result);
      };

      reader.readAsDataURL(file);
    }
  };

  const clearImage = () => {
    setSelectedImage(null);
    setImage(null);
  };
  const handleParentRegister = (e) => {
    e.preventDefault();
    const formData = new FormData();
    const parentData = {
      name: parentName,
      address: address,
      email: email,
      contact,
    };
    const location = JSON.parse(selectedMap);
    console.log(location);
    const studentData = {
      name: studentName,
      class: studentClass,
      longitude: location.lng,
      latitude: location.lat,
    };

    formData.append("parentData", JSON.stringify(parentData));
    formData.append("studentData", JSON.stringify(studentData));
    formData.append("image", image);

    dispatch(registerParent({ formData })).then((action) => {
      if (registerParent.fulfilled.match(action)) {
        setParentName("");
        setAddress("");
        setEmail("");
        setContact("");
        setStudentName("");
        setStudentClass("");
        setSelectedImage(null);
        setImage(null);
        setOpenParentDialog(false);
      }
    });
  };
  const toggleNextContent = () => {
    setShowNextContent(!showNextContent);
  };
  return (
    <Box>
      <Box>
        <form onSubmit={handleParentRegister}>
          {showNextContent ? (
            <Box>
              <ChooseMap />
              <Paper elevation={3} style={{ padding: "20px" }}>
                <Typography variant="h6" gutterBottom>
                  Upload an Image
                </Typography>
                <Box style={{ textAlign: "center" }}>
                  {!selectedImage ? (
                    <>
                      <input
                        accept="image/*"
                        style={{ display: "none" }}
                        id="image-input"
                        type="file"
                        onChange={handleImageSelect}
                      />
                      <label htmlFor="image-input">
                        <IconButton
                          color="primary"
                          aria-label="upload picture"
                          component="span"
                        >
                          <CloudUploadIcon
                            sx={{ fontSize: 50, color: "#FAE500" }}
                          />
                        </IconButton>
                        <Typography variant="body1" color="textSecondary">
                          Click to select an image
                        </Typography>
                      </label>
                    </>
                  ) : (
                    <>
                      <img
                        src={selectedImage}
                        alt="Selected"
                        style={{ maxWidth: "100%", maxHeight: "100px" }}
                      />
                      <Button
                        variant="outlined"
                        onClick={clearImage}
                        style={{ marginTop: "10px", color: "black" }}
                      >
                        Clear
                      </Button>
                    </>
                  )}
                </Box>
              </Paper>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  mt: 3,
                  mb: 2,
                  background: "#FAE500",
                  color: "#0074CC",
                  "&:hover": { background: "#0074CC", color: "#FAE500" },
                }}
              >
                Register
              </Button>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "flex-start",
                }}
              >
                <Button
                  variant="contained"
                  sx={{
                    mt: 1,
                    mb: 2,

                    background: "#FAE500",
                    color: "#0074CC",
                    "&:hover": { background: "#0074CC", color: "#FAE500" },
                  }}
                  onClick={toggleNextContent}
                >
                  Back
                </Button>
              </Box>
            </Box>
          ) : (
            <Box>
              <TextField
                margin="normal"
                required
                fullWidth
                label="Name"
                autoComplete="off"
                autoFocus
                value={parentName}
                onChange={(e) => setParentName(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                label="Address"
                autoComplete="off"
                autoFocus
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />

              <TextField
                type="email"
                margin="normal"
                required
                fullWidth
                label="Email"
                autoComplete="off"
                autoFocus
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                type="number"
                margin="normal"
                required
                fullWidth
                label="Contact"
                autoComplete="off"
                autoFocus
                value={contact}
                onChange={(e) => setContact(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                label="Student Name"
                autoComplete="off"
                autoFocus
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                label="Student class"
                autoComplete="off"
                autoFocus
                value={studentClass}
                onChange={(e) => setStudentClass(e.target.value)}
              />
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <Button
                  variant="contained"
                  sx={{
                    mt: 3,
                    mb: 2,

                    background: "#FAE500",
                    color: "#0074CC",
                    "&:hover": { background: "#0074CC", color: "#FAE500" },
                  }}
                  onClick={toggleNextContent}
                >
                  Next
                </Button>
              </Box>
            </Box>
          )}
        </form>
      </Box>
    </Box>
  );
}

export default AdminDashboard;
