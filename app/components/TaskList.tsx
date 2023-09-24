import ITask from "@/lib/types/ITask";
import React from "react";
import TaskCard from "./TaskCard";

const TaskList = ({ tasks }: { tasks: ITask[] }) => {
  return (
    <div>
      {tasks.length === 0 ? (
        <p>No tasks yet.</p>
      ) : (
        <>
          <p>You have: {tasks.length} tasks</p>
          {tasks.map((task) => (
            <TaskCard task={task} key={task.id} />
          ))}
        </>
      )}
    </div>
  );
};

export default TaskList;
