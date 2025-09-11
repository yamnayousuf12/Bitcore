// // app/(dashboard)/dashboard/page.tsx
// "use client";
// import Image from "next/image";
// import { DashboardImages } from "@/assests/dashboard";

// export default function DashboardPage() {
//   return (
//     <div className="grid gap-6">
//       {/* ===== Stats Strip ===== */}
//       <section className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/[0.04] p-4 sm:p-6">
//   <div className="flex flex-col sm:flex-row sm:items-stretch gap-4 sm:gap-0 sm:divide-x sm:divide-white/15">
//     <StatItem
//       icon={
//         <Image
//           src={DashboardImages.firsticon}
//           alt="Total Users"
//           width={60} // bigger than 100 now
//           height={60}
//           className="object-contain"
//         />
//       }
//       label="Total Users:"
//       value="25"
//     />

//     <StatItem
//       icon={
//         <Image
//           src={DashboardImages.secondicon}
//           alt="Pending Tasks"
//           width={60}
//           height={60}
//           className="object-contain"
//         />
//       }
//       label="Pending Tasks:"
//       value="08"
//     />

//     <StatItem
//       icon={
//         <Image
//           src={DashboardImages.thirdicon}
//           alt="Complete Tasks"
//           width={60}
//           height={60}
//           className="object-contain"
//         />
//       }
//       label="Complete Tasks:"
//       value="05"
//     />

//     <StatItem
//       icon={
//         <Image
//           src={DashboardImages.fourthicon}
//           alt="Average Hours"
//           width={60}
//           height={60}
//           className="object-contain"
//         />
//       }
//       label="Avg. Hours/Day:"
//       value="7.5"
//     />
//   </div>
// </section>

//       {/* ===== Middle Row: Recent + Quick Actions ===== */}
//       <section className="grid md:grid-cols-2 gap-6">
//         {/* Recent Activity */}
//         <div
//         className="rounded-2xl border border-white/10 p-4 sm:p-5"
//         style={{
//         background:
//         "linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%, rgba(19, 43, 96, 0.15) 100%)"
//         }}
//         >
//           <h3 className="text-sm text-white/70 mb-4">Recent Activity:</h3>

//           <ul className="space-y-4">
//             <RecentItem
//               name="Ayesha Kandar"
//               detail="Updated Report"
//               time="25 minutes ago"
//             />
//             <RecentItem
//               name="Sara Ali"
//               detail="Request for tomorrow leave"
//               time="40 minutes ago"
//             />
//           </ul>
//         </div>

//         {/* Quick Actions */}
//         <div
//         className="rounded-2xl border border-white/10 p-4 sm:p-5"
//         style={{
//         background:
//         "linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%, rgba(19, 43, 96, 0.15) 100%)",
//         }}
//         >
//           <h3 className="text-sm text-white/60 mb-4">Quick Actions:</h3>

//           <div className="grid grid-cols-2 gap-3 sm:gap-4">
//             <PillButton icon={<UsersIcon />} label="Add User" />
//             <PillButton icon={<PlusIcon />} label="Create Task" />
//             <PillButton icon={<CheckCircleIcon />} label="Approve Leave" />
//             <PillButton icon={<DocIcon />} label="View Reports" />
//           </div>
//         </div>
//       </section>

//       {/* ===== Team Performance ===== */}
//       <section className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.03] p-4 sm:p-5">
//         <h3 className="text-sm text-white/70 mb-4">Team Performance Overview</h3>

//         <div className="rounded-2xl border border-white/10 overflow-hidden">
//           <table className="w-full text-sm">
//             <thead>
//               <tr className="bg-[#0e1a2f] text-white/80">
//                 <Th>Name</Th>
//                 <Th>Role</Th>
//                 <Th>Active Task</Th>
//                 <Th>Time Today</Th>
//                 <Th>Status</Th>
//               </tr>
//             </thead>
//             <tbody className="[&>tr:nth-child(even)]:bg-white/[0.02]">
//               <Row name="Mahnoor" role="HR" task="Meeting Schedule" time="4hr" status="Online" />
//               <Row name="Raheel" role="Manager" task="Work Distribution" time="8hr" status="Online" />
//               <Row name="Ayesha" role="UI/UX Designer" task="MCM App" time="4hr" status="Offline" />
//               <Row name="Mahveen" role="Developer" task="Api Integration" time="4hr" status="Online" />
//               <Row name="Safia Seher" role="Q/A" task="Q/A Report" time="3 hr" status="Offline" />
//             </tbody>
//           </table>
//         </div>
//       </section>
//     </div>
//   );
// }

// /* ---------- Small building blocks ---------- */


