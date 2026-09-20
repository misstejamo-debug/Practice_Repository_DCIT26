import { useParams, useNavigate } from "react-router-dom";

export default function StudentDetails({ students }) {
    const { id } = useParams();
    const navigate = useNavigate();

    const student = students.find((s) => String(s.id) === String(id));

    if (!student) {
        return (
            <div className="flex items-center justify-center h-screen bg-pink-100">
                <p className="text-xl text-gray-500">Student not found!</p>
            </div>
        );
    }

    return (
        <div className="flex items-center justify-center h-screen bg-pink-100">
            <div className="bg-white rounded-2xl shadow-lg p-8 w-96 flex flex-col gap-4">

                {/* Avatar / Initial */}
                <div className="flex flex-col items-center gap-2">
                    <div className="w-20 h-20 rounded-full bg-pink-400 flex items-center justify-center text-white text-3xl font-bold">
                        {student.name.charAt(0)}
                    </div>
                    <h2 className="text-2xl font-bold text-pink-600">{student.name}</h2>
                    <span className="text-sm text-gray-400">{student.studentNumber}</span>
                </div>

                <hr className="border-pink-200" />

                {/* Details */}
                <div className="flex flex-col gap-3 text-gray-600">
                    <div className="flex justify-between">
                        <span className="font-semibold text-pink-500">Course</span>
                        <span>{student.course}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="font-semibold text-pink-500">Section</span>
                        <span>{student.section}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="font-semibold text-pink-500">Sex</span>
                        <span>{student.sex}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="font-semibold text-pink-500">Email</span>
                        <span>{student.email}</span>
                    </div>
                </div>

                <hr className="border-pink-200" />

                {/* Back Button */}
                <button
                    onClick={() => navigate("/students")}
                    className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 rounded-xl transition"
                >
                    ← Back to Students
                </button>

            </div>
        </div>
    );
}