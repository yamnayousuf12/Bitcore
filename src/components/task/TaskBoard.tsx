"use client";
import Column from "./Column";
import TaskCard from "./TaskCard";
import BoardHeader from "./BoardHeader";
import { useTasks } from "@/hooks/useTasks";

export default function TaskBoard() {
  const { query, setQuery, byStatus } = useTasks();

  const todo = byStatus("todo");
  const inprogress = byStatus("inprogress");
  const review = byStatus("review");
  const done = byStatus("done");

  return (
    <div className="space-y-4 sm:space-y-6" >
      <BoardHeader query={query} setQuery={setQuery} />

      <div className="grid grid-cols-1 md:grid-cols-4 xl:grid-cols-4 gap-4 sm:gap-0">
        <Column title="Pending" count={todo.length} accent="text-yellow">
          {todo.map((t) => <TaskCard key={t.id} task={t} />)}
        </Column>

        <Column title="In Progress" count={inprogress.length} accent="text-Blue">
          {inprogress.map((t) => <TaskCard key={t.id} task={t} />)}
        </Column>

        <Column title="Delayed" count={review.length} accent="text-Red">
          {review.map((t) => <TaskCard key={t.id} task={t} />)}
        </Column>

        <Column title="Completed" count={done.length} accent="text-green">
          {done.map((t) => <TaskCard key={t.id} task={t} />)}
        </Column>
      </div>
    </div>
  );
}
