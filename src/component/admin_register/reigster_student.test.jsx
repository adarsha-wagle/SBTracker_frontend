import React, { useState } from "react";
import { Box, TextField, Typography, Button } from "@mui/material";
function AdminDashboard() {
  const [studentName, setStudentName] = useState("");
  const [studentAddress, setStudentAddress] = useState("");
  const [studentClass, setStudentClass] = useState("");

  const handleStudentRegister = (e) => {
    e.preventDefault();
    const data = {
      name: studentName,
      address: studentAddress,
      class: studentClass,
    };
    console.log(data);
  };
  return (
    <Box>
      <Box>
        <Typography variant="body1">Student Info</Typography>
        <Box>
          <form onSubmit={handleStudentRegister}>
            <TextField
              margin="normal"
              required
              fullWidth
              label="Student Name"
              name="Name"
              autoComplete="off"
              autoFocus
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              label="Address"
              name="Address"
              autoComplete="off"
              autoFocus
              value={studentAddress}
              onChange={(e) => setStudentAddress(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              label="Class"
              name="Name"
              autoComplete="off"
              autoFocus
              value={studentClass}
              onChange={(e) => setStudentClass(e.target.value)}
            />
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
          </form>
        </Box>
      </Box>
    </Box>
  );
}

export default AdminDashboard;
