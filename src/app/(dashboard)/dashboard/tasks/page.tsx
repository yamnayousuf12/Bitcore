import TaskBoard from "@/components/task/TaskBoard";
import { ArrowLeft } from "lucide-react";

export default function TasksPage() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 pt-20 md:pt-24 pb-10 md:pb-16 2xl:pb-20 max-w-7xl mx-auto ">
      <div className="absolute left-24 -translate-x-1/2 flex items-center gap-2 -mt-9 text-base lg:hidden text-[#BAD4EF] flex-shrink-0">
  {/* Back Arrow Icon */}
  <ArrowLeft className="h-5 w-5 cursor-pointer hover:text-white" />

  {/* Text */}
  <span className="font-medium tracking-wide">Task Management</span>
</div>
      <TaskBoard />
    </div>
  );
}
