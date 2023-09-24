"use client";

import ITask from "@/lib/types/ITask";
import { useRouter } from "next/navigation";
import React from "react";

const url = process.env.NEXT_PUBLIC_URL;

const TaskCard = ({ task }: { task: ITask }) => {
  const router = useRouter();

  const deleteTask = async () => {
    try {
      const res = await fetch(`${url}/api/tasks/${task.id}`, {
        method: "DELETE",
      });

      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-between">
      <h2>{task.title}</h2>
      <button onClick={deleteTask}>DEL</button>
    </div>
  );
};

export default TaskCard;
