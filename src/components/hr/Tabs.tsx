// "use client";
// import { useState } from "react";
// import { Edit3 } from "lucide-react";
// import EditPolicyModal from "./EditPolicyModal";

// const policyData = {
//   Overview: {
//     title: "HR Policy Overview",
//     content: (
//       <>
//         <p>
//           Welcome to the Company HR Policy Portal. This document serves as the
//           definitive source for all human resources policies and procedures.
//         </p>

//         <h3 className="mt-4 font-semibold">Policy Framework</h3>
//         <p>
//           These policies are designed to ensure fair treatment of all employees
//           while maintaining operational effectiveness. They are reviewed
//           annually and updated as needed.
//         </p>

//         <h3 className="mt-4 font-semibold">How to Use This Portal</h3>
//         <p>
//           Navigate between sections using the menu above. Each section contains
//           detailed policies and procedures.
//         </p>
//       </>
//     ),
//   },
//   "Leave Policy": {
//     title: "Leave Policy",
//     content: (
//       <>
//         <h3 className="font-semibold">Annual Leave</h3>
//         <p>
//           Full-time employees are entitled to 20 days of annual leave per
//           calendar year, pro-rated for part-time employees.
//         </p>

//         <h3 className="mt-4 font-semibold">Sick Leave</h3>
//         <p>
//           Employees are entitled to 10 days of paid sick leave per year. Medical
//           documentation is required for absences exceeding 3 consecutive days.
//         </p>

//         <h3 className="mt-4 font-semibold">Other Leave Types</h3>
//         <ul className="list-disc list-inside">
//           <li>Parental Leave: 12 weeks paid leave for primary caregivers</li>
//           <li>Bereavement Leave: 5 days for immediate family members</li>
//           <li>Jury Duty: Paid time off for court obligations</li>
//         </ul>
//       </>
//     ),
//   },
//   Expenses: {
//     title: "Expenses Policy",
//     content: (
//       <>
//         <h3 className="font-semibold">Reimbursement Guidelines</h3>
//         <p>
//           Employees may claim reimbursement for business-related expenses
//           incurred while performing their duties.
//         </p>

//         <h3 className="mt-4 font-semibold">Approved Expenses</h3>
//         <ul className="list-disc list-inside">
//           <li>Travel costs (economy class for flights &gt; 4 hours)</li>
//           <li>Hotel accommodation at mid-range establishments</li>
//           <li>Meals during business travel (receipts required)</li>
//           <li>Client entertainment (with prior approval)</li>
//         </ul>

//         <h3 className="mt-4 font-semibold">Submitting Claims</h3>
//         <p>
//           All expense claims must be submitted within 30 days of incurring the
//           expense through the company portal with scanned receipts.
//         </p>
//       </>
//     ),
//   },
//   "Code of conduct": {
//     title: "",
//     content: (
//       <>
//         <h3 className="font-semibold">Professional Behavior</h3>
//         <p>
//           All employees are expected to maintain professional conduct at all
//           times when representing the company.
//         </p>

//         <h3 className="mt-4 font-semibold">Anti-Harassment Policy</h3>
//         <p>
//           We maintain a zero-tolerance policy toward any form of harassment or
//           discrimination. This includes any actions, language, or behavior that
//           creates a hostile, unsafe, or unwelcoming environment for others. All
//           employees are expected to treat each other with dignity, fairness, and
//           respect at all times.
//         </p>

//         <h3 className="mt-4 font-semibold">Social Media Policy</h3>
//         <p>
//           Employees must refrain from making statements that could damage the
//           company’s reputation or disclose confidential information.
//         </p>
//       </>
//     ),
//   },
// } as const;

// type TabType = keyof typeof policyData;

// export default function HRPolicyTabs() {
//   const [activeTab, setActiveTab] = useState<TabType>("Overview");
//   const [openModal, setOpenModal] = useState(false);
//   const [content, setContent] = useState<string>("");
//   const tabs = Object.keys(policyData) as TabType[];

//   const handleSave = (newContent: string) => {
//     setContent(newContent);
//     setOpenModal(false); // Close modal after saving
//   };

