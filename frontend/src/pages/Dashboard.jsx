// import React, { useEffect, useState } from "react";
// import API from "../services/api";
// import Navbar from "../components/Navbar";

// function Dashboard() {

//     const [students, setStudents] = useState([]);

//     const [form, setForm] = useState({
//         name: "",
//         age: "",
//         course: ""
//     });

//     const [editingId, setEditingId] = useState(null);

//     // GET STUDENTS
//     const fetchStudents = async () => {
//         try {
//             const res = await API.get("/students");
//             setStudents(res.data);
//         } catch (err) {
//             console.log(err);
//         }
//     };

//     useEffect(() => {
//         fetchStudents();
//     }, []);

//     // HANDLE INPUT
//     const handleChange = (e) => {
//         setForm({
//             ...form,
//             [e.target.name]: e.target.value
//         });
//     };

//     // ADD OR UPDATE
//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         try {

//             if (editingId) {
//                 await API.put(`/students/${editingId}`, form);
//                 alert("Student Updated");
//             } else {
//                 await API.post("/students", form);
//                 alert("Student Added");
//             }

//             setForm({
//                 name: "",
//                 age: "",
//                 course: ""
//             });

//             setEditingId(null);

//             fetchStudents();

//         } catch (err) {
//             console.log(err);
//         }
//     };

//     // DELETE
//     const deleteStudent = async (id) => {
//         await API.delete(`/students/${id}`);
//         fetchStudents();
//     };

//     // EDIT
//     const editStudent = (student) => {
//         setForm(student);
//         setEditingId(student._id);
//     };

//     return (
//         <>
//             <Navbar />

//             <div className="dashboard">

//                 <form onSubmit={handleSubmit} className="form">
//                     <h2>
//                         {editingId ? "Edit Student" : "Add Student"}
//                     </h2>

//                     <input
//                         type="text"
//                         name="name"
//                         placeholder="Name"
//                         value={form.name}
//                         onChange={handleChange}
//                     />

//                     <input
//                         type="number"
//                         name="age"
//                         placeholder="Age"
//                         value={form.age}
//                         onChange={handleChange}
//                     />

//                     <input
//                         type="text"
//                         name="course"
//                         placeholder="Course"
//                         value={form.course}
//                         onChange={handleChange}
//                     />

//                     <button type="submit">
//                         {editingId ? "Update" : "Add"}
//                     </button>
//                 </form>

//                 <div className="students">

//                     <h2>Students List</h2>

//                     {
//                         students.map((student) => (
//                             <div key={student._id} className="card">

//                                 <h3>{student.name}</h3>

//                                 <p>Age: {student.age}</p>

//                                 <p>Course: {student.course}</p>

//                                 <button
//                                     onClick={() => editStudent(student)}
//                                 >
//                                     Edit
//                                 </button>

//                                 <button
//                                     onClick={() => deleteStudent(student._id)}
//                                 >
//                                     Delete
//                                 </button>

//                             </div>
//                         ))
//                     }

//                 </div>

//             </div>
//         </>
//     );
// }

// export default Dashboard;




import React from "react";
import Navbar from "../components/Navbar";

function Dashboard() {
    return (
        <>
            <Navbar />

            <div className="full-page page dashboard">

                <h1>Dashboard</h1>

                <div className="cards">

                    <div className="card">
                        <h2>Students</h2>
                        <p>Manage student records</p>
                    </div>

                    <div className="card">
                        <h2>Courses</h2>
                        <p>Manage courses</p>
                    </div>

                    <div className="card">
                        <h2>Users</h2>
                        <p>User management</p>
                    </div>

                </div>

            </div>
        </>
    );
}

export default Dashboard;