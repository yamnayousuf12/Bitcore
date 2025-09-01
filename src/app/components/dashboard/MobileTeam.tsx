"use client";
import React from "react";

const teamMembers = [
  {
    name: "Mahnoor",
    role: "HR",
    task: "Meeting Schedule",
    time: "4hr",
    status: "Online",
  },
  {
    name: "Raheel",
    role: "Manager",
    task: "Work Distribution",
    time: "8hr",
    status: "Online",
  },
  {
    name: "Ayesha",
    role: "Employee",
    task: "Meeting Schedule",
    time: "4hr",
    status: "Offline",
  },
  {
    name: "Safia Seher",
    role: "Employee",
    task: "Q/A Report",
    time: "3hr",
    status: "Offline",
  },
];

export default function TeamPerformance() {
  return (
    <div className="max-w-sm mx-auto bg-gradient-to-br from-[#454c5b] to-[#0b1a3a] p-4 rounded-2xl">
      <h2 className="text-sm text-gray font-semibold mb-4">
        Team Performance Overview
      </h2>
      <div className="space-y-4">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-darkBlue text-white rounded-xl p-4 shadow-md flex flex-col"
          >
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <span
                className={`text-sm font-semibold ${
                  member.status === "Online" ? "text-green" : "text-orange"
                }`}
              >
                {member.status}
              </span>
            </div>
            <p className="text-sm text-gray">Role: {member.role}</p>
            <p className="text-sm text-gray">
              Active Task: {member.task}
            </p>
            <p className="text-sm text-gray">Time Today: {member.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
