// components/MobileStats.tsx
import { Users, Clock, CheckCircle, Timer } from "lucide-react";

const stats = [
  { label: "Total User", value: "25", icon: <Users className="w-6 h-6" /> },
  { label: "Pending Tasks", value: "08", icon: <Clock className="w-6 h-6" /> },
  { label: "Complete Tasks", value: "05", icon: <CheckCircle className="w-6 h-6" /> },
  { label: "Avg. Hours/Day", value: "7.5", icon: <Timer className="w-6 h-6" /> },
];

export default function MobileStats() {
  return (
    <div className="grid grid-cols-2 gap-4">
      {stats.map((s, i) => (
        <div
          key={i}
          className="bg-[#1b294b] rounded-xl p-4 flex flex-col items-center justify-center text-center shadow-md"
        >
          <div className="text-Blue mb-2">{s.icon}</div>
          <p className="text-lg font-bold">{s.value}</p>
          <p className="text-xs text-gray">{s.label}</p>
        </div>
      ))}
    </div>
  );
}
