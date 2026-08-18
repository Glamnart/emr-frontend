import type React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCheck, faMinus, faDownload } from "@fortawesome/free-solid-svg-icons";
import type { StatusBoxProp } from "@/types/types";
import { statusSummary } from "@/storage/dashboard-data";

const Box : React.FC<StatusBoxProp> = ({img, positive, percent, name, value, color1, color2, color3})=>{
    return<div className={`rounded-xl w-40 h-30 flex flex-col ${color1} text-white justify-center pl-3 pr-2.5 hover:h-29 cursor-pointer`}>
        <div className="flex items-center mb-4">
            <div className={`rounded-full ${color2} w-7 h-7 flex items-center justify-center`}>{img}</div>
            <div className={`ml-auto text-[12px] ${color3} rounded-lg px-0.5`}><FontAwesomeIcon icon={positive ? faCheck : faMinus}/><span>{percent}%</span></div>
        </div>
        <span className="text-xs mb-1">{name}</span>
        <span className="font-extrabold text-xl -mb-2">{value}</span>
    </div>
}

const Status : React.FC = ()=>{
     function printBoxes(){
        return statusSummary.map(({img, positive, percent, name, value, color1, color2, color3},i) => <Box color1={color1} color2={color2} color3={color3} img={img} positive = {positive} percent = {percent} name = {name} value = {value} key={i} />)
    }
    return<div className="flex flex-col bg-white rounded-lg shadow-sm p-4 w-fit">
        <div className="flex items-center mb-2">
            <div className="flex flex-col">
                <span className="font-bold text-sm -mb-1">Today's Status</span>
                <span className="text-[12px] text-gray-400">Sales Summary</span>
            </div> 
            <button className="ml-auto border rounded-md text-xs text-gray-500 w-20 h-7 cursor-pointer hover:bg-gray-100 shadow-sm"><FontAwesomeIcon icon={faDownload}/>Export</button>
        </div>
        <div className="flex gap-2">
            {printBoxes()}
        </div>
    </div>
}
export default Status;