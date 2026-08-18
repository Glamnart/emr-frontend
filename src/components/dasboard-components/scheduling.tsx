import React from "react"
import { useState } from "react";
import { 
  format, 
  startOfMonth, 
  endOfMonth, 
  eachDayOfInterval, 
  startOfWeek, 
  endOfWeek, 
  isSameMonth, 
  isSameDay 
} from "date-fns";
import type { EventItem } from "@/types/types";
import { plannedEvents } from "@/storage/dashboard-data";

const Scheduling: React.FC = ()=>{
    const [eventsDatabase] = useState<EventItem[]>(plannedEvents);

    const [currentMonth, setCurrentMonth] = useState<Date>(new Date(2026, 7, 1));
    const [selectedDate, setSelectedDate] = useState<Date>(new Date(2026, 7, 25)); 

    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);

    const daysInCalendarGrid = eachDayOfInterval({ start: startDate, end: endDate });
    const daysOfWeekLabels = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

    const activeDayEvents = eventsDatabase.filter((event) =>
    isSameDay(event.date, selectedDate)
  );

  return (
    <div className="w-full max-w-95.5 bg-white rounded-3xl p-6 shadow-sm select-none h-fit"> 
      <div className="flex items-center justify-between mb-1 px-1">
        <h2 className="text-[#0ea5e9] font-bold text-[12px] tracking-wide">
          {format(currentMonth, "MMMM yyyy")}
        </h2>
        
        <div className="flex gap-2 text-xs font-bold text-[#94a3b8]">
          <button type="button" onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1))} className="hover:text-[#0ea5e9]">←</button>
          <button type="button" onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1))} className="hover:text-[#0ea5e9]">→</button>
        </div>
      </div>

      
      <div className="grid grid-cols-7 text-center mb-3">
        {daysOfWeekLabels.map((weekday, index) => (
          <span key={index} className="text-[#94a3b8] text-[8px] font-semibold tracking-wider">
            {weekday}
          </span>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-y-3 gap-x-1 text-center mb-5">
        {daysInCalendarGrid.map((dayDate, index) => {
          const isCurrentMonthFlag = isSameMonth(dayDate, currentMonth);
          const isSelectedFlag = isSameDay(dayDate, selectedDate);
          
          // Style Assignment Logic based on Date Matrix State
          let dayTextStyle = "text-[#334155] font-semibold";
          let dayBackgroundStyle = "h-5 w-5 flex items-center justify-center rounded-xl text-[10px] transition-all hover:bg-slate-50";

          if (!isCurrentMonthFlag) {
            dayTextStyle = "text-[#cbd5e1] font-medium pointer-events-none"; // Muted gray padding
          } else if (isSelectedFlag) {
            dayTextStyle = "text-white font-bold hover:text-black";
            dayBackgroundStyle += " bg-[#0ea5e9] hover:bg-[#0ea5e9]"; // Highlight active theme color block
          }

          return (
            <div key={index} className="flex items-center justify-center">
              <button 
                type="button" 
                onClick={() => isCurrentMonthFlag && setSelectedDate(dayDate)}
                className={`${dayBackgroundStyle} ${dayTextStyle}`}
              >
                {format(dayDate, "d")}
              </button>
            </div>
          );
        })}
      </div>

      <div className="flex flex-col gap-3">
        {activeDayEvents.length > 0 ? (
          activeDayEvents.map((event) => (
            <div 
              key={event.id} 
              className="bg-[#f8fafc] rounded-2xl p-1 flex items-center border border-[#f1f5f9] animate-fade-in"
            >
              <div className="w-1.25 h-10 bg-sky-500 rounded-full mr-4 shrink-0" />
              
              <div className="flex flex-col">
                <span className="text-[#1e293b] font-bold text-[13px] tracking-tight">
                  {event.title}
                </span>
                <span className="text-[#94a3b8] text-[12px] font-medium mt-0.5">
                  {event.startTime} – {event.endTime}
                </span>
              </div>
            </div>
          ))
        ) : (
          /*when a user clicks an empty day */
          <div className="text-center py-3 border border-dashed border-[#e2e8f0] rounded-2xl text-[15px] text-[#94a3b8] font-medium">
            No schedules found for this date.
          </div>
        )}
      </div>

    </div>
  );
};

export default Scheduling;
