// // components/dashboard/Sidebar.tsx
// "use client";
// import Link from "next/link";
// import Image from "next/image";
// import { NAV_LINKS } from "./constants";

// import type { StaticImageData } from "next/image";

// interface SidebarProps {
//   open: boolean;
//   onClose: () => void;
//   logoSrc: string | StaticImageData;
// }

// export default function Sidebar({ open, onClose, logoSrc }: SidebarProps) {
//   return (
//     <aside
//       className={[
//         "fixed z-50 lg:z-0 lg:static",
//         "h-[80vh] lg:h-[85vh]",
//         "w-72 shrink-0",
//         "bg-[#0f1b2f] border border-white/10 rounded-2xl",
//         "p-4 lg:mr-6 mt-6",
//         "transition-transform duration-300",
//         open ? "translate-x-0" : "-translate-x-full lg:translate-x-0",
//       ].join(" ")}
//     >
//       <div className="flex items-center justify-between mb-4">
//         <div className="flex items-center gap-2">
//           <Image
//             src={logoSrc}
//             alt="Company Logo"
//             width={32}
//             height={32}
//             className="object-contain"
//             priority
//           />
//           <span className="font-semibold">Bits Core</span>
//         </div>
//         <button
//           onClick={onClose}
//           className="lg:hidden rounded-lg p-2 hover:bg-white/10"
//           aria-label="Close menu"
//         >
//           <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
//             <path d="M6 6l12 12M18 6l-12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
//           </svg>
//         </button>
//       </div>

//       <nav className="mt-2 space-y-1">
//         {NAV_LINKS.map((item) => (
//           <Link
//             key={item.href}
//             href={item.href}
//             className="flex items-center gap-3 rounded-xl px-3 py-2 text-sm hover:bg-white/10"
//           >
//             <span className="h-2 w-2 rounded-full bg-white/40" />
//             <span>{item.label}</span>
//           </Link>
//         ))}
//       </nav>
//     </aside>
//   );
// }




"use client";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "./constants";

interface SidebarProps {
  open: boolean;
  onClose: () => void;
  logoSrc: string | StaticImageData;
}



export default function Sidebar({ open, onClose, logoSrc }: SidebarProps) {
  const pathname = usePathname();

  return (
    <aside
      className={[
        "fixed z-50 lg:z-0 lg:static -ml-3",
        "h-[100vh] lg:h-[100vh]",
        " md:w-72 w-84 shrink-0",
        "bg-[#0f1b2f] lg:border lg:border-white/30  lg:rounded-r-xs lg:rounded-l-xl",
        "p-4 lg:mr-0 mt-0 lg:mt-6 ",
        "transition-transform duration-300",
        open ? "translate-x-0" : "-translate-x-full lg:translate-x-0",
      ].join(" ")}
    >
      {/* Logo & Close */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Image
            src={logoSrc}
            alt="Company Logo"
            width={32}
            height={32}
            className="object-contain"
            priority
          />
          <span className="font-semibold text-white">Bits Core</span>
        </div>
        <button
          onClick={onClose}
          className="lg:hidden rounded-lg p-2 hover:bg-white/10"
          aria-label="Close menu"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            className="text-white"
          >
            <path
              d="M6 6l12 12M18 6l-12 12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

     
      {/* Navigation */}
<nav className="space-y-1">
  {NAV_LINKS.map((item) => {
    const isActive = pathname === item.href;
    const Icon = item.icon;

    return (
      <Link
        key={item.href}
        href={item.href}
        onClick={onClose} // 🔥 Close sidebar on link click
        className={[
          "flex items-center gap-3 rounded-xl px-3 py-2 text-sm transition-colors",
          "text-gray hover:bg-white/10",
          isActive ? "bg-white/10 text-white" : "",
        ].join(" ")}
      >
        {/* Mobile: show icons, Desktop: hide icons */}
        <Icon className="h-5 w-5 lg:hidden" />
        <span>{item.label}</span>
      </Link>
    );
  })}
</nav>

    </aside>
  );
}


