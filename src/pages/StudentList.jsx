import StudentCard from "../components/StudentCard";

export default function StudentList({ students }) {
    return (
        <div className="min-h-screen bg-pink-200 py-8 px-8">
            <h1 className="text-center text-2xl font-bold mb-2 text-black">Student List</h1>
            <p className="text-center text-black mb-6">This is the Student List page.</p>

                <div className="grid grid-cols-3 gap-4">
                    {students.map((student) => (
                        <StudentCard key={student.id} student={student} />
                    ))}
                </div>
            </div>
    );
}