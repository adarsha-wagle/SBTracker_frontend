import React, { useState } from "react";
import { Box, TextField, Typography, Button } from "@mui/material";
import ChooseMap from "./choose_map_location";
function AdminDashboard() {
  const [showNextContent, setShowNextContent] = useState(false);
  const [parentName, setParentName] = useState("");
  const [studentName, setStudentName] = useState("");
  const [studentClass, setStudentClass] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");

  // const selectedMap = useSelector(state=>state.location.selectedMap);

  const handleParentRegister = (e) => {
    e.preventDefault();

    const parentData = {
      name: parentName,
      address: address,
      email: email,
      contact,
    };
    const studentData = {
      name: studentName,
      class: studentClass,
    };
    console.log("parent", parentData);
    console.log("student", studentData);
  };
  const toggleNextContent = () => {
    setShowNextContent(!showNextContent);
  };
  return (
    <Box>
      <Box>
        <Typography variant="body1">Parent Info</Typography>
        {showNextContent ? (
          <Box>
            <ChooseMap />

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
            <form onSubmit={handleParentRegister}>
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
            </form>
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default AdminDashboard;
