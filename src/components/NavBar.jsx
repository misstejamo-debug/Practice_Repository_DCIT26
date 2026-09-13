import {Link} from "react-router-dom";

export default function NavBar(){
    return(
        <nav className="flex flex row justify-left py-2 py-4 bg-yellow-100 text-black gap-4 ">
            <Link to="/">Home</Link>
            <Link to="/students">Students</Link>
        </nav>
    )
}