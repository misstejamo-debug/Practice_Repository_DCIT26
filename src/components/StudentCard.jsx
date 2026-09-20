import { Link } from "react-router-dom";

export default function StudentCard({ student: { id, name, studentNumber, course, section } }) {
    return (
        <div className="flex flex-col gap-3 border-2 border-pink-200 rounded-2xl p-5 bg-white shadow-sm hover:shadow-md transition h-full">

            <div className="w-10 h-10 rounded-full bg-pink-400 flex items-center justify-center text-white font-bold">
                {name.charAt(0)}
            </div>

            <h2 className="text-lg font-bold text-pink-600">{name}</h2>
            <p className="text-sm text-gray-500">#{studentNumber}</p>
            <p className="text-sm text-gray-600"><span className="font-semibold">Course:</span> {course}</p>
            <p className="text-sm text-gray-600"><span className="font-semibold">Section:</span> {section}</p>

            <Link
                to={`/students/${id}`}
                className="mt-auto text-center bg-pink-500 hover:bg-pink-600 text-white text-sm font-semibold py-2 rounded-xl transition"
            >
                View Details →
            </Link>
        </div>
    );
}