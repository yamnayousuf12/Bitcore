// import React from 'react'
// import Sidebar from './Sidebar'
// import Topbar from './Topbar'

// const Dashboard = () => {
//   return (
//     <div>
//         <Topbar/>
//         <Sidebar/>
//     </div>
//   )
// }

// export default Dashboard



"use client";
// import Sidebar from "../sidebar/Sidebar";
// import Topbar from "../topber/Topbar";
// import StatsCards from "./StatsCards";
import Activity from "./Activity";
import QuickActions from "./QuickActions";
import ResponsiveTeam from "./ResponsiveTeam";
import ResponsiveStats from "./stats/ResponsiveStats";


export default function DashboardPage() {
  return (
    <div>
     
      <main className="flex-auto p-3 md:p-6 lg:p-8">
        
        <h1 className="text-sm font-semibold mb-6 p-5 -mt-10 md:hidden">Home / Dashboard </h1>
        <ResponsiveStats />
        <div className="grid md:grid-cols-2 gap-6 mb-6 mt-8 ">
          <Activity />
          <QuickActions />
        </div>
      <ResponsiveTeam/>
      </main> 
    </div>
  );
}
