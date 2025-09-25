// import { Task } from "./task";

// export const mockTasks: Task[] = [
//   { id: "t1", title: "UI Dashboard Setup", description: "Design the initial dashboard…", role: "UI/UX Designer", datetime: "08/25 12:11 PM", status: "todo" },
//     { id: "t2", title: "UI Dashboard Setup", description: "Design the initial dashboard…", role: "UI/UX Designer", datetime: "08/25 12:11 PM", status: "todo" },
//     { id: "t3", title: "UI Dashboard Setup", description: "Design the initial dashboard…", role: "UI/UX Designer", datetime: "08/25 12:11 PM", status: "todo" },
  
//   { id: "t4", title: "Mobile App Testing", description: "Regression testing for mobile…", role: "QA Tester", datetime: "08/25 12:11 PM", status: "inprogress" },
//   { id: "t5", title: "Mobile App Testing", description: "Regression testing for mobile…", role: "QA Tester", datetime: "08/25 12:11 PM", status: "inprogress" },
  
//   { id: "t6", title: "Portfolio Website", description: "Finalize responsive nav…", role: "UI/UX Designer", datetime: "08/25 12:11 PM", status: "review" },
//     { id: "t7", title: "Portfolio Website", description: "Finalize responsive nav…", role: "UI/UX Designer", datetime: "08/25 12:11 PM", status: "review" },  
//     { id: "t8", title: "Portfolio Website", description: "Finalize responsive nav…", role: "UI/UX Designer", datetime: "08/25 12:11 PM", status: "review" }, 
//      { id: "t9", title: "Portfolio Website", description: "Finalize responsive nav…", role: "UI/UX Designer", datetime: "08/25 12:11 PM", status: "review" },

//   { id: "t10", title: "App Store Graphics", description: "Promotional banners…", role: "Graphic Designer", datetime: "08/25 12:11 PM", status: "done" },
//   { id: "t11", title: "App Store Graphics", description: "Promotional banners…", role: "Graphic Designer", datetime: "08/25 12:11 PM", status: "done" },
//   // add more…


// ];

import { Task } from "./task";

export const mockTasks: Task[] = [
  {
    id: "t1",
    title: "UI Dashboard Setup",
    description: "Design the initial dashboard layout for task management, focusing on clean navigation and accessibility.",
    role: "UI/UX Designer",
    datetime: "08/25 12:11 PM",
    status: "todo",
    priority: "High", // 👈 added
  },
  {
    id: "t2",
    title: "Bitsframe",
    description: "Implement secure login API integration and set up backend authentication routes using Node.js.",
    role: "Developer",
    datetime: "09/25 9:11 PM",
    status: "todo",
    priority: "Medium",
  },
  {
    id: "t3",
    title: "Bitsframe -Content",
    description: "Draft a blog article about the latest graphic design trends for 2025 with engaging visuals and SEO keywords.",
    role: "UI/UX Designer",
    datetime: "08/25 12:11 PM",
    status: "todo",
    priority: "Low",
  },

  {
    id: "t4",
    title: "App Testing",
    description: "Perform regression testing for the latest mobile build, documenting UI glitches and functional errors.",
    role: "QA Tester",
    datetime: "08/25 12:11 PM",
    status: "inprogress",
    priority: "Low",
  },
  {
    id: "t5",
    title: "Banner Revamp",
    description: "Create a modern hero banner and icon set following the updated brand guidelines.",
    role: " Graphic Designer",
    datetime: "09/25 09:11 PM",
    status: "inprogress",
    priority: "Medium",
  },

  {
    id: "t6",
    title: "Portfolio Website",
    description: "Finalize responsive navigation menu design and submit for approval.",
    role: "UI/UX Designer",
    datetime: "08/25 12:11 PM",
    status: "review",
    priority: "High",
  },
  {
    id: "t7",
    title: "Feature X Update",
    description: "Code optimization and bug fixes for the chat module before deployment.",
    role: "Developer",
    datetime: "08/25 12:11 PM",
    status: "review",
    priority: "Medium",
  },
  {
    id: "t8",
    title: "E-commerce Images",
    description: "Review product image edits for consistency, lighting, and branding alignment.",
    role:  "Graphic Designer",
    datetime: "08/25 12:11 PM",
    status: "review",
    priority: "High",
  },
  {
    id: "t9",
    title: "Blog Content Review",
    description: "Check drafted blog articles for grammar, tone, and keyword optimization before publishing.",
    role: "Content Writer",
    datetime: "08/25 12:11 PM",
    status: "review",
    priority: "Medium",
  },

  {
    id: "t10",
    title: "App Store Graphics",
    description: "Delivered promotional banners for iOS and Android store listings.",
    role: " Content Writer",
    datetime: "08/25 12:11 PM",
    status: "done",
    priority: "Low",
  },
  {
    id: "t11",
    title: "Knowledge Setup",
    description: "Uploaded and formatted how-to guides with visuals for new users.",
    role: " Content Writer",
    datetime: "08/25 12:11 PM",
    status: "done",
    priority: "High",
  },
];
