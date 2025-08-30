"use client";

type TeamMember = {
  name: string;
  role: string;
  activeTask: string;
  time: string;
  status: "Online" | "Offline";
};

const teamData: TeamMember[] = [
  { name: "Mahnoor", role: "HR", activeTask: "Meeting Schedule", time: "4hr", status: "Online" },
  { name: "Raheel", role: "Manager", activeTask: "Work Distribution", time: "8hr", status: "Online" },
  { name: "Ayesha", role: "UI/UX Designer", activeTask: "MCM App", time: "4hr", status: "Offline" },
  { name: "Mahveen", role: "Developer", activeTask: "Api Integration", time: "4hr", status: "Online" },
  { name: "Safia Seher", role: "Q/A", activeTask: "Q/A Report", time: "3hr", status: "Offline" },
];

export default function TeamTable() {
  return (
    <div className="bg-gradient-to-br from-[#454c5b] to-[#0b1a3a] p-5 rounded-xl border border-white/30 shadow-md text-white">
      <h3 className="mb-4 font-semibold text-gray ">
        Team Performance Overview (Top 5)
      </h3>
      <div className="overflow-x-auto rounded-xl border border-white/30 shadow-md">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-[#0d1b2a] text-left">
              <th className="py-3 px-4 font-medium">Name</th>
              <th className="py-3 px-4 font-medium">Role</th>
              <th className="py-3 px-4 font-medium">Active Task</th>
              <th className="py-3 px-4 font-medium">Time Today</th>
              <th className="py-3 px-4 font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {teamData.map((member, i) => (
              <tr
                key={i}
                className="border-b border-gray/50 last:border-none hover:bg-[#24324a] transition"
              >
                <td className="py-3 px-4">{member.name}</td>
                <td className="py-3 px-4">{member.role}</td>
                <td className="py-3 px-4">{member.activeTask}</td>
                <td className="py-3 px-4">{member.time}</td>
                <td
                  className={`py-3 px-4 font-medium ${
                    member.status === "Online"
                      ? "text-green"
                      : "text-orange"
                  }`}
                >
                  {member.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
