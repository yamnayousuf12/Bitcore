"use client";
import DateFilter from "@/components/timetracker/DateFilter";
// import StatsCard from "@/components/timetracker/StatsCard";
import TaskTable from "@/components/timetracker/TaskTable";
import WeeklySummary from "@/components/timetracker//WeeklySummary";
import { stats, tasks, weeklyData } from "./mockData";
import { DynamicStatsCards, StaticStatsCard } from "@/components/timetracker/StatsCard";
import { IconBaseProps } from "react-icons";
import { ArrowLeft } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="p-4 space-y-6 text-white">
     
      <div className="absolute left-24 -translate-x-1/2 flex items-center gap-2 md:-mt-20  -mt-24 text-base lg:hidden text-[#BAD4EF] flex-shrink-0 bg-r
      ">
  {/* Back Arrow Icon */}
  <ArrowLeft className="h-5 w-5 cursor-pointer hover:text-white" />

  {/* Text */}
  <span className="font-medium tracking-wide">Task Management</span>
</div>
      <DateFilter />
      

      <div className="p-6 space-y-8">
      <StaticStatsCard />   {/* Desktop only */}
      <DynamicStatsCards /> {/* Mobile only */}
    </div>
      <TaskTable tasks={tasks} />
      <WeeklySummary data={weeklyData} />
    </div>
  );
}