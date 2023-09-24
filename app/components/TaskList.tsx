import ITask from "@/lib/types/ITask";
import React from "react";

const TaskList = ({ tasks }: { tasks: ITask[] }) => {
  return (
    <div>
      {tasks.length === 0 ? (
        <p>No tasks yet.</p>
      ) : (
        <>
          <p>You have: {tasks.length} tasks</p>
          {tasks.map(() => (
            <p>"abc"</p>
          ))}
        </>
      )}
    </div>
  );
};

export default TaskList;
