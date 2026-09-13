import StudentCard from "./components/StudentCard"
import studentData from "./data/studentData"

export default function StudentList(){
    return(
        <div>
            <h1 className="text-center text-2xl font-bold mb-4">Student List</h1>
            <p>This is the Student List page.</p>
            <div className="grid grid-cols-3 gap-4">
                {studentData.map((student)=> (
                    <StudentCard key={student.id}
                                student={student} 
                    />
                ))}
            </div>
        </div>
    )
}