"use client";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

type WeeklyData = { day: string; value: number };

export default function WeeklySummary({
  data,
  domain = [0, 100], // keep 0 baseline (use [0, 'dataMax + 10'] for auto-scale)
}: {
  data: WeeklyData[];
  domain?: [number, number] | [number, "dataMax" | `${number}`] | [number, string];
}) {
  return (
    <div className="bg-[#0f172a] rounded-xl p-4 md:p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-base md:text-lg font-semibold">Weekly Summary</h3>
        <select className="bg-[#0b1222] border border-white/10 rounded-md px-3 py-1.5 text-sm outline-none">
          <option>Week</option>
          <option>Month</option>
          <option>Quarter</option>
        </select>
      </div>

      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 8, right: 8, left: 8, bottom: 8 }}>
            <defs>
              <linearGradient id="barBlue" x1="0" y1="1" x2="0" y2="0">
                <stop offset="0%" stopColor="#2563eb" />
                <stop offset="100%" stopColor="#60a5fa" />
              </linearGradient>
            </defs>

            <CartesianGrid stroke="rgba(255,255,255,0.08)" vertical={false} />
            <YAxis
              domain={domain}
              tickFormatter={(v) => `${v}%`}
              tick={{ fill: "rgba(255,255,255,0.75)", fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />
            <XAxis
              dataKey="day"
              tickFormatter={(v) => String(v).toUpperCase()}
              tick={{ fill: "rgba(96,165,250,0.9)", fontSize: 12 }}
              axisLine={false}
              tickLine={false}
              interval={0}
            />
            <Tooltip
              cursor={{ fill: "rgba(255,255,255,0.04)" }}
              contentStyle={{
                background: "rgba(10,16,30,0.9)",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: 8,
              }}
              formatter={(val) => [`${val}%`, "Hours"]}
              labelFormatter={(label) => String(label).toUpperCase()}
            />
            <Bar
              dataKey="value"
              fill="url(#barBlue)"
              radius={[10, 10, 0, 0]}
              barSize={44}      // <- makes bars broader
              maxBarSize={52}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
