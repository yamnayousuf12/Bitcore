// export default function AdjustButton({ onClick }: { onClick: () => void }) {
//   return (
//     <button
//       onClick={onClick} // This triggers the modal visibility toggle
//       className="bg-gray-700 hover:bg-gray-600 text-sm px-3 py-1 rounded"
//     >
//       Adjust
//     </button>
//   );
// }



interface AdjustButtonProps {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function AdjustButton({ onClick }: AdjustButtonProps) {
  return (
    <button
      onClick={onClick}
      className="px-3 py-1 rounded-md bg-gray/30 hover:bg-gray/40"
    >
      Adjust
    </button>
  );
}
