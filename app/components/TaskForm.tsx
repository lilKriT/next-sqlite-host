"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const url = process.env.NEXT_PUBLIC_URL;

const TaskForm = () => {
  const [title, setTitle] = useState("");
  const router = useRouter();

  const addTask = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch(`${url}/api/tasks`, {
        method: "POST",
        body: JSON.stringify({ title }),
        // cache: "no-store",
      });

      router.refresh();
      setTitle("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={(e) => addTask(e)}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button>Add task</button>
      </form>
    </div>
  );
};

export default TaskForm;
