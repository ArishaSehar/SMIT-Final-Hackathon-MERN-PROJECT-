import React from "react";

const TaskCard = ({ task, onMove }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-4">
      <h3 className="text-xl font-semibold">{task.title}</h3>
      <p className="text-gray-500">Assigned: {task.assignedTo}</p>
      <div className="mt-2 flex justify-between">
        <button 
          className="bg-blue-500 text-white px-4 py-1 rounded" 
          onClick={() => onMove(task.id, "inProgress")}>
          In Progress
        </button>
        <button 
          className="bg-green-500 text-white px-4 py-1 rounded" 
          onClick={() => onMove(task.id, "done")}>
          Done
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
