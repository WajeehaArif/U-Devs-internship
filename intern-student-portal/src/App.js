import React, { useState } from "react";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Students from "./pages/Students";
import AddStudent from "./pages/AddStudent";
import StudentDetail from "./pages/StudentDetail";
import NotFound from "./pages/NotFound";

import "./App.css";

function App() {
  const [students, setStudents] = useState([]);

  const [search, setSearch] = useState("");

  const handleAddStudent = (newStudent) => {
    setStudents((previousStudents) => [
      ...previousStudents,
      newStudent,
    ]);
  };

  const handleDeleteStudent = (id) => {
    setStudents((previousStudents) =>
      previousStudents.filter(
        (student) => student.id !== id
      )
    );
  };

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={<Home students={students} />}
        />

        <Route
          path="/students"
          element={
            <Students
              students={students}
              onDelete={handleDeleteStudent}
              search={search}
              setSearch={setSearch}
            />
          }
        />

        <Route
          path="/add-student"
          element={
            <AddStudent onAdd={handleAddStudent} />
          }
        />

        <Route
          path="/student/:id"
          element={
            <StudentDetail students={students} />
          }
        />

        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;