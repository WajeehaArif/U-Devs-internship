
import React from "react";
import {
  Container,
  Typography,
  Button,
  Paper,
  Box,
  Grid,
} from "@mui/material";

import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import { Link } from "react-router-dom";

function Home({ students }) {
  return (
    <Container maxWidth="lg" sx={{ mt: 5, mb: 6 }}>
      <Paper
        elevation={0}
        sx={{
          p: { xs: 3, md: 5 },
          mb: 4,
          borderRadius: 4,
          color: "white",
          background:
            "linear-gradient(120deg, #292c55, #4d4fbc 65%, #8b5cf6)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Box sx={{ position: "relative", zIndex: 1 }}>
          <Typography
            variant="overline"
            sx={{ letterSpacing: 2, opacity: 0.85 }}
          >
            STUDENT MANAGEMENT SYSTEM
          </Typography>

          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
              mt: 1,
              mb: 2,
              fontSize: { xs: "2rem", md: "3rem" },
            }}
          >
            Welcome to your portal.
          </Typography>

          <Typography
            sx={{
              maxWidth: 550,
              lineHeight: 1.8,
              opacity: 0.9,
              mb: 3,
            }}
          >
            Manage student records, explore student details,
            and keep your academic information organized in
            one place.
          </Typography>

          <Button
            component={Link}
            to="/students"
            variant="contained"
            endIcon={<ArrowForwardIcon />}
            sx={{
              mr: 2,
              mb: 1,
              background: "#ffffff !important",
              color: "#4546c8",
              "&:hover": {
                background: "#f0efff !important",
              },
            }}
          >
            View Students
          </Button>

          <Button
            component={Link}
            to="/add-student"
            variant="outlined"
            startIcon={<PersonAddAlt1Icon />}
            sx={{
              mb: 1,
              color: "white",
              borderColor: "rgba(255,255,255,0.65)",
              "&:hover": {
                borderColor: "white",
                background: "rgba(255,255,255,0.1)",
              },
            }}
          >
            Add Student
          </Button>
        </Box>

        <SchoolOutlinedIcon
          sx={{
            position: "absolute",
            right: { xs: -20, md: 35 },
            bottom: { xs: -25, md: -35 },
            fontSize: { xs: 150, md: 250 },
            opacity: 0.09,
            transform: "rotate(-12deg)",
          }}
        />
      </Paper>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Paper
            elevation={0}
            sx={{
              p: 3,
              display: "flex",
              alignItems: "center",
              gap: 2,
              minHeight: 135,
            }}
          >
            <Box
              sx={{
                width: 58,
                height: 58,
                borderRadius: 3,
                display: "grid",
                placeItems: "center",
                color: "#5b5ce2",
                bgcolor: "#eeeeff",
                flexShrink: 0,
              }}
            >
              <SchoolOutlinedIcon sx={{ fontSize: 32 }} />
            </Box>

            <Box>
              <Typography color="text.secondary">
                Total Students
              </Typography>

              <Typography variant="h4" sx={{ mt: 0.5 }}>
                {students.length}
              </Typography>

              <Typography variant="body2" color="text.secondary">
                Students in your current list
              </Typography>
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Paper
            elevation={0}
            sx={{
              p: 3,
              display: "flex",
              alignItems: "center",
              gap: 2,
              minHeight: 135,
            }}
          >
            <Box
              sx={{
                width: 58,
                height: 58,
                borderRadius: 3,
                display: "grid",
                placeItems: "center",
                color: "#7c3aed",
                bgcolor: "#f2eaff",
                flexShrink: 0,
              }}
            >
              <PersonAddAlt1Icon sx={{ fontSize: 32 }} />
            </Box>

            <Box>
              <Typography color="text.secondary">
                Quick Action
              </Typography>

              <Typography variant="h6" sx={{ mt: 0.5 }}>
                Register a student
              </Typography>

              <Button
                component={Link}
                to="/add-student"
                size="small"
                endIcon={<ArrowForwardIcon />}
                sx={{ mt: 0.5, px: 0 }}
              >
                Open form
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Home;
