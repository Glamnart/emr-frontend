import React from "react";
import { recentPatients } from "@/storage/dashboard-data";

const RecentPatients:React.FC = ()=>{
    function printPatients(){
        return recentPatients.map(({pic,name,reason,time},i)=><button key={i} className="cursor-pointer flex items-center hover:bg-gray-100 px-2 py-1 rounded-sm dark:hover:bg-gray-700">
            <img src={pic} className="rounded-full h-10 w-10"/>
            <div className="flex flex-col ml-5 items-start">
                <span className="text-[13px] font-bold dark:text-white">{name}</span>
                <span className="text-[10px] -mt-2 dark:text-gray-400">{reason}</span>
            </div>
            <span className="ml-auto text-[12px] dark:text-gray-500">{time}</span>
        </button>)
    }
    return <div className="flex flex-1 h-fit flex-col bg-white rounded-lg shadow-sm p-4 dark:bg-gray-800">
        <div className="flex justify-between items-center">
            <span className="font-bold text-sm mb-2 dark:text-white">Recent Patients</span>
            <a href = "#" className="text-[12px] text-sky-500 font-bold">View All</a>
        </div>
        <div className="flex flex-col gap-3">
            {printPatients()}
        </div>
    </div>
}
export default RecentPatients;