export default function StatusBadge({ status }: { status: string }) {
  const color =
    status === "Active"
      ? "text-green"
      : status === "Pending"
      ? "text-yellow"
      : "text-orange";

  return <span className={`${color} font-medium`}>{status}</span>;
}
