import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCalendarPlus } from "@fortawesome/free-regular-svg-icons"
import { faCapsules, faPlus, faUserPlus } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"

const More = ()=>{
    const[visibility,setVisibility] = useState<boolean>(false);
    return<div className="absolute right-10 bottom-12 flex flex-col">
        <div className={`flex-col items-start gap-0.5 ${visibility?"flex":"hidden"} mb-15`}>
            <button className="bg-white text-[15px] border flex rounded-md shadow-sm gap-2 px-2 py-1.5 items-center hover:shadow-xl hover:-mb-1 hover:z-10">New Patient<FontAwesomeIcon className="bg-teal-100 text-sky-500 p-1 rounded-sm text-[12px]" icon={faUserPlus}/></button>
            <button className="bg-white text-[15px] border flex rounded-md shadow-sm gap-2 px-2 py-1.5 items-center hover:shadow-xl hover:-my-1 hover:z-10">New Prescription<FontAwesomeIcon icon={faCapsules} className="bg-amber-100 text-amber-600 p-1 rounded-sm text-[12px]"/></button>
            <button className="bg-white text-[15px] border flex rounded-md shadow-sm gap-2 px-2 py-1.5 items-center hover:shadow-xl hover:-my-1 hover:z-10">Schedule Appointment<FontAwesomeIcon icon={faCalendarPlus} className="bg-sky-100 text-blue-800 p-1 rounded-sm text-[12px]"/></button>
        </div>
        <div className="relative">
        <div className="absolute right-0 bottom-px animate-ping animation-duration-3000 rounded-full bg-sky-500 text-white w-fit p-5 flex items-center ml-auto"></div>
        <button onClick={()=>setVisibility(!visibility)} className="absolute bottom-px right-0 rounded-full bg-sky-500 text-white w-fit px-2.5 py-3 flex items-center justify-center ml-auto hover:bg-sky-600"><FontAwesomeIcon icon={faPlus}/></button>
        </div>
    </div>
}

export default More