import React, { useState } from "react";
import { Button, Dialog, DialogContent, Box } from "@mui/material";
// import RegisterStudent from "../admin_register/reigster_student";
import RegisterParent from "../student_register/register_parent";
function AdminContent() {
  const [openParentDialog, setOpenParentDialog] = useState(false);
  // const [openStudentDialog, setOpenStudentDialog] = useState(false);
  return (
    <Box sx={{ mt: "4rem" }}>
      <Box
        sx={{
          mt: 3,
          mb: 2,
          display: "flex",
          justifyContent: "flex-end",
          pr: "3rem",
        }}
      >
        <Button
          variant="contained"
          sx={{
            background: "#FAE500",
            color: "#0074CC",
            "&:hover": { background: "#0074CC", color: "#FAE500" },
          }}
          onClick={() => setOpenParentDialog(true)}
        >
          Register Parent
        </Button>
      </Box>
      {/* <Button
        fullWidth
        variant="contained"
        sx={{
          mt: 3,
          mb: 2,
          background: "#FAE500",
          color: "#0074CC",
          "&:hover": { background: "#0074CC", color: "#FAE500" },
        }}
        onClick={() => setOpenStudentDialog(true)}
      >
        Register Student
      </Button> */}
      {/* <Dialog
        open={openStudentDialog}
        onClose={() => setOpenStudentDialog(false)}
      >
        <DialogContent>
          <RegisterStudent />
        </DialogContent>
      </Dialog> */}
      <Dialog
        open={openParentDialog}
        onClose={() => setOpenParentDialog(false)}
        maxWidth="xs"
        fullWidth
      >
        <DialogContent>
          <RegisterParent setOpenParentDialog={setOpenParentDialog} />
        </DialogContent>
      </Dialog>
    </Box>
  );
}

export default AdminContent;
