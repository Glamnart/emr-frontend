import React from "react";
import { medicineRequests } from "@/storage/dashboard-data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import type { MedicineRequestProp } from "@/types/types";

const Request : React.FC<MedicineRequestProp> = ({name,count,countType,priority,timeCount,timeUnit,status})=>{
 return <div className="text-xs flex  cursor-pointer hover:bg-gray-100 py-3 -ml-2.5 px-2.5 dark:hover:bg-gray-700">
    <span className="font-bold dark:text-white">{name}</span>
    <span className="text-gray-500 absolute left-40 ">{`${count} ${countType}`}</span>
    <span className={`absolute left-80 text-[12px] ${priority === "Urgent" ? "text-red-600 bg-red-200 border border-red-400":"text-yellow-600 bg-amber-100 border border-yellow-500"} font-bold p-1 rounded-full`}>{priority}</span>
    <span className=" absolute left-130 text-[12px] text-gray-400">{`${timeCount} ${timeUnit} ago`}</span>
    <span className={` absolute left-180 ${status === "Pending" ? "text-blue-300" : status === "On Time" ? "text-sky-500": "text-black dark:text-white"} font-bold`}>{status}</span>
 </div>
}

const MedicineRequest: React.FC = ()=>{
    function printMedicineRequests(){
        return medicineRequests.map(({name,count,countType,priority,timeCount,timeUnit,status},i)=><Request key={i} name={name} count = {count} countType={countType} priority={priority} timeCount={timeCount} timeUnit={timeUnit} status = {status}/>)
    }
    return <div className="flex flex-col bg-white rounded-lg shadow-sm p-4 w-fit flex-1 dark:bg-gray-800">
        <div className="flex items-center mb-2">
            <span className="font-bold text-sm -mb-1 dark:text-white">Medicine Requests</span>
            <button className="ml-auto border rounded-md text-xs text-gray-500 w-20 h-7 cursor-pointer hover:bg-gray-100 shadow-sm dark:text-white dark:border-white dark:hover:bg-gray-700 dark:hover:text-white"><FontAwesomeIcon icon={faFilter}/>Filter</button>
        </div>
        <div className="flex flex-col gap-1 ml-5 relative">
            <div className="text-[10px] font-bold text-gray-400 flex gap-40">
                <span className="">MEDICINE</span>
                <span className="absolute left-43">COUNT</span>
                <span className="absolute left-80">PRIORITY</span>
                <span className="absolute left-133">TIME</span>
                <span className="absolute left-180">STATUS</span>
            </div>
            {printMedicineRequests()}
        </div>
    </div>
}

export default MedicineRequest;