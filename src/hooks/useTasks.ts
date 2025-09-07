import { useMemo, useState } from "react";
import { Task, TaskStatus } from "../lib/task";
import { mockTasks } from "../lib/mockTasks";

export function useTasks() {
  const [query, setQuery] = useState("");
  const [tasks, setTasks] = useState<Task[]>(mockTasks);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return tasks;
    return tasks.filter(t =>
      [t.title, t.description, t.role].some(v => v?.toLowerCase().includes(q))
    );
  }, [tasks, query]);

  const byStatus = (status: TaskStatus) => filtered.filter(t => t.status === status);

  return { tasks, setTasks, query, setQuery, byStatus };
}
