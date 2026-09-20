import {Link} from "react-router-dom";

export default function NavBar(){
    return(
        <nav className="flex flex row justify-center py-2 py-4 bg-yellow-100 text-black gap-6 ">
            <Link to="/">Home</Link>
            <Link to="/students">Students</Link>
            <Link to="/addStudent">Add Student</Link>
        </nav>
    )
}