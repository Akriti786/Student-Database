import React, { useEffect, useState } from "react";
import api from "../services/api";
import Navbar from "../components/Navbar";

function Students() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const [form, setForm] = useState({
    name: "",
    age: "",
    course: ""
  });

  const [editingId, setEditingId] = useState(null);

  // FETCH STUDENTS
  const fetchStudents = async () => {
    try {
      setLoading(true);
      const res = await api.get("/students");
      setStudents(res.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  // INPUT CHANGE
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ADD / UPDATE
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.age || !form.course) {
      return alert("Please fill all fields");
    }

    try {
      if (editingId) {
        await api.put(`/students/${editingId}`, form);
      } else {
        await api.post("/students", form);
      }

      setForm({ name: "", age: "", course: "" });
      setEditingId(null);
      fetchStudents();
    } catch (err) {
      console.log(err);
    }
  };

  // DELETE
  const deleteStudent = async (id) => {
    const ok = window.confirm("Delete this student?");
    if (!ok) return;

    try {
      await api.delete(`/students/${id}`);
      fetchStudents();
    } catch (err) {
      console.log(err);
    }
  };

  const deleteAllStudents = async () => {
  const ok = window.confirm("⚠️ This will delete ALL your students. Continue?");
  if (!ok) return;

  try {
    await api.delete("/students");
    fetchStudents();
  } catch (err) {
    console.log(err);
  }
};
  // EDIT
  const editStudent = (student) => {
    setForm({
      name: student.name,
      age: student.age,
      course: student.course
    });

    setEditingId(student._id);

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // FILTER
  const filteredStudents = students.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase())
  );

return (
    <>
        <Navbar />

        <div className="full-page page">

            <div className="page-header">
                <div>
                    <h1>Student Management</h1>
                    <p>Add, update and manage students easily</p>
                </div>

             <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
  <input
    className="search-input"
    placeholder="Search students..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
  />

  <button
    onClick={deleteAllStudents}
    style={{
      background: "var(--danger)",
      color: "white",
      border: "none",
      padding: "10px 14px",
      borderRadius: "10px",
      cursor: "pointer",
      fontWeight: "600"
    }}
  >
    Delete All
  </button>
</div>
            </div>

            <div className="students-layout">

                {/* FORM */}
                <div className="card">
                    <form onSubmit={handleSubmit} className="student-form">
                        <h2>{editingId ? "Edit Student" : "Add Student"}</h2>

                        <input
                            name="name"
                            placeholder="Name"
                            value={form.name}
                            onChange={handleChange}
                        />

                        <input
                            name="age"
                            placeholder="Age"
                            value={form.age}
                            onChange={handleChange}
                        />

                        <input
                            name="course"
                            placeholder="Course"
                            value={form.course}
                            onChange={handleChange}
                        />

                        <button className="submit-btn">
                            {editingId ? "Update" : "Add"}
                        </button>
                    </form>
                </div>

                {/* LIST */}
                <div className="card">
                    <div className="section-title">
                        <h2>Students</h2>
                        <span>{filteredStudents.length}</span>
                    </div>

                    <div className="students-grid">
                        {filteredStudents.map((student) => (
                            <div className="student-card" key={student._id}>
                                <div className="avatar">
                                    {student.name?.charAt(0)}
                                </div>

                                <h3>{student.name}</h3>
                                <p>🎂 {student.age}</p>
                                <p>📘 {student.course}</p>

                                <div className="card-buttons">
                                    <button
                                        className="edit-btn"
                                        onClick={() => editStudent(student)}
                                    >
                                        Edit
                                    </button>

                                    <button
                                        className="delete-btn"
                                        onClick={() => deleteStudent(student._id)}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    </>
);
}

export default Students;