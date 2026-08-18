import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch, faList, faVideo, faFileCirclePlus } from "@fortawesome/free-solid-svg-icons"

const Actions : React.FC = ()=>{
    return<div className="flex flex-col bg-white rounded-lg shadow-sm p-4">
        <span className="font-bold text-sm mb-2">Quick Actions</span>
        <div className="flex text-[13px] gap-8">
            <button className="bg-gray-100 flex items-center gap-2 rounded-md p-2  pr-7 cursor-pointer hover:bg-gray-200"><FontAwesomeIcon className="rounded-full bg-white p-1" icon={faSearch}/><span>Search Patient</span></button>
            <button className="bg-gray-100 flex items-center gap-2 rounded-md p-2  pr-7 cursor-pointer hover:bg-gray-200"><FontAwesomeIcon className="rounded-full bg-white p-1" icon={faList}/><span>View Queue</span></button>
            <button className="bg-gray-100 flex items-center gap-2 rounded-md p-2  pr-7 cursor-pointer hover:bg-gray-200"><FontAwesomeIcon className="rounded-full bg-white p-1" icon={faVideo}/><span>Start TeleVisit</span></button>
            <button className="bg-gray-100 flex items-center gap-2 rounded-md p-2  pr-7 cursor-pointer hover:bg-gray-200"><FontAwesomeIcon className="rounded-full bg-white p-1" icon={faFileCirclePlus}/><span>Create Entry</span></button>
        </div>
    </div>
}

export default Actions