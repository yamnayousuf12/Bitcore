// import { useMemo, useState } from "react";
// import StatusBadge from "./StatusBadge";
// import AdjustButton from "./AdjustButton";
// import Modal from "./Modal";

// interface Task {
//   employee: string;
//   task: string;
//   project: string;
//   date: string;
//   duration: string;
//   status: string;
// }

// export default function TaskTable({ tasks }: { tasks: Task[] }) {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const toggleModal = () => setIsModalOpen((v) => !v);

//   // selection
//   const [selected, setSelected] = useState<Set<number>>(new Set());
//   const toggleRow = (absIndex: number) =>
//     setSelected((prev) => {
//       const next = new Set(prev);
//       next.has(absIndex) ? next.delete(absIndex) : next.add(absIndex);
//       return next;
//     });

//   // pagination
//   const pageSize = 5;
//   const [page, setPage] = useState(0);
//   const pageCount = Math.max(1, Math.ceil(tasks.length / pageSize));
//   const canPrev = page > 0;
//   const canNext = page < pageCount - 1;

//   const paged = useMemo(() => {
//     const start = page * pageSize;
//     return tasks.slice(start, start + pageSize);
//   }, [tasks, page]);

//   const startIndex = page * pageSize;

//   return (
//     <div className="bg-[#0f172a] rounded-lg overflow-x-auto">
//       {isModalOpen && <Modal onClose={toggleModal} />}

//       <table className="w-full text-left">
//         <thead className="bg-gray-800 text-gray-300 text-sm">
//           <tr>
//             <th className="px-4 py-2">Employee</th>
//             <th className="px-4 py-2">Task</th>
//             <th className="px-4 py-2">Project</th>
//             <th className="px-4 py-2">Date</th>
//             <th className="px-4 py-2">Duration</th>
//             <th className="px-4 py-2">Status</th>
//             <th className="px-4 py-2">Actions</th>
//           </tr>
//         </thead>

//         <tbody>
//           {tasks.length === 0 ? (
//             <tr>
//               <td colSpan={7} className="text-center py-4">
//                 No tasks available.
//               </td>
//             </tr>
//           ) : (
//             paged.map((t, idx) => {
//               const absIndex = startIndex + idx;
//               const isSelected = selected.has(absIndex);
//               return (
//                 <tr
//                   key={absIndex}
//                   className={`border-t border-gray-700 text-sm cursor-pointer select-none ${
//                     isSelected ? "bg-white/5" : "hover:bg-white/2.5"
//                   }`}
//                   onClick={() => toggleRow(absIndex)}
//                 >
//                   <td className="px-4 py-2">{t.employee}</td>
//                   <td className="px-4 py-2">{t.task}</td>
//                   <td className="px-4 py-2">{t.project}</td>
//                   <td className="px-4 py-2">{t.date}</td>
//                   <td className="px-4 py-2">{t.duration}</td>
//                   <td className="px-4 py-2">
//                     <StatusBadge status={t.status} />
//                   </td>
//                   <td className="px-4 py-2" onClick={(e) => e.stopPropagation()}>
//                     <AdjustButton onClick={toggleModal} />
//                   </td>
//                 </tr>
//               );
//             })
//           )}
//         </tbody>
//       </table>

//       {/* footer */}
//       <div className="flex items-center justify-between px-4 py-3 text-xs sm:text-sm border-t border-gray-800">
//         <span className="text-gray-400">
//           {selected.size} of {tasks.length} row(s) selected.
//         </span>

//         <div className="flex items-center gap-2">
//           <button
//             onClick={() => setPage((p) => Math.max(0, p - 1))}
//             disabled={!canPrev}
//             className={`px-3 py-1 rounded-md border text-gray-200 ${
//               canPrev
//                 ? "border-white/20 hover:bg-white/10"
//                 : "border-white/10 opacity-50 cursor-not-allowed"
//             }`}
//           >
//             Previous
//           </button>
//           <button
//             onClick={() => setPage((p) => Math.min(pageCount - 1, p + 1))}
//             disabled={!canNext}
//             className={`px-3 py-1 rounded-md border text-gray-200 ${
//               canNext
//                 ? "border-white/20 hover:bg-white/10"
//                 : "border-white/10 opacity-50 cursor-not-allowed"
//             }`}
//           >
//             Next
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }



import { useMemo, useState } from "react";
import StatusBadge from "./StatusBadge";
import AdjustButton from "./AdjustButton";
import Modal from "./Modal";

interface Task {
  employee: string;
  task: string;
  project: string;
  date: string;
  duration: string;
  status: string;
}

