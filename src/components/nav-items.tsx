import React from "react";
import type { NavItemsProps } from "@/types";


const NavItem : React.FC<NavItemsProps> = ({img,name,link,alert,page})=>{
 return <a href={link} className={`rounded-lg h-9 flex pl-2 w-45 text-gray-400 font-medium ${name.toLowerCase() === page?.toLowerCase() ? "bg-sky-500 text-white hover:bg-blue-400 hover:text-white": "hover:bg-gray-100"}`} >
    <button className="flex flex-row items-center gap-1.5 cursor-pointer">
        {img}
        <div className={`${name.toLowerCase() === page?.toLowerCase()? "text-white" : "text-gray-600 "}`}>{name}</div>
        {alert > 0 && <div className="flex rounded-full bg-red-600 ml-10 text-white font-bold h-5 w-5 text-[12px] justify-center items-center">{alert}</div>} 
    </button>
</a>
}

export default NavItem;