// function RecentItem({
//   name,
//   detail,
//   time,
// }: {
//   name: string;
//   detail: string;
//   time: string;
// }) {
//   return (
//     <li className="flex items-start gap-3">
//       <div className="h-9 w-9 rounded-full bg-white/90" />
//       <div className="flex-1">
//         <div className="text-sm">
//           <span className="font-medium">{name}</span>{" "}
//           <span className="text-white/70">- {detail}</span>
//         </div>
//         <div className="text-xs text-white/50">{time}</div>
//       </div>
//     </li>
//   );
// }



// function Th({ children }: { children: React.ReactNode }) {
//   return (
//     <th className="text-left font-medium px-4 py-3 first:pl-5 last:pr-5">
//       {children}
//     </th>
//   );
// }

// function Row({
//   name,
//   role,
//   task,
//   time,
//   status,
// }: {
//   name: string;
//   role: string;
//   task: string;
//   time: string;
//   status: "Online" | "Offline";
// }) {
//   const statusColor =
//     status === "Online" ? "text-emerald-400" : "text-orange-400";

//   return (
//     <tr className="border-t border-white/10">
//       <Td>{name}</Td>
//       <Td>{role}</Td>
//       <Td>{task}</Td>
//       <Td>{time}</Td>
//       <Td>
//         <span className={statusColor}>{status}</span>
//       </Td>
//     </tr>
//   );
// }

// function Td({ children }: { children: React.ReactNode }) {
//   return <td className="px-4 py-3 first:pl-5 last:pr-5">{children}</td>;
// }

// /* ---------- Minimal inline icons (no deps) ---------- */

// function UsersIcon() {
//   return (
//     <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
//       <circle cx="9" cy="8" r="3.5" stroke="currentColor" strokeWidth="1.8" />
//       <path d="M2.5 19c.6-3.1 3.3-5 6.5-5s5.9 1.9 6.5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
//       <circle cx="17" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.6" />
//       <path d="M14.5 16.2c1-.9 2.3-1.5 3.7-1.5 2 0 3.8 1 4.3 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
//     </svg>
//   );
// }



// function PlusIcon() {
//   return (
//     <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
//       <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
//     </svg>
//   );
// }

// function CheckCircleIcon() {
//   return (
//     <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
//       <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
//       <path d="M8.5 12.5l2.5 2.5L16 10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
//     </svg>
//   );
// }



// function StatItem({
//   icon,
//   label,
//   value
// }: {
//   icon: React.ReactNode;
//   label: string;
//   value: string | number;
// }) {
//   return (
//     <div className="flex-1 flex items-center gap-4 px-1 sm:px-4">
//       <div className="shrink-0 flex items-center justify-center">
//         {icon}
//       </div>
//       <div className="flex items-baseline gap-2">
//         <span className="text-xs sm:text-sm text-white/70">{label}</span>
//         <span className="text-2xl font-semibold">{value}</span>
//       </div>
//     </div>
//   );
// }


// function DocIcon() {
//   return (
//     <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
//       <path d="M7 3h7l5 5v13H7z" stroke="currentColor" strokeWidth="1.8" />
//       <path d="M14 3v5h5" stroke="currentColor" strokeWidth="1.8" />
//     </svg>
//   );
// }

// function PillButton({ icon, label }: { icon: React.ReactNode; label: string }) {
//   return (
//     <button className="flex items-center justify-center gap-2 rounded-full border border-white/20 bg-[#FFFFFF26] px-4 h-11 hover:bg-white/30 transition">
//       <span className="opacity-90">{icon}</span>
//       <span className="text-sm">{label}</span>
//     </button>
//   );
// }

"use client";
import Image from "next/image";
import { DashboardImages } from "@/assests/dashboard";


