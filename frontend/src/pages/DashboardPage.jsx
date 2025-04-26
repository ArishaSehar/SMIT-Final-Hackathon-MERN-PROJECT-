import Sidebar from '../components/Sidebar';

const DashboardPage = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-6 bg-gray-100">
        <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-white rounded shadow">✅ Check-In/Out Status</div>
          <div className="p-4 bg-white rounded shadow">📆 Leave Status</div>
          <div className="p-4 bg-white rounded shadow">👤 Profile Summary</div>
          <div className="p-4 bg-white rounded shadow">💰 Salary Info</div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
