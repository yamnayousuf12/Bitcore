"use client";
import DateFilter from "@/components/timetracker/DateFilter";
// import StatsCard from "@/components/timetracker/StatsCard";
import TaskTable from "@/components/timetracker/TaskTable";
import WeeklySummary from "@/components/timetracker//WeeklySummary";
import { stats, tasks, weeklyData } from "./mockData";
import { DynamicStatsCards, StaticStatsCard } from "@/components/timetracker/StatsCard";
import { IconBaseProps } from "react-icons";

export default function DashboardPage() {
  return (
    <div className="p-4 space-y-6 text-white">
      <div className="absolute left-24 -translate-x-1/2 flex items-center -mt-24 text-base lg:hidden text-[#BAD4EF]">
      <span className="font-semibold tracking-wide ">← Time Tracker</span>
      </div>
      <DateFilter />
      {/* <div className=" grid grid-cols-1 md:grid-rows-1 gap-4 md:gap-0">
        {stats.map((item, idx) => (
          <DynamicStatsCards key={idx} {...item} />
        ))}
      </div>

      <StaticStatsCard/> */}
      {/* <DynamicStatsCard title={""} value={""} icon={function (props: IconBaseProps): React.ReactNode {
        throw new Error("Function not implemented.");
      } }/> */}

      <div className="p-6 space-y-8">
      <StaticStatsCard />   {/* Desktop only */}
      <DynamicStatsCards /> {/* Mobile only */}
    </div>
      <TaskTable tasks={tasks} />
      <WeeklySummary data={weeklyData} />
    </div>
  );
}