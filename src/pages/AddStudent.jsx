import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddStudent({ onAdd }) {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        name: "",
        studentNumber: "",
        course: "BSIT",
        section: "",
        email: "",
        sex: "Male",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (form.name.trim() === "") return;

        onAdd(form);
        setForm({ name: "", studentNumber: "", course: "BSIT", section: "", email: "", sex: "Male" });
        navigate("/students");
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-pink-200">
            <div className="bg-white rounded-2xl shadow-md p-8 w-96">
                <h2 className="text-2xl font-bold mb-6 text-center text-pink-600">Add Student</h2>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">

                    <div className="flex flex-col gap-1">
                        <label className="text-sm font-semibold text-pink-500">Full Name</label>
                        <input type="text" name="name"
                            placeholder="e.g. Jessa"
                            value={form.name} onChange={handleChange}
                            className="border border-pink-200 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400" />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label className="text-sm font-semibold text-pink-500">Student Number</label>
                        <input type="text" name="studentNumber"
                            placeholder="e.g. S01234"
                            value={form.studentNumber} onChange={handleChange}
                            className="border border-pink-200 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400" />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label className="text-sm font-semibold text-pink-500">Course</label>
                        <select name="course" value={form.course} onChange={handleChange}
                            className="border border-pink-200 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400">
                            <option value="BSIT">BSIT</option>
                            <option value="BSCS">BSCS</option>
                            <option value="BSEM">BSEM</option>
                            <option value="BSED">BSED</option>
                            <option value="BSBA">BSBA</option>
                            <option value="BSN">BSN</option>
                        </select>
                    </div>

                    <div className="flex flex-col gap-1">
                        <label className="text-sm font-semibold text-pink-500">Section</label>
                        <input type="text" name="section"
                            placeholder="e.g. 3-7"
                            value={form.section} onChange={handleChange}
                            className="border border-pink-200 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400" />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label className="text-sm font-semibold text-pink-500">Sex</label>
                        <select name="sex" value={form.sex} onChange={handleChange}
                            className="border border-pink-200 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400">
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </div>

                    <div className="flex flex-col gap-1">
                        <label className="text-sm font-semibold text-pink-500">Email</label>
                        <input type="email" name="email"
                            placeholder="e.g. jessa@example.com"
                            value={form.email} onChange={handleChange}
                            className="border border-pink-200 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400" />
                    </div>

                    <button type="submit"
                        className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 rounded-xl transition mt-2">
                        Add Student
                    </button>

                </form>
            </div>
        </div>
    );
}