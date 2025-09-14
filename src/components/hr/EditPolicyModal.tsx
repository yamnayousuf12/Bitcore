// "use client";

// import { useEffect, useRef, useState } from "react";
// import { createPortal } from "react-dom";
// import { X } from "lucide-react";

// interface EditPolicyModalProps {
//   open: boolean;
//   title?: string;
//   initialContent: string;
//   lastUpdated?: string;
//   onClose: () => void;
//   onSave: (nextContent: string) => void;
// }

// export default function EditPolicyModal({
//   open,
//   initialContent,
//   lastUpdated,
//   onClose,
//   onSave,
// }: EditPolicyModalProps) {
//   const [mounted, setMounted] = useState(false);
//   const [content, setContent] = useState(initialContent);
//   const dialogRef = useRef<HTMLDivElement>(null);
//   const firstFocusable = useRef<HTMLButtonElement>(null);

//   useEffect(() => setMounted(true), []);
//   useEffect(() => {
//     if (open) setContent(initialContent);
//   }, [open, initialContent]);

//   // Close on ESC
//   useEffect(() => {
//     if (!open) return;
//     const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
//     window.addEventListener("keydown", onKey);
//     return () => window.removeEventListener("keydown", onKey);
//   }, [open, onClose]);

//   // Basic focus handling
//   useEffect(() => {
//     if (open) firstFocusable.current?.focus();
//   }, [open]);

//   if (!mounted || !open) return null;

//   return createPortal(
//     <div
//       aria-modal="true"
//       role="dialog"
//       aria-labelledby="edit-policy-title"
//       className="fixed inset-0 z-50 flex items-center justify-center"
//     >
//       {/* Backdrop */}
//       <div
//         className="absolute inset-0 bg-black/60"
//         onClick={onClose}
//         aria-hidden="true"
//       />

//       {/* Modal */}
//       <div
//         ref={dialogRef}
//         className="relative w-[90%] max-w-2xl rounded-2xl text-white"
//         style={{
//           background:
//             "linear-gradient(180deg, rgba(10, 20, 40, 0.95) 0%, rgba(12, 22, 44, 0.95) 100%)",
//         }}
//       >
//         {/* Outer dotted frame */}
//         <div className="absolute inset-0 rounded-2xl pointer-events-none">
//           <div className="absolute inset-3 rounded-2xl border-2 border-dotted border-white/25" />
//         </div>

//         <div className="relative p-6">
//           {/* Header */}
//           <div className="flex items-start justify-between mb-4">
//             <div>
//               <h3
//                 id="edit-policy-title"
//                 className="text-xl font-semibold text-Blue"
//               >
//                 Edit HR Policies
//               </h3>
//               <div className="mt-3 h-px w-full bg-white/10" />
//             </div>
//             <button
//               ref={firstFocusable}
//               onClick={onClose}
//               aria-label="Close"
//               className="p-2 rounded-lg hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/40"
//             >
//               <X className="w-5 h-5" />
//             </button>
//           </div>

//           {/* Editor mock (toolbar + textarea) */}
//           <div className="rounded-xl border border-white/30 bg-white/5">
//             {/* Toolbar */}
//             <div className="flex items-center gap-3 px-3 py-2 border-b border-white/20">
//               <span className="text-sm">B</span>
//               <span className="text-sm italic">I</span>
//               <span className="text-sm underline">U</span>
//               <span className="text-sm">S</span>
//               <span className="text-sm">{`</>`}</span>
//               <span className="text-sm">•</span>
//               <span className="text-sm">1.</span>
//               <span className="text-sm">🔗</span>
//               <span className="text-sm">🖼️</span>
//             </div>

//             {/* Content area */}
//             <textarea
//               value={content}
//               onChange={(e) => setContent(e.target.value)}
//               className="w-full min-h-[260px] resize-y bg-gray3 p-4 outline-none placeholder:text-gray"
//               placeholder="Write or paste your HR policy here…"
//             />
//           </div>

