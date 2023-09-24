import ITask from "@/lib/types/ITask";
import { usePrisma } from "@/lib/usePrisma";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

export default async function Home() {
  const tasks: ITask[] = await usePrisma.task.findMany();

  return (
    <main className="min-h-screen flex justify-center">
      <div className="container">
        <h1>SQLite test!</h1>
        <TaskList tasks={tasks} />
        <TaskForm />
      </div>
    </main>
  );
}

// Adding those two lines fixed revalidating. Or maybe just one of them?
// I also added cache on the fetch requests.
// But no cache on fetch alone DIDN'T fix it.
// I can safely remove no cache from fetch and it still works.
// Now checking if I can remove one of those lines.
// export const dynamic = "force-dynamic";
export const revalidate = 0;
// Works fine with just revalidate!

// Also just checked - the way build is set up, the database is not being wiped out with every commit!
