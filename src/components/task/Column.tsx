import { ReactNode } from "react";

export default function Column({
  title,
  count,
  accent,
  children,
}: {
  title: string;
  count: number;
  accent: string; // e.g., "text-yellow-400", "text-purple-400"
  children: ReactNode;
}) {
  return (
    <section className=" p-3 sm:p-4 z">
      <header className="mb-3 sm:mb-4 flex items-baseline gap-2 ">
        <h3 className={`text-lg sm:text-xl font-medium ${accent}`}>{title}</h3>
        <span className="text-white text-sm">({count.toString().padStart(2, "0")})</span>
      </header>
      <div className="grid gap-3 sm:gap-4">{children}</div>
    </section>
  );
}
