
import React from "react";

import {
  Container,
  Typography,
  Grid,
  Box,
} from "@mui/material";

import StudentCard from "../components/StudentCard";
import SearchBar from "../components/SearchBar";

function Students({
  students,
  onDelete,
  search,
  setSearch,
}) {
  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 5 }}>
      <Box sx={{ mb: 3 }}>
        <Typography
          variant="h4"
          sx={{ fontWeight: 800, mb: 1 }}
        >
          All Students
        </Typography>

        <Typography color="text.secondary">
          Browse, search, and manage your student records.
        </Typography>
      </Box>

      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      {filteredStudents.length === 0 ? (
        <Box
          sx={{
            textAlign: "center",
            py: 6,
            px: 2,
            backgroundColor: "white",
            border: "1px dashed #d6d9e8",
            borderRadius: 4,
          }}
        >
          <Typography variant="h6" sx={{ mb: 1 }}>
            {students.length === 0
              ? "No students yet"
              : "No students found"}
          </Typography>

          <Typography color="text.secondary">
            {students.length === 0
              ? "Add your first student to get started."
              : "Try searching with a different name."}
          </Typography>
        </Box>
      ) : (
        <Grid container spacing={3}>
          {filteredStudents.map((student) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={student.id}
            >
              <StudentCard
                student={student}
                onDelete={onDelete}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
}

export default Students;