export default function DashboardPage() {
  return (
    <div className="grid gap-6">
      {/* ===== Desktop Stats Strip ===== */}
<section className="hidden lg:block rounded-2xl border border-white/15 bg-gradient-to-b from-white/10 to-white/[0.04] p-4"> 
  <div className="flex gap-3 flex-1 items-stretch divide-x divide-white/30">
    <StatItem
      icon={
        <Image
          src={DashboardImages.firsticon}
          alt="Total Users"
          width={50}
          height={50}
          className="object-contain"
        />
      }
      label="Total Users:"
      value="25"
    />

    <StatItem
      icon={
        <Image
          src={DashboardImages.secondicon}
          alt="Pending Tasks"
          width={50}
          height={50}
          className="object-contain"
        />
      }
      label="Pending Tasks:"
      value="08"
    />

    <StatItem
      icon={
        <Image
          src={DashboardImages.thirdicon}
          alt="Complete Tasks"
          width={50}
          height={50}
          className="object-contain"
        />
      }
      label="Complete Tasks:"
      value="05"
    />

    <StatItem
      icon={
        <Image
          src={DashboardImages.fourthicon}
          alt="Average Hours"
          width={50}
          height={50}
          className="object-contain"
        />
      }
      label="Avg. Hours/Day:"
      value="7.5"
    />
  </div>
</section>
<div className="absolute left-20 -translate-x-1/2 flex items-center -mt-16 text-base lg:hidden text-[#BAD4EF]">
      <span className="font-semibold tracking-wide ">Home/Dashboard</span>
      </div>
{/* ===== Mobile Stats Strip ===== */}
<section className="block lg:hidden">
  
  <div className="grid grid-cols-2 gap-4 -mt-5">
    <StatItemProps
      icon={
        <Image
          src={DashboardImages.firsticon}
          alt="Total Users"
          width={30}
          height={30}
          className="object-contain"
        />
      }
      label="Total Users:"
      value="25"
      
    />

    <StatItemProps
      icon={
        <Image
          src={DashboardImages.secondicon}
          alt="Pending Tasks"
          width={30}
          height={30}
          className="object-contain"
        />
      }
      label="Pending Tasks:"
      value="08"
    
    />

    <StatItemProps
      icon={
        <Image
          src={DashboardImages.thirdicon}
          alt="Complete Tasks"
          width={30}
          height={30}
          className="object-contain"
        />
      }
      label="Complete Tasks:"
      value="05"
     
    />

    <StatItemProps
      icon={
        <Image
          src={DashboardImages.fourthicon}
          alt="Average Hours"
          width={30}
          height={30}
          className="object-contain"
        />
      }
      label="Avg. Hours/Day:"
      value="7.5"
      
    />
  </div>
</section>




      {/* ===== Middle Row: Recent + Quick Actions ===== */}
      <section className="grid md:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <div
          className="rounded-2xl border border-white/10 p-4 sm:p-5"
          style={{
            background:
              "linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%, rgba(19, 43, 96, 0.15) 100%)",
          }}
        >
          <h3 className="text-sm text-white/70 mb-4">Recent Activity:</h3>

          <ul className="space-y-4">
            <RecentItem
              name="Ayesha Kandar"
              detail="Updated Report"
              time="25 minutes ago"
            />
            <RecentItem
              name="Sara Ali"
              detail="Request for tomorrow leave"
              time="40 minutes ago"
            />
          </ul>
        </div>

        {/* Quick Actions */}
        <div
          className="rounded-2xl border border-white/10 p-4 sm:p-5"
          style={{
            background:
              "linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%, rgba(19, 43, 96, 0.15) 100%)",
          }}
        >
          <h3 className="text-sm text-white/60 mb-4">Quick Actions:</h3>

          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <PillButton icon={<UsersRound />} label="Add User" />
            <PillButton icon={<PlusIcon />} label="Add Task" />
            <PillButton icon={<MessageCircle />} label="Chat" />
            <PillButton icon={<LucideSettings  />} label="Settings" />
          </div>
        </div>
      </section>

      {/* ===== Team Performance ===== */}
      <section className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.03] p-4 sm:p-5">
        <h3 className="text-sm text-white/70 mb-4">Team Performance Overview 
        ( Top 5 )</h3>

        {/* Mobile: Cards */}
        <div className="space-y-3 sm:hidden">
          <TeamCard
            name="Mahnoor"
            role="HR"
            task="Meeting Schedule"
            time="4hr"
            status="Online"
          />
          <TeamCard
            name="Raheel"
            role="Manager"
            task="Work Distribution"
            time="8hr"
            status="Online"
          />
          <TeamCard
            name="Ayesha"
            role="UI/UX Designer"
            task="MCM App"
            time="4hr"
            status="Offline"
          />
          <TeamCard
            name="Mahveen"
            role="Developer"
            task="Api Integration"
            time="4hr"
            status="Online"
          />
          <TeamCard
            name="Safia Seher"
            role="Q/A"
            task="Q/A Report"
            time="3 hr"
            status="Offline"
          />
        </div>

        {/* Desktop: Table */}
        <div className="hidden sm:block rounded-2xl border border-white/10 overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[#0e1a2f] text-white/80">
                <Th>Name</Th>
                <Th>Role</Th>
                <Th>Active Task</Th>
                <Th>Time Today</Th>
                <Th>Status</Th>
              </tr>
            </thead>
            <tbody className="[&>tr:nth-child(even)]:bg-white/[0.02]">
              <Row
                name="Mahnoor"
                role="HR"
                task="Meeting Schedule"
                time="4hr"
                status="Online"
              />
              <Row
                name="Raheel"
                role="Manager"
                task="Work Distribution"
                time="8hr"
                status="Online"
              />
              <Row
                name="Ayesha"
                role="UI/UX Designer"
                task="MCM App"
                time="4hr"
                status="Offline"
              />
              <Row
                name="Mahveen"
                role="Developer"
                task="Api Integration"
                time="4hr"
                status="Online"
              />
              <Row
                name="Safia Seher"
                role="Q/A"
                task="Q/A Report"
                time="3 hr"
                status="Offline"
              />
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

/* ---------- Building blocks ---------- */

function RecentItem({
  name,
  detail,
  time,
}: {
  name: string;
  detail: string;
  time: string;
}) {
  return (
    <li className="flex items-start gap-3">
      <div className="h-9 w-9 rounded-full bg-white/90" />
      <div className="flex-1">
        <div className="text-sm">
          <span className="font-medium">{name}</span>{" "}
          <span className="text-white/70">- {detail}</span>
        </div>
        <div className="text-xs text-white/50">{time}</div>
      </div>
    </li>
  );
}

function Th({ children }: { children: React.ReactNode }) {
  return (
    <th className="text-left font-medium px-4 py-3 first:pl-5 last:pr-5">
      {children}
    </th>
  );
}

function Row({
  name,
  role,
  task,
  time,
  status,
}: {
  name: string;
  role: string;
  task: string;
  time: string;
  status: "Online" | "Offline";
}) {
  const statusColor =
    status === "Online" ? "text-emerald-400" : "text-orange-400";

  return (
    <tr className="border-t border-white/10">
      <Td>{name}</Td>
      <Td>{role}</Td>
      <Td>{task}</Td>
      <Td>{time}</Td>
      <Td>
        <span className={statusColor}>{status}</span>
      </Td>
    </tr>
  );
}

function Td({ children }: { children: React.ReactNode }) {
  return <td className="px-4 py-3 first:pl-5 last:pr-5">{children}</td>;
}

function TeamCard({
  name,
  role,
  task,
  time,
  status,
}: {
  name: string;
  role: string;
  task: string;
  time: string;
  status: "Online" | "Offline";
}) {
  const statusColor =
    status === "Online" ? "text-green" : "text-orange";

  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.05] p-4">
      <div className="flex justify-between items-center mb-2">
        <span className="font-medium">{name}</span>
        <span className={`text-sm ${statusColor}`}>{status}</span>
      </div>
      <p className="text-xs text-white/70">Role: {role}</p>
      <p className="text-xs text-white/70">Task: {task}</p>
      <p className="text-xs text-white/70">Time: {time}</p>
    </div>
  );
}

