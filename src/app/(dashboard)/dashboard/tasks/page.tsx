import TaskBoard from "@/components/task/TaskBoard";

export default function TasksPage() {
  return (
    <div className="text-white/30 md:border md:rounded-lg md:p-6 md:bg-gradient-to-b  from-white/[0.08] to-white/[0.03]  shadow-lg md:w-[940px] mx-auto md:mt-0 relative md:-ml-12 -mt-10 ">
      <div className="absolute left-24 -translate-x-1/2 flex items-center -mt-8 text-base lg:hidden text-[#BAD4EF] itemes-eflex-shrink-0">
      <span className="font-semibold tracking-wide "> ← User Mangement</span>
      </div>
      <TaskBoard />
    </div>
  );
}
