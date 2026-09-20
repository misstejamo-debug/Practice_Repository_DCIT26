import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import StudentList from "./pages/StudentList";
import StudentDetails from "./pages/StudentDetails";
import NavBar from "./components/NavBar";
import AddStudent from "./pages/AddStudent";
import studentData from "./data/studentData.json"; 

export default function App() {
    const [students, setStudents] = useState(studentData); 

    const addStudent = (newStudent) => {
        const newEntry = {
            ...newStudent,
            id: students.length + 1,
        };
        setStudents([...students, newEntry]);
    };

    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/students" element={<StudentList students={students} />} />
                <Route path="/students/:id" element={<StudentDetails students={students} />} />
                <Route path="/addstudent" element={<AddStudent onAdd={addStudent} />} />
            </Routes>
        </BrowserRouter>
    );
}