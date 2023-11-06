import React from "react";

interface ProgressBarProps {
  title: string;
  amount: number;
}

export default function ProgressBar({ title, amount }: ProgressBarProps) {
  return (
    <div className="mb-2">
      <div className="flex justify-between mb-1 p-2">
        <span className="text-base font-medium text-white">{title}</span>
        <span className="text-sm font-medium text-white">{amount}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div
          className="bg-[#2563EBBF] h-2.5 rounded-full"
          style={{
            width: `${amount}%`,
          }}
        ></div>
      </div>
    </div>
  );
}
