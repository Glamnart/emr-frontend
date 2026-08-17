import React from "react";


export interface NavItemsProps{
    img: React.ReactNode,
    name: string,
    link: string,
    alert: number
}


const NavItem : React.FC<NavItemsProps> = ({img,name,link,alert})=>{
 return <a href={link} >
    <button className="flex flex-row items-center gap-1.5">
        {img}
        {name}
        {alert > 0 && <div className="flex rounded-full bg-red-600 text-white font-bold h-3 p-1 text-[8px] items-center">{alert}</div>} 
    </button>
</a>
}

export default NavItem;