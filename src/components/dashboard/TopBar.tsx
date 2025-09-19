// "use client";

// import UserDropdown from "./UserDropdown";

// interface TopBarProps {
//   heading: string;
//   onOpenMenu: () => void;
// }

// export default function TopBar({ heading, onOpenMenu }: TopBarProps) {
//   return (
//     <>
//       {/* Mobile top bar */}
//       <div className="lg:hidden sticky top-0 z-40 border-b border-white/10 bg-[#0c1424]/80 backdrop-blur">
//         <div className="flex items-center gap-3 px-4 h-14">
//           <button
//             onClick={onOpenMenu}
//             aria-label="Open menu"
//             className="inline-flex items-center justify-center rounded-lg p-2 hover:bg-white/10"
//           >
//             <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
//               <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
//             </svg>
//           </button>
//           <span className="font-semibold tracking-wide">Bits Core</span>
//         </div>
//       </div>

//       {/* Sticky header inside main column */}
//       <header className="sticky top-6 z-30 px-3 sm:px-4 lg:px-6 pb-3 bg-gradient-to-b from-[#0c1424] to-transparent max-w-6xl w-full rounded-xl">
//         <div className="flex items-center gap-4 md:gap-6 md:flex-nowrap flex-wrap">
//           {/* Heading: grows, can wrap or truncate */}
//           <h1 className="hidden md:block text-xl font-semibold tracking-wide flex-1 min-w-0 line-clamp-2">
//             {heading}
//           </h1>

//           {/* Search: shrinks with a max width; full width on wrap */}
//           <div className="w-full md:w-auto md:flex-1 max-w-md md:max-w-lg">
//             <div className="relative">
//               <input
//                 type="text"
//                 placeholder="Search"
//                 className="w-full rounded-2xl bg-white/10 border border-white/15 px-4 h-10 pl-11 placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/30"
//               />
//               <span className="absolute left-3 top-1/2 -translate-y-1/2">
//                 <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
//                   <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
//                   <path d="M20 20l-3.5-3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
//                 </svg>
//               </span>
//             </div>
//           </div>

//           {/* User profile dropdown */}
//           <UserDropdown username="Raheel" role="Super Admin" />
//         </div>
//       </header>
//     </>
//   );
// }

"use client";
import UserDropdown from "./UserDropdown";


interface TopBarProps {
  heading: string;
  onOpenMenu: () => void;
}

export default function TopBar({ heading, onOpenMenu }: TopBarProps) {
  

  return (
    <>
      {/* Mobile Top Bar */}
      <div className="lg:hidden top-0 z-40 bg-[#101B31] backdrop-blur px-4 py-3 flex items-center justify-between border border-white/30 w-screen -ml-8 -mt-2 " >
        {/* Hamburger Menu */}
        <button
          onClick={onOpenMenu}
          aria-label="Open menu"
          className="p-2 rounded-md hover:bg-white/10"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
            <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>

        
        <UserDropdown username="Raheel" role="Super Admin" />
        
      </div>
      

      {/* Desktop Top Bar */}
      <header className="hidden lg:block top-6 z-30 px-3 sm:px-4 lg:px-6 pb-3 bg-gradient-to-b bg-[#101B31] to-transparent max-w-7xl w-full mx-auto  rounded-tr-xl border border-white/20 h-20">
        <div className="flex items-center gap-6">
          <h1 className="text-xl font-semibold tracking-wide flex-1 mt-4">{heading}</h1>
          <div className="relative w-full md:w-auto max-w-md mt-4">
            <input
              type="text"
              placeholder="Search"
              className="w-full rounded-full bg-[#1b2333] text-white border border-white/10 px-4 h-11 pl-11 placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/20"
            />
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-white/70 ">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
                <path d="M20 20l-3.5-3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </span>
          </div>
          
       
        {/* User profile dropdown */}
          <UserDropdown username="Raheel" role="Super Admin" />
        </div>
      </header>
    </>
  );
}