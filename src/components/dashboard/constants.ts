// components/dashboard/constants.ts
import {
  Home,
  Users,
  Clock,
  FileText,
  MessageCircleMore,
  CalendarCheck2,
} from "lucide-react";
export const TITLE_MAP: Record<string, string> = {
  "/dashboard": "Dashboard" ,
  "/dashboard/usermanagement": "User Management",
  "/dashboard/tasks": "Task Management",
  "/dashboard/time": "Time Tracker",
  "/dashboard/attendance": 
  "Attendance & Leave",
  "/dashboard/hr": "Company HR Policy",
  "/dashboard/chat": "Admin Chat Portal",
  "/dashboard/reports": "Reports",
  "/dashboard/settings": "Settings",
};

export const NAV_LINKS = [
  { label: "Dashboard", href: "/dashboard" , icon: Home },
  { label: "User Management", href: "/dashboard/usermanagement", icon: Users  },
  { label: "Task Management", href: "/dashboard/tasks", icon: CalendarCheck2 },
  { label: "Time Tracker", href: "/dashboard/timetracker", icon: Clock },
  { label: "HR Policies", href: "/dashboard/hr",icon: FileText },
  { label: "Chat", href: "/dashboard/chat", icon: MessageCircleMore },

  
];

// Supports Tailwind class gradients AND custom CSS gradients
export const CARD_GRADIENTS: Record<
  string,
  { type: "class"; value: string } | { type: "style"; value: string }
> = {
  default: { type: "class", value: "from-white/5 to-white/[0.03]" },
  "/dashboard": { type: "class", value: "from-indigo-500/10 to-indigo-500/0" },
  "/users": { type: "class", value: "from-emerald-500/10 to-emerald-500/0" },
  "/dashboard/usermanagement": {
    type: "style",
    value:
      " ",
  },
  // "/dashboard/tasks": {
  //   type: "style",
  //   value:
  //     "linear-gradient(180deg, rgba(246, 242, 242, 0.15) 0%, rgba(142, 165, 216, 0.15) 100%)",
  // },
  "/time": { type: "class", value: "from-sky-500/10 to-sky-500/0" },
  "/attendance": { type: "class", value: "from-fuchsia-500/10 to-fuchsia-500/0" },
  "/policies": { type: "class", value: "from-teal-500/10 to-teal-500/0" },
  "/chat": { type: "class", value: "from-cyan-500/10 to-cyan-500/0" },
  "/reports": { type: "class", value: "from-rose-500/10 to-rose-500/0" },
  "/settings": { type: "class", value: "from-purple-500/10 to-purple-500/0" },
};

export function toTitle(pathname: string) {
  const seg = pathname.replace(/\/+$/, "").split("/").pop() || "";
  return seg
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (m) => m.toUpperCase());
}
