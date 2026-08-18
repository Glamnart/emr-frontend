import React, { useState } from "react";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  ResponsiveContainer, 
  Tooltip 
} from "recharts";
import { weeklyAppointmentData,monthlyAppointmentData,totalMonthlyAppointments,totalMonthlyCompleted,totalMonthlyScheduled,totalWeeklyAppointments,totalWeeklyCompleted,totalWeeklyScheduled } from "@/storage/dashboard-data";

const Analytics: React.FC = ()=>{
    const [viewType, setViewType] = useState<"weekly" | "monthly">("weekly");

    return <div className="flex flex-col bg-white rounded-lg shadow-sm p-4 w-150">
        <div className="flex items-center mb-3">
            <div className="flex flex-col">
                <span className="font-bold text-sm -mb-1"> Appointment Analytics</span>
                <span className="text-[12px] text-gray-400">Overview of appointment trends</span>
            </div> 
             <div className="bg-gray-100 p-1 rounded-full flex items-center ml-auto">
          <button onClick={() => setViewType("weekly")} className={`px-4 py-1.5 text-xs font-bold rounded-full transition-all ${
              viewType === "weekly" ? "bg-white text-sky-400 shadow-sm" : "text-gray-500 hover:text-gray-600"}`}>
            Weekly
          </button>
          <button
            onClick={() => setViewType("monthly")} className={`px-4 py-1.5 text-xs font-bold rounded-full transition-all ${
              viewType === "monthly"? "bg-white text-sky-500 shadow-sm": "text-gray-400 hover:text-gray-600"}`}>
            Monthly
          </button>
        </div>
      </div>
      <div className="bg-gray-100 rounded-md flex justify-around py-1.5">
        <div className="flex flex-col items-center ">
            <span className="text-gray-500 text-[10px]">TOTAL APPOINTMENTS</span>
            <span className="text-sky-600 font-bold text-lg -mt-1">{viewType === "weekly"? totalWeeklyAppointments : totalMonthlyAppointments}</span>
        </div>
        <div className="flex flex-col items-center">
            <span className="text-gray-500 text-[10px]">COMPLETED</span>
            <span className="text-sky-500 font-bold text-lg -mt-1">{viewType === "weekly"? totalWeeklyCompleted : totalMonthlyCompleted}</span>
        </div>
        <div className="flex flex-col items-center">
            <span className="text-gray-500 text-[10px]">SCHEDULED</span>
            <span className="text-blue-300 font-bold text-lg -mt-1">{viewType === "weekly"? totalWeeklyScheduled : totalMonthlyScheduled}</span>
        </div>
      </div>

      <div className="w-full h-70 pr-2">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data = { viewType === "weekly"? weeklyAppointmentData : monthlyAppointmentData} margin={{ top: 0, right: 5, left: -25, bottom: 75 }} barGap={8}>
            
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
            
            <XAxis 
              dataKey={viewType === "weekly"? "day" : "month"} 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#94a3b8', fontSize: 11, fontWeight: 600 }}
              dy={5}
            />
            
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              domain={[0, 100]} 
              ticks={[0, 25, 50, 75, 100]}
              tick={{ fill: '#94a3b8', fontSize: 10 }}
            />

            {/* Custom hovering data info card overlay */}
            <Tooltip 
              cursor={{ fill: 'transparent' }}
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  return (
                    <div className="bg-white p-3 border border-[#e2e8f0] shadow-md rounded-xl text-xs font-semibold text-[#334155]">
                      <p className="mb-1 text-[#94a3b8]">{payload[0].payload.day}</p>
                      <p className="text-sky-500">Completed: {payload[0].value}</p>
                      <p className="text-blue-300">Scheduled: {payload[1].value}</p>
                    </div>
                  );
                }
                return null;
              }}
            />

            <Bar 
              dataKey="completed" 
              fill="#0ea5e9" 
              radius={[4, 4, 0, 0]} 
              maxBarSize={14} 
            />

            <Bar 
              dataKey="scheduled" 
              fill="#93c5fd" 
              radius={[4, 4, 0, 0]} 
              maxBarSize={14} 
            />

          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* SECTION 4: Lower Layout Color Legend */}
      <div className="flex items-center justify-center gap-6 -mt-17 text-xs font-bold text-[#334155]">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 bg-sky-500 rounded-full" />
          <span className="text-[12px]">Completed</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 bg-blue-300 rounded-full" />
          <span className="text-[12px]">Scheduled</span>
        </div>
      </div>
    </div>
}

export default Analytics