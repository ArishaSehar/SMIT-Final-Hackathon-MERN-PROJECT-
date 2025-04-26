import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage.jsx';
import RegisterPage from './pages/RegisterPage.jsx';
import DashboardPage from './pages/DashboardPage.jsx';
import ProfilePage from './pages/ProfilePage.jsx';
import LeavesPage from './pages/LeavesPage.jsx';
import SalaryPage from './pages/SalaryPage.jsx';
import ProtectedRoute from './components/ProtectedRoutes.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/leaves" element={<LeavesPage />} />
        <Route path="/salary" element={<SalaryPage />} />
      </Route>
    </Routes>
  );
}

export default App;
