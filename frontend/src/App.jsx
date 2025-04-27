// import React from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
// import Navbar from "./components/Navbar.jsx";
// import Dashboard from "./pages/Dashboard.jsx";
// import LoginPage from "./pages/LoginPage.jsx";
// import RegisterPage from "./pages/RegisterPage.jsx";

// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <div className="p-8">
//         <Routes>
//           <Route path="/" element={<Dashboard />} />
//           <Route path="/login" element={<LoginPage />} />
//           <Route path="/register" element={<RegisterPage />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;
import React from "react";
import { Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default App;