//   return (
//     <div className="p-4 text-white">
//       {/* Tabs */}
//       <div
//         className="flex gap-4 mb-4 rounded-lg p-2"
//         style={{
//           background:
//             "linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%, rgba(19, 43, 96, 0.15) 100%)",
//         }}
//         role="tablist"
//         aria-label="HR policy sections"
//       >
//         {tabs.map((tab) => {
//           const selected = activeTab === tab;
//           return (
//             <button
//               key={tab}
//               role="tab"
//               aria-selected={selected}
//               aria-controls={`panel-${tab}`}
//               id={`tab-${tab}`}
//               onClick={() => setActiveTab(tab)}
//               className={`px-4 py-2 rounded-lg focus:outline-none focus:ring-0 ${
//                 selected ? "border-b-2 border-white font-semibold" : "text-gray"
//               }`}
//             >
//               {tab}
//             </button>
//           );
//         })}
//       </div>

//       {/* Content */}
//       <div
//         id={`panel-${activeTab}`}
//         role="tabpanel"
//         aria-labelledby={`tab-${activeTab}`}
//         className="bg-[#0c1424] p-6 rounded-lg relative border-2 border-dotted border-white"
//       >
//         <div className="flex justify-between items-center mb-4">
//           <h2 className="text-lg font-bold text-Blue">{policyData[activeTab].title}</h2>
//           <Edit3
//             className="w-5 h-5 cursor-pointer"
//             aria-label="Edit section"
//             onClick={() => setOpenModal(true)} // Open the modal
//           />
//         </div>
//         <div className="space-y-3">{content}</div>
//         <p className="text-xs text-gray mt-4 text-right">Last updated: June 15, 2025</p>
//       </div>

//       {/* Edit Modal */}
//       <EditPolicyModal
//         open={openModal}
//         title={policyData[activeTab].title}
//         initialContent={content}
//         lastUpdated="June 15, 2025"
//         onClose={() => setOpenModal(false)}
//         onSave={handleSave}
//       />
//     </div>
//   );
// }


"use client";
import { useState } from "react";
import { Edit3 } from "lucide-react";
import EditPolicyModal from "./EditPolicyModal";

const policyData = {
  Overview: {
    title: "HR Policy Overview",
    content: (
      <>
        <p>
          Welcome to the Company HR Policy Portal. This document serves as the
          definitive source for all human resources policies and procedures.
        </p>
        <h3 className="mt-4 font-semibold">Policy Framework</h3>
        <p>
          These policies are designed to ensure fair treatment of all employees
          while maintaining operational effectiveness. They are reviewed
          annually and updated as needed.
        </p>
        <h3 className="mt-4 font-semibold">How to Use This Portal</h3>
        <p>
          Navigate between sections using the menu above. Each section contains
          detailed policies and procedures.
        </p>
      </>
    ),
  },
  "Leave Policy": {
    title: "Leave Policy",
    content: (
      <>
        <h3 className="font-semibold">Annual Leave</h3>
        <p>
          Full-time employees are entitled to 20 days of annual leave per
          calendar year, pro-rated for part-time employees.
        </p>
        <h3 className="mt-4 font-semibold">Sick Leave</h3>
        <p>
          Employees are entitled to 10 days of paid sick leave per year. Medical
          documentation is required for absences exceeding 3 consecutive days.
        </p>
        <h3 className="mt-4 font-semibold">Other Leave Types</h3>
        <ul className="list-disc list-inside">
          <li>Parental Leave: 12 weeks paid leave for primary caregivers</li>
          <li>Bereavement Leave: 5 days for immediate family members</li>
          <li>Jury Duty: Paid time off for court obligations</li>
        </ul>
      </>
    ),
  },
  Expenses: {
    title: "Expenses Policy",
    content: (
      <>
        <h3 className="font-semibold">Reimbursement Guidelines</h3>
        <p>
          Employees may claim reimbursement for business-related expenses
          incurred while performing their duties.
        </p>
        <h3 className="mt-4 font-semibold">Approved Expenses</h3>
        <ul className="list-disc list-inside">
          <li>Travel costs (economy class for flights &gt; 4 hours)</li>
          <li>Hotel accommodation at mid-range establishments</li>
          <li>Meals during business travel (receipts required)</li>
          <li>Client entertainment (with prior approval)</li>
        </ul>
        <h3 className="mt-4 font-semibold">Submitting Claims</h3>
        <p>
          All expense claims must be submitted within 30 days of incurring the
          expense through the company portal with scanned receipts.
        </p>
      </>
    ),
  },
  "Code of conduct": {
    title: "Code of Conduct",
    content: (
      <>
        <h3 className="font-semibold">Professional Behavior</h3>
        <p>
          All employees are expected to maintain professional conduct at all
          times when representing the company.
        </p>
        <h3 className="mt-4 font-semibold">Anti-Harassment Policy</h3>
        <p>
          We maintain a zero-tolerance policy toward any form of harassment or
          discrimination. This includes any actions, language, or behavior that
          creates a hostile, unsafe, or unwelcoming environment for others.
        </p>
        <h3 className="mt-4 font-semibold">Social Media Policy</h3>
        <p>
          Employees must refrain from making statements that could damage the
          company’s reputation or disclose confidential information.
        </p>
      </>
    ),
  },
} as const;

