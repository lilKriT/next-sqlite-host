import ITask from "@/lib/types/ITask";
import { usePrisma } from "@/lib/usePrisma";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

export default async function Home() {
  const tasks: ITask[] = await usePrisma.task.findMany();

  return (
    <main className="min-h-screen flex justify-center">
      <div className="container">
        <h1>SQLite test</h1>
        <TaskList tasks={tasks} />
        <TaskForm />
      </div>
    </main>
  );
}
