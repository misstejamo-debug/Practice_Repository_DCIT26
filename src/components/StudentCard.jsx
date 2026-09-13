import { Link } from "react-router-dom";

export default function StudentCard({student: {id, name, studentNumber, course, section, age}}){
    return(
        <div className="flex flex-col gap-2 border-2 border-gray-100 rounded-lg p-4">
            <h2 className="text-lg font-bold">{student.name}</h2>
            <p>Student Number: {studentNumber}</p>
            <p>Course: {course}</p>
            <Link to= {`/students/${id}`}>View Details</Link>
        </div>
    )
}