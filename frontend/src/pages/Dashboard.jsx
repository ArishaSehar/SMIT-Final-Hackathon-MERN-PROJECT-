import React from "react";
import TaskBoard from "../components/TaskBoard.jsx";

const Dashboard = () => {
  return (
    <div className="mt-6">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-700">
        Task Board
      </h1>
      <TaskBoard />
    </div>
  );
};

export default Dashboard;
