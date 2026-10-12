
import React from "react";

import {
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  Avatar,
} from "@mui/material";

import { Link } from "react-router-dom";

function StudentCard({ student, onDelete }) {
  return (
    <Card sx={{ height: "100%" }}>
      <CardContent>
        <Avatar
          sx={{
            width: 54,
            height: 54,
            mb: 2,
            fontWeight: 700,
            fontSize: "1.25rem",
            color: "#4b4cc7",
            background: "#ececff",
          }}
        >
          {student.name.charAt(0).toUpperCase()}
        </Avatar>

        <Typography variant="h6" gutterBottom>
          {student.name}
        </Typography>

        <Typography color="text.secondary">
          Email: {student.email}
        </Typography>

        <Typography sx={{ mt: 1 }}>
          Course: {student.course}
        </Typography>

        <Box
          sx={{
            mt: 2,
            display: "flex",
            gap: 1,
            flexWrap: "wrap",
          }}
        >
          <Button
            variant="contained"
            component={Link}
            to={`/student/${student.id}`}
          >
            View Details
          </Button>

          <Button
            variant="outlined"
            color="error"
            onClick={() => onDelete(student.id)}
          >
            Delete
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}

export default StudentCard;
