export type TaskStatus = "todo" | "inprogress" | "review" | "done";

// export interface Task {
//   id: string;
//   title: string;
//   description?: string;
//   role?: string;
//   datetime?: string; // "08/25 12:11 PM"
//   status: TaskStatus;
// }

export interface Task {
  id: string;
  title: string;
  description?: string;
  role?: string;
  datetime?: string;
  status: TaskStatus;
  priority?: "Low" | "Medium" | "High"; // ← add this line
}
