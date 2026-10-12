import React from "react";

import {
  Container,
  Typography,
  Paper,
  Button,
} from "@mui/material";

import {
  useParams,
  useNavigate,
} from "react-router-dom";

function StudentDetail({ students }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const student = students.find(
    (student) => String(student.id) === id
  );

  if (!student) {
    return (
      <Container sx={{ mt: 4 }}>
        <Typography variant="h5">
          Student not found
        </Typography>

        <Button
          variant="contained"
          onClick={() => navigate("/students")}
          sx={{ mt: 2 }}
        >
          Back to Students
        </Button>
      </Container>
    );
  }

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom>
          Student Details
        </Typography>

        <Typography variant="h6" sx={{ mt: 2 }}>
          Name: {student.name}
        </Typography>

        <Typography sx={{ mt: 2 }}>
          Email: {student.email}
        </Typography>

        <Typography sx={{ mt: 2 }}>
          Course: {student.course}
        </Typography>

        <Button
          variant="contained"
          onClick={() => navigate("/students")}
          sx={{ mt: 3 }}
        >
          Back to Students
        </Button>
      </Paper>
    </Container>
  );
}

export default StudentDetail;