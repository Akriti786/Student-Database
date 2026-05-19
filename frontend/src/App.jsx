// // import React from "react";
// // import {
// //     BrowserRouter,
// //     Routes,
// //     Route,
// //     Navigate
// // } from "react-router-dom";

// // import Login from "./pages/Login";
// // import Signup from "./pages/Signup";
// // import Dashboard from "./pages/Dashboard";

// // import "./App.css";

// // function App() {

// //     const token = localStorage.getItem("token");

// //     return (
// //         <BrowserRouter>

// //             <Routes>

// //                 <Route
// //                     path="/"
// //                     element={<Login />}
// //                 />

// //                 <Route
// //                     path="/signup"
// //                     element={<Signup />}
// //                 />

// //                 <Route
// //                     path="/dashboard"
// //                     element={
// //                         token
// //                             ? <Dashboard />
// //                             : <Navigate to="/" />
// //                     }
// //                 />

// //             </Routes>

// //         </BrowserRouter>
// //     );
// // }

// // export default App;



// import React from "react";
// import {
//     BrowserRouter,
//     Routes,
//     Route,
//     Navigate
// } from "react-router-dom";

// import Login from "./pages/Login";
// import Signup from "./pages/Signup";
// import Home from "./pages/Home";
// import Dashboard from "./pages/Dashboard";
// import Students from "./pages/Students";

// import "./App.css";

// function App() {

//     const token = localStorage.getItem("token");

//     return (
//         <BrowserRouter>

//             <Routes>

//                 <Route
//                     path="/"
//                     element={<Login />}
//                 />

//                 <Route
//                     path="/signup"
//                     element={<Signup />}
//                 />

//                 <Route
//                     path="/home"
//                     element={
//                         token
//                             ? <Home />
//                             : <Navigate to="/" />
//                     }
//                 />

//                 <Route
//                     path="/dashboard"
//                     element={
//                         token
//                             ? <Dashboard />
//                             : <Navigate to="/" />
//                     }
//                 />

//                 <Route
//                     path="/students"
//                     element={
//                         token
//                             ? <Students />
//                             : <Navigate to="/" />
//                     }
//                 />

//             </Routes>

//         </BrowserRouter>
//     );
// }

// export default App;




import React from "react";

import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Students from "./pages/Students";

import ProtectedRoute from "./components/ProtectedRoute";
import "./App.css";

function App() {

    return (
        <BrowserRouter>

            <Routes>

                {/* PUBLIC ROUTES */}

                <Route
                    path="/"
                    element={<Login />}
                />

                <Route
                    path="/signup"
                    element={<Signup />}
                />

                {/* PROTECTED ROUTES */}

                <Route
                    path="/home"
                    element={
                        <ProtectedRoute>
                            <Home />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/dashboard"
                    element={
                        <ProtectedRoute>
                            <Dashboard />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/students"
                    element={
                        <ProtectedRoute>
                            <Students />
                        </ProtectedRoute>
                    }
                />

            </Routes>

        </BrowserRouter>
    );
}

export default App;