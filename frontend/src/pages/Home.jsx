import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function Home() {
    return (
        <>
            <Navbar />

            <section className="hero">
                {/* LEFT CONTENT */}
                <div className="hero-content">
                    <span className="hero-badge">
                        MERN Stack Student Portal
                    </span>

                    <h1>
                        Manage Student Records with Ease
                    </h1>

                    <p>
                        A centralized system to manage student profiles, academic records,
                        course enrollment, attendance, and performance tracking in one place.
                    </p>

                    <div className="hero-buttons">
                        <Link to="/students">
                            <button className="primary-btn">
                                View Students
                            </button>
                        </Link>

                        <Link to="/dashboard">
                            <button className="secondary-btn">
                                Go to Dashboard
                            </button>
                        </Link>
                    </div>

                    {/* QUICK STATS */}
                    <div className="hero-stats">
                        <div className="stat-box">
                            <h3>📚 Records</h3>
                            <p>Centralized student data management</p>
                        </div>

                        <div className="stat-box">
                            <h3>🧾 Attendance</h3>
                            <p>Track daily attendance efficiently</p>
                        </div>

                        <div className="stat-box">
                            <h3>📈 Performance</h3>
                            <p>Monitor grades & academic progress</p>
                        </div>
                    </div>
                </div>

                {/* RIGHT VISUAL SECTION */}
                <div className="hero-image">
                    <div className="glass-card">
                        <h2>🎓 Student Records System</h2>
                        <p>
                            Manage personal details, course enrollments, marks,
                            and academic history in a structured dashboard.
                        </p>
                    </div>

                    <div className="glass-card">
                        <h2>🗂 Organized Data</h2>
                        <p>
                            Keep all student records clean, searchable, and easy to update.
                        </p>
                    </div>

                    <div className="glass-card">
                        <h2>⚡ Real-time Updates</h2>
                        <p>
                            Instantly reflect changes across dashboard and student views.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Home;