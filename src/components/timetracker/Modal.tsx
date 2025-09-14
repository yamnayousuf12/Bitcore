import { X } from "lucide-react";

export default function Modal({ onClose }: { onClose: () => void }) {
  return (
<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-8">
  <div className="bg-[#0d1136] rounded-2xl w-full max-w-sm sm:max-w-md md:max-w-sm">
 <div
  className="relative p-6 rounded-lg w-96 max-w-full border-2 border-dotted border-white"
  style={{
    background:
      "linear-gradient(180deg, rgba(176, 162, 162, 0.51) 0%, rgba(10, 40, 105, 0.42) 100%)",
  }}
>

        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white hover:text-gray"
        >
          <X size={20} />
        </button>

        <h3 className="text-lg font-semibold text-white mb-4">
          Manual Time Adjustment
        </h3>
        <p className="text-sm text-gray mb-6">
          Select the time adjustment in hours and minutes.
        </p>

        <div className="flex items-center mb-4">
          <label className="text-sm text-white mr-2">Hours:</label>
         <input
          type="number"
         className="bg-gray3 p-2 text-white rounded-lg w-16
             appearance-auto
             [&::-webkit-inner-spin-button]:appearance-auto
             [&::-webkit-outer-spin-button]:appearance-auto
             [&::-webkit-inner-spin-button]:opacity-100
             [&::-webkit-outer-spin-button]:opacity-100"
          min="0"
          max="12"
          defaultValue="05"
        />
                 
          <label className="text-sm text-white ml-4 mr-2">Minutes:</label>
         <input
          type="number"
          className="bg-gray3 p-2 text-white rounded-lg w-16
                    appearance-auto
                    [&::-webkit-inner-spin-button]:appearance-auto
                    [&::-webkit-outer-spin-button]:appearance-auto
                    [&::-webkit-inner-spin-button]:opacity-100
                    [&::-webkit-outer-spin-button]:opacity-100"
          min="0"
          max="59"
          defaultValue="25"
        />

        </div>

        <button className="bg-white hover:bg-gray text-Blue px-4 py-2 rounded-lg">
          Adjust Time
        </button>
        <p className="mt-4 text-sm" style={{ color: "#0066FF" }}>
          Adjusted task1 by 5 hours and 25 minutes.
        </p>
      </div>
      </div>
    </div>
  );
}
