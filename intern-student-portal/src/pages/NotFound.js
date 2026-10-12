import React from "react";

import {
  Container,
  Typography,
  Button,
} from "@mui/material";

import { Link } from "react-router-dom";

function NotFound() {
  return (
    <Container sx={{ mt: 8, textAlign: "center" }}>
      <Typography variant="h1">
        404
      </Typography>

      <Typography variant="h5" sx={{ mb: 3 }}>
        Page Not Found
      </Typography>

      <Typography sx={{ mb: 3 }}>
        Sorry, the page you are looking for does not exist.
      </Typography>

      <Button
        variant="contained"
        component={Link}
        to="/"
      >
        Go Home
      </Button>
    </Container>
  );
}

export default NotFound;