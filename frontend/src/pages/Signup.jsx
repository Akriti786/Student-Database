import React, { useState } from "react";
import api from "../services/api";
import { useNavigate, Link } from "react-router-dom";

function Signup() {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        name: "",
        email: "",
        password: ""
    });


    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();


        try {
            await api.post("auth/signup", form);

            alert("Signup Success");

            navigate("/");

        } catch (err) {
            alert(err.response.data.message);
        }
    };


    return (
        <div className="auth full-page">
            <form onSubmit={handleSubmit} className="form">
                <h2>Signup</h2>

                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    onChange={handleChange}
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                />

                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={handleChange}
                />

                <button type="submit">
                    Signup
                </button>

                <p>
                    Already have account?
                    <Link to="/">Login</Link>
                </p>
            </form>
        </div>
    );
}


export default Signup;