export default function TaskTable({ tasks }: { tasks: Task[] }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen((v) => !v);

  // selection
  const [selected, setSelected] = useState<Set<number>>(new Set());
  const toggleRow = (absIndex: number) =>
    setSelected((prev) => {
      const next = new Set(prev);
      next.has(absIndex) ? next.delete(absIndex) : next.add(absIndex);
      return next;
    });

  // pagination
  const pageSize = 5;
  const [page, setPage] = useState(0);
  const pageCount = Math.max(1, Math.ceil(tasks.length / pageSize));
  const canPrev = page > 0;
  const canNext = page < pageCount - 1;

  const paged = useMemo(() => {
    const start = page * pageSize;
    return tasks.slice(start, start + pageSize);
  }, [tasks, page]);

  const startIndex = page * pageSize;

  return (
    <div className=" p-4 mt-7">
      {isModalOpen && <Modal onClose={toggleModal} />}

      {/* ===== Mobile Cards ===== */}
      <div className="space-y-4 block lg:hidden">
        {tasks.length === 0 ? (
          <div className="text-center text-gray py-6 ">
            No tasks available.
          </div>
        ) : (
          paged.map((t, idx) => {
            const absIndex = startIndex + idx;
            const isSelected = selected.has(absIndex);

            return (
              <div
                key={absIndex}
                className={`w-80 items-center justify-center rounded-xl border border-white/30 p-4 cursor-pointer select-none transition ${
                  isSelected ? "bg-white/5" : "hover:bg-white/2.5"
                }`}
                onClick={() => toggleRow(absIndex)}
              >
                <div className="flex items-start justify-between">
                  <h3 className="text-white font-medium">{t.employee}</h3>
                  <span className="text-Blue text-sm">{t.date}</span>
                </div>

                <div className="mt-1 text-gray text-sm space-y-1">
                  <p>
                    <span className="font-medium">Task:</span> {t.task}
                  </p>
                  <p>
                    <span className="font-medium">Project:</span> {t.project}
                  </p>
                  <p>
                    <span className="font-medium">Duration:</span> {t.duration}
                  </p>
                </div>

                <div className="mt-3 flex items-center justify-between">
                  <AdjustButton
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleModal();
                    }}
                  />
                  <StatusBadge status={t.status} />
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* ===== Desktop Table ===== */}
      <div className="md:border md:border-Blue/45 md:rounded-md">
      <div className="hidden lg:block overflow-x-auto ">
        <table className="w-full text-left ">
          <thead className="bg-gray3 text-Blue text-sm">
            <tr>
              <th className="px-4 py-2">Employee</th>
              <th className="px-4 py-2">Task</th>
              <th className="px-4 py-2">Project</th>
              <th className="px-4 py-2">Date</th>
              <th className="px-4 py-2">Duration</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>

          <tbody>
            {tasks.length === 0 ? (
              <tr>
                <td colSpan={7} className="text-center py-4">
                  No tasks available.
                </td>
              </tr>
            ) : (
              paged.map((t, idx) => {
                const absIndex = startIndex + idx;
                const isSelected = selected.has(absIndex);
                return (
                  <tr
                    key={absIndex}
                    className={`border-t border-Blue/45 text-sm cursor-pointer select-none ${
                      isSelected ? "bg-white/5" : "hover:bg-white/2.5"
                    }`}
                    onClick={() => toggleRow(absIndex)}
                  >
                    <td className="px-4 py-2">{t.employee}</td>
                    <td className="px-4 py-2">{t.task}</td>
                    <td className="px-4 py-2">{t.project}</td>
                    <td className="px-4 py-2">{t.date}</td>
                    <td className="px-4 py-2">{t.duration}</td>
                    <td className="px-4 py-2">
                      <StatusBadge status={t.status} />
                    </td>
                    <td
                      className="px-4 py-2"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <AdjustButton onClick={toggleModal} />
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>



{/* ===== Footer (shared) ===== */}
  <div className="flex items-center justify-between px-2 py-2 text-xs sm:text-sm border-t border-Blue/45 mt-4">
    <span className="text-gray">
      {selected.size} of {tasks.length} selected.
    </span>
    <div className="flex items-center gap-2">
      <button
        onClick={() => setPage((p) => Math.max(0, p - 1))}
        disabled={!canPrev}
        className={`px-3 py-1 rounded-md border text-gray ${
          canPrev
            ? "border-white/20 hover:bg-white/10"
            : "border-white/10 opacity-50 cursor-not-allowed"
        }`}
      >
        Previous
      </button>
      <button
        onClick={() => setPage((p) => Math.min(pageCount - 1, p + 1))}
        disabled={!canNext}
        className={`px-3 py-1 rounded-md border text-gray ${
          canNext
            ? "border-white/20 hover:bg-white/10"
            : "border-white/10 opacity-50 cursor-not-allowed"
        }`}
      >
        Next
      </button>
    </div>
  </div>
</div>
     
    </div>
  );
}
