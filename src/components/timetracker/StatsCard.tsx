import { FaUsers, FaClock, FaTasks } from "react-icons/fa";
import type { IconType } from "react-icons";

// ✅ Static Version (Desktop Only)
export function StaticStatsCard() {
  return (
    <div className="hidden md:flex bg-gradient-to-r  from-white/[0.08] to-white/[0.03]  text-white rounded-xl p-6 justify-around items-center shadow-lg  mx-auto border border-white/30 sm:w-[107.8%]  
    md:w-[123.5%]  
    lg:w-[116%] 
    xl:w-[111%] 
    2xl:w-[110%] 2xl:-ml-8 lg:-ml-[8%] xl:-ml-9 md:-ml-[14%] sm:-ml-0 -ml-8">
      {/* Team Members */}
      <div className="flex items-center space-x-4">
        <div className="bg-gray3 p-4 rounded-full">
          <FaUsers className="text-3xl text-white" />
        </div>
        <div>
          <p className="text-sm text-gray">Team Members</p>
          <h2 className="text-2xl font-bold">25</h2>
        </div>
      </div>

      {/* Divider */}
      <div className="h-14 w-px bg-gray"></div>

      {/* Avg Daily Hours */}
      <div className="flex items-center space-x-4">
        <div className="bg-gray3 p-4 rounded-full">
          <FaClock className="text-3xl text-white" />
        </div>
        <div>
          <p className="text-sm text-gray">Avg. Daily Hours</p>
          <h2 className="text-2xl font-bold">6.8</h2>
        </div>
      </div>

      {/* Divider */}
      <div className="h-14 w-px bg-gray"></div>

      {/* Active Tasks */}
      <div className="flex items-center space-x-4">
        <div className="bg-gray3 p-4 rounded-full">
          <FaTasks className="text-3xl text-white" />
        </div>
        <div>
          <p className="text-sm text-gray">Active Tasks</p>
          <h2 className="text-2xl font-bold">12</h2>
        </div>
      </div>
    </div>
  );
}

// ✅ Dynamic Version (Mobile Only)
interface StatsCardProps {
  title: string;
  value: number | string;
  icon: IconType;
}

function SingleStatsCard({ title, value, icon: Icon }: StatsCardProps) {
  return (
    <div className="relative bg-[#0f172a] text-white rounded-xl shadow-lg p-4 flex flex-col w-[100px] -ml-14 border border-white/20 -mt-12 ">
      <div className="absolute top-3 right-3 bg-[#0b1f3a] p-2 rounded-full w-5 h-5 ml-4">
        <Icon size={20} className="text-white w-3 -mt-2" />
      </div>
      <div>
        <p className="text-gray text-[10px] mt-7 w-20">{title}</p>
        <h2 className="text-xs font-bold">{value}</h2>
      </div>
    </div>
  );
}

export function DynamicStatsCards() {
  return (
    <div className="grid grid-cols-3 gap-24 md:hidden">
      <SingleStatsCard title="Team Members" value={25} icon={FaUsers} />
      <SingleStatsCard title="Avg. Daily Hours" value={6.8} icon={FaClock} />
      <SingleStatsCard title="Active Tasks" value={12} icon={FaTasks} />
    </div>
  );
}
