import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import TaskCard from "./TaskCard";

const TaskBoard = () => {
  const [tasks, setTasks] = useState({
    toDo: [
      { id: "1", title: "Task 1", assignedTo: "User 1" },
      { id: "2", title: "Task 2", assignedTo: "User 2" }
    ],
    inProgress: [
      { id: "3", title: "Task 3", assignedTo: "User 3" }
    ],
    done: []
  });

  const handleDragEnd = (result) => {
    const { source, destination } = result;

    if (!destination) return;

    const sourceTasks = [...tasks[source.droppableId]];
    const destTasks = [...tasks[destination.droppableId]];

    const [removed] = sourceTasks.splice(source.index, 1);
    destTasks.splice(destination.index, 0, removed);

    setTasks({
      ...tasks,
      [source.droppableId]: sourceTasks,
      [destination.droppableId]: destTasks
    });
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className="grid grid-cols-3 gap-6">
        {["toDo", "inProgress", "done"].map((status) => (
          <Droppable droppableId={status} key={status}>
            {(provided) => (
              <div 
                className="p-4 bg-gray-100 rounded-lg" 
                {...provided.droppableProps} 
                ref={provided.innerRef}
              >
                <h2 className="text-xl font-bold mb-4">{status.replace(/([A-Z])/g, ' $1').toUpperCase()}</h2>
                {tasks[status].map((task, index) => (
                  <Draggable draggableId={task.id} index={index} key={task.id}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <TaskCard task={task} onMove={(id, status) => handleMove(id, status)} />
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        ))}
      </div>
    </DragDropContext>
  );
};

export default TaskBoard;