/* ---------- Minimal inline icons (no deps) ---------- */
function UsersRound() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <circle cx="9" cy="8" r="3.5" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M2.5 19c.6-3.1 3.3-5 6.5-5s5.9 1.9 6.5 5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <circle cx="17" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M14.5 16.2c1-.9 2.3-1.5 3.7-1.5 2 0 3.8 1 4.3 3"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function PlusIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 5v14M5 12h14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MessageCircle() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M8.5 12.5l2.5 2.5L16 10"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function LucideSettings() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        d="M7 3h7l5 5v13H7z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path d="M14 3v5h5" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

function StatItem({
  icon,
  label,
  value,

}: {
  icon: React.ReactNode;
  label: string;
  value: string | number;

}) {
  return (
    <div className="flex-1 flex gap-4 px-3">
      <div className="mb-2">{icon}</div>
      <div className="flex flex-col mb-2">
        <span className="text-xs text-white/70 mt-3">{label}</span>
        <span className="text-xl font-semibold  text-white   ">{value}</span>
      </div>
    </div>
  );
}


type StatItemProps = {
  icon: React.ReactNode;
  label: string;
  value: string;
};

const StatItemProps = ({ icon, label, value }: StatItemProps) => {
  return (
    <div className="flex flex-col rounded-xl bg-gradient-to-b from-white/5 to-white/[0.02] p-4 shadow-md">
      <div className="mb-2 ml-20">{icon}</div>
      <p className="text-xs text-white/70 ">{label}</p>
      <p className="text-xl font-semibold text-white">{value}</p>
    </div>
  );
};


function PillButton({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <button className="flex items-center justify-center gap-2 rounded-full border border-white/20 bg-[#FFFFFF26] px-4 h-11 hover:bg-white/30 transition">
      <span className="opacity-90">{icon}</span>
      <span className="text-sm">{label}</span>
    </button>
  );
}