//           {/* Footer */}
//           <div className="mt-6 flex items-center justify-between">
//             <p className="text-sm text-gray">
//               Last Update: {lastUpdated ?? "—"}
//             </p>

//             <div className="flex items-center gap-3">
//               <button
//                 onClick={onClose}
//                 className="px-3 py-2 text-sm text-Blue hover:text-white focus:outline-none focus:ring-2 focus:ring-white/40 rounded-lg"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={() => onSave(content)}
//                 className="px-4 py-2 text-sm rounded-xl bg-white text-black hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-white/40"
//               >
//                 Save Changes
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>,
//     document.body
//   );
// }


"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

interface EditPolicyModalProps {
  open: boolean;
  title?: string;
  initialContent: string;
  lastUpdated?: string;
  onClose: () => void;
  onSave: (nextContent: string) => void;
}

export default function EditPolicyModal({
  open,
  initialContent,
  lastUpdated,
  onClose,
  onSave,
}: EditPolicyModalProps) {
  const [mounted, setMounted] = useState(false);
  const [content, setContent] = useState(initialContent);
  const dialogRef = useRef<HTMLDivElement>(null);
  const firstFocusable = useRef<HTMLButtonElement>(null);

  useEffect(() => setMounted(true), []);
  useEffect(() => {
    if (open) setContent(initialContent);
  }, [open, initialContent]);

  // Close on ESC
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  // Basic focus handling
  useEffect(() => {
    if (open) firstFocusable.current?.focus();
  }, [open]);

  if (!mounted || !open) return null;

  return createPortal(
    <div
      aria-modal="true"
      role="dialog"
      aria-labelledby="edit-policy-title"
      className="fixed inset-0 z-50 flex items-center justify-center"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal */}
      <div
        ref={dialogRef}
        className="relative w-full h-full sm:w-[90%] sm:h-auto max-w-2xl rounded-none sm:rounded-2xl text-white"
        style={{
          background:
            "linear-gradient(180deg, rgba(10, 20, 40, 0.95) 0%, rgba(12, 22, 44, 0.95) 100%)",
        }}
      >
        {/* Outer dotted frame (hidden on mobile for full-screen) */}
        <div className="hidden sm:block absolute inset-0 rounded-2xl pointer-events-none">
          <div className="absolute inset-3 rounded-2xl border-2 border-dotted border-white/25" />
        </div>

        <div className="relative p-4 sm:p-6 h-full flex flex-col">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3
                id="edit-policy-title"
                className="text-lg sm:text-xl font-semibold text-Blue"
              >
                Edit HR Policies
              </h3>
              <div className="mt-3 h-px w-full bg-white/10" />
            </div>
            <button
              ref={firstFocusable}
              onClick={onClose}
              aria-label="Close"
              className="p-2 rounded-lg hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/40"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Editor mock (toolbar + textarea) */}
          <div className="flex-1 rounded-xl border border-white/30 bg-white/5 overflow-hidden">
            {/* Toolbar */}
            <div className="flex items-center gap-2 sm:gap-3 px-2 sm:px-3 py-2 border-b border-white/20 text-xs sm:text-sm">
              <span>B</span>
              <span className="italic">I</span>
              <span className="underline">U</span>
              <span>S</span>
              <span>{`</>`}</span>
              <span>•</span>
              <span>1.</span>
              <span>🔗</span>
              <span>🖼️</span>
            </div>

            {/* Content area */}
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full h-[calc(100%-40px)] min-h-[200px] resize-none bg-gray3 p-3 sm:p-4 outline-none placeholder:text-gray text-sm sm:text-base"
              placeholder="Write or paste your HR policy here…"
            />
          </div>

          {/* Footer */}
          <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <p className="text-xs sm:text-sm text-gray">
              Last Update: {lastUpdated ?? "—"}
            </p>

            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
              <button
                onClick={onClose}
                className="px-3 py-2 text-sm text-Blue hover:text-white focus:outline-none focus:ring-2 focus:ring-white/40 rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={() => onSave(content)}
                className="px-4 py-2 text-sm rounded-xl bg-white text-black hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-white/40"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}

