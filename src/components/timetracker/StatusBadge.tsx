export default function StatusBadge({ status }: { status: string }) {
  const color =
    status === "Active"
      ? "text-green-400"
      : status === "Pending"
      ? "text-yellow-400"
      : "text-orange-400";

  return <span className={`${color} font-medium`}>{status}</span>;
}