type TabType = keyof typeof policyData;

export default function HRPolicyTabs() {
  const [activeTab, setActiveTab] = useState<TabType>("Overview");
  const [openModal, setOpenModal] = useState(false);

  // Store ReactNode instead of string
  const [content, setContent] = useState<React.ReactNode>(
    policyData["Overview"].content
  );

  const tabs = Object.keys(policyData) as TabType[];

  const handleSave = (newContent: string) => {
    // for now, just replace with text
    setContent(<p>{newContent}</p>);
    setOpenModal(false);
  };

  return (
    // <div className="p-4 text-white">
    //   {/* Tabs */}
    //   <div
    //     className="flex gap-4 mb-4 rounded-lg p-2"
    //     style={{
    //       background:
    //         "linear-gradient(180deg, rgba(255,255,255,0.15) 0%, rgba(19,43,96,0.15) 100%)",
    //     }}
    //     role="tablist"
    //   >
    //     {tabs.map((tab) => {
    //       const selected = activeTab === tab;
    //       return (
    //         <button
    //           key={tab}
    //           role="tab"
    //           aria-selected={selected}
    //           onClick={() => {
    //             setActiveTab(tab);
    //             setContent(policyData[tab].content);
    //           }}
    //           className={`px-4 py-2 rounded-lg ${
    //             selected ? "border-b-2 border-white font-semibold" : "text-gray"
    //           }`}
    //         >
    //           {tab}
    //         </button>
    //       );
    //     })}
    //   </div>

    <div className="p-4 text-white">
  {/* Tabs */}
  <div
    className="flex gap-4 mb-4 rounded-lg p-2 overflow-x-auto scrollbar-hide"
    style={{
      background:
        "linear-gradient(180deg, rgba(255,255,255,0.15) 0%, rgba(19,43,96,0.15) 100%)",
    }}
    role="tablist"
  >
    {tabs.map((tab) => {
      const selected = activeTab === tab;
      return (
        <button
          key={tab}
          role="tab"
          aria-selected={selected}
          onClick={() => {
            setActiveTab(tab);
            setContent(policyData[tab].content);
          }}
          className={`flex-shrink-0 px-4 py-2 rounded-lg whitespace-nowrap ${
            selected ? "border-b-2 border-white font-semibold" : "text-gray"
          }`}
        >
          {tab}
        </button>
      );
    })}
  </div>



      {/* Content */}
      <div className="bg-[#0c1424] p-6 rounded-lg relative border-2 border-dotted border-white">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold text-Blue">
            {policyData[activeTab].title}
          </h2>
          <Edit3
            className="w-5 h-5 cursor-pointer"
            onClick={() => setOpenModal(true)}
          />
        </div>
        <div className="space-y-3">{content}</div>
        <p className="text-xs text-gray mt-4 text-right">
          Last updated: June 15, 2025
        </p>
      </div>

      {/* Edit Modal */}
      <EditPolicyModal
        open={openModal}
        title={policyData[activeTab].title}
        initialContent=""
        lastUpdated="June 15, 2025"
        onClose={() => setOpenModal(false)}
        onSave={handleSave}
      />
    </div>
  );
}
