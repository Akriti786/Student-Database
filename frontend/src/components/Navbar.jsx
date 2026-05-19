import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {

    const navigate = useNavigate();

    const [menuOpen, setMenuOpen] = useState(false);

    const logout = () => {
        localStorage.removeItem("token");
        navigate("/");
    };

    return (
        <nav className="navbar">

            <h2 className="logo">
                StudentMS
            </h2>

            <div
                className="menu-toggle"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                ☰
            </div>

            <div
                className={
                    menuOpen
                        ? "nav-links active"
                        : "nav-links"
                }
            >

                <Link to="/home">
                    <button>Home</button>
                </Link>

                <Link to="/students">
                    <button>Students</button>
                </Link>

                <Link to="/dashboard">
                    <button>Dashboard</button>
                </Link>

                <button
                    className="logout-btn"
                    onClick={logout}
                >
                    Logout
                </button>

            </div>

        </nav>
    );
}

export default Navbar;