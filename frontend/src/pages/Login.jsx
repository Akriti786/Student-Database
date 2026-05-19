import React, { useState } from "react";
import api from "../services/api";
import { useNavigate, Link } from "react-router-dom";

function Login() {
    const navigate = useNavigate();

    const [form, setForm] = useState({
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
            const res = await api.post("/auth/login", form);

            localStorage.setItem("token", res.data.token);

            alert("Login Success");

            navigate("/home");

        } catch (err) {
            alert(err.response.data.message);
        }
    };

    return (
        <div className="auth full-page">
            <form onSubmit={handleSubmit} className="form">
                <h2>Login</h2>

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
                    Login
                </button>

                <p>
                    Don't have account?
                    <Link to="/signup"> Signup</Link>
                </p>
            </form>
        </div>
    );
}

export default Login;