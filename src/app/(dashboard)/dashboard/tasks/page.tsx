import TaskBoard from "@/components/task/TaskBoard";
import { ArrowLeft } from "lucide-react";

export default function TasksPage() {
  return (
    <div className="text-white/30 md:border md:rounded-lg md:p-6 md:bg-gradient-to-b  from-white/[0.08] to-white/[0.03]  shadow-lg md:w-[940px] mx-auto md:-mt-4 relative md:-ml-12 -mt-10 ">
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
