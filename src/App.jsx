import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import StudentList from "./pages/StudentList";
import StudentDetails from "./pages/StudentDetails";
import NavBar from "./components/NavBar";

export default function App(){
  return(
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/students" element={<StudentList/>}></Route>
        <Route path="/students/:id" element={<StudentDetails/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}