import { FiUsers, FiClock, FiList } from "react-icons/fi";
import type { IconType } from "react-icons";

export interface StatItem {
  title: string;
  value: number | string;
  icon: IconType;
}

export const stats: StatItem[] = [
  { title: "Team Members", value: 25, icon: FiUsers },
  { title: "Avg. Daily Hours", value: 6.8, icon: FiClock },
  { title: "Active Tasks", value: 12, icon: FiList },
];

export interface Task {
  employee: string;
  task: string;
  project: string;
  date: string;
  duration: string;
  status: "Active" | "Pending" | "Pause";
}

export const tasks: Task[] = [
  { employee: "Ayesha", task: "Web & App", project: "Bitcore", date: "10/08/2025", duration: "6h 30m", status: "Active" },
  { employee: "Aleeza", task: "API Integration", project: "Pill Koala", date: "02/06/2025", duration: "4h 50m", status: "Pending" },
  { employee: "Mahveen", task: "UI Implementation", project: "Mcm", date: "04/05/2025", duration: "3h 30m", status: "Pause" },
  { employee: "Haya", task: "Banner Design", project: "Bitsframe", date: "01/08/2025", duration: "2h 30m", status: "Active" },
  { employee: "Ramsha", task: "Mobile App", project: "Telemedicine", date: "02/02/2025", duration: "1h 30m", status: "Pause" },
];

export const weeklyData = [
  { day: "Mon", value: 75 },
  { day: "Tue", value: 55 },
  { day: "Wed", value: 75 },
  { day: "Thu", value: 80 },
  { day: "Fri", value: 95 },
  { day: "Sat", value: 65 },
];