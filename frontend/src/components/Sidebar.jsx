import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="bg-blue-900 text-white w-64 min-h-screen p-4">
      <h2 className="text-xl font-bold mb-6">Employee Panel</h2>
      <nav className="flex flex-col gap-3">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/leaves">Leaves</Link>
        <Link to="/salary">Salary</Link>
        <Link to="/">Logout</Link>
      </nav>
    </div>
  );
};

export default Sidebar;
