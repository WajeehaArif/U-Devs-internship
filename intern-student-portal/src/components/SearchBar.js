import React from "react";
import { TextField } from "@mui/material";

function SearchBar({ search, setSearch }) {
  return (
    <TextField
      fullWidth
      label="Search students by name"
      variant="outlined"
      value={search}
      onChange={(event) => setSearch(event.target.value)}
      sx={{ mb: 3 }}
    />
  );
}

export default SearchBar;