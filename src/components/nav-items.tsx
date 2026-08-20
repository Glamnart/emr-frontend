import React from "react";
import type { NavItemsProps } from "@/types/types";


const NavItem : React.FC<NavItemsProps> = ({img,name,link,alert,page})=>{
 return <a href={link} className={`relative rounded-lg h-10 p-1 flex pl-2 w-45 text-gray-400 font-medium ${name.toLowerCase() === page?.toLowerCase() ? "bg-sky-500 text-white hover:bg-blue-400 hover:text-white dark:hover:text-white": "hover:bg-gray-100 dark:hover:bg-gray-800"}`} >
    <button className="flex flex-row items-center gap-1.5 cursor-pointer dark:hover:text-white">
        {img}
        <div className={`${name.toLowerCase() === page?.toLowerCase()? "text-white hover:text-black dark:hover:text-white" : "text-gray-600 dark:text-gray-400"}  `}>{name}</div>
        {alert > 0 && <div className="flex rounded-full bg-red-600 absolute right-2 text-white font-bold h-4 w-4 text-[12px] justify-center items-center">{alert}</div>} 
    </button>
</a>
}

export default NavItem;