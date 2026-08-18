import NavItem from "./nav-items";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faShield, faGear, faCircleQuestion, faChevronRight, faArrowRightFromBracket} from "@fortawesome/free-solid-svg-icons"
import { navItems } from "@/storage/storage";
import { useState } from "react";
import type { SideBarProp } from "@/types/types";

const NavBar : React.FC<SideBarProp> = ({page})=>{
  const [settingsDown, setSettingsDown] = useState<boolean>(false);
  const [helpDown, setHelpDown] = useState<boolean>(false);

  function printNavItems(sect:"overview"|"nursing"|"clinical"|"governance"){
    return navItems.filter(({category})=> category == sect).map((({img,name,link,alert},i) => <NavItem key={i} img={img}  name = {name} link={link} alert={alert} page={page} />))
  }
  return<div className=" h-full overflow-y-auto flex flex-col gap-1.5 font-light text-[13px] pl-4 w-53 border-r border-b-gray-800 scrollbar-thin scrollbar-thumb-card pr">
    <div className="flex flex-row items-center gap-1.5 pt-5 pb-1 ">
        <FontAwesomeIcon className="bg-sky-500 rounded-md text-white p-2" icon={faShield}/>
        <p className="font-bold text-sm">SERENE EMR</p>
    </div> 
    <span className="mt-2 pl-2.5 text-gray-400 font-semibold">OVERVIEW</span>
    {printNavItems("overview")}
    <span className="mt-2 pl-2.5 text-gray-400 font-semibold">CLINICAL OPERATIONS</span>
    {printNavItems("clinical")}
    <span className="mt-2 pl-2.5 text-gray-400 font-semibold">NURSING</span>
    {printNavItems("nursing")}
    <span className="mt-2 pl-2.5 text-gray-400 font-semibold">GOVERANCE</span>
    {printNavItems("governance")}
    <div>
      <button onClick={()=> setSettingsDown(!settingsDown)} className="flex -mt-1.5 rounded-lg h-9 pl-2 w-45 text-gray-400 font-medium flex-row items-center gap-1.5 cursor-pointer hover:bg-gray-100">
        <FontAwesomeIcon icon={faGear}/>
        <span className="text-gray-600">Settings</span>
        <FontAwesomeIcon className="ml-15 text-xs" icon={faChevronRight}/>
      </button>
      <div className={`${ settingsDown ? "flex flex-col pl-7 text-[12px] text-gray-500" : "hidden"}`}>
        <a className="hover:text-sky-500" href="#">Profile</a>
        <a className="hover:text-sky-500" href="#">Staff</a>
        <a className="hover:text-sky-500" href="#">Features</a>
        <a className="hover:text-sky-500" href="#">Forms</a>
      </div>
    </div>
    <div>
      <button onClick={()=> setHelpDown(!helpDown)} className="flex -mt-2 rounded-lg h-9 pl-2 w-45 text-gray-400 font-medium flex-row items-center gap-1.5 cursor-pointer hover:bg-gray-100">
        <FontAwesomeIcon icon={faCircleQuestion}/>
        <span className="text-gray-600">Help</span>
        <FontAwesomeIcon className="ml-20 text-xs" icon={faChevronRight}/>
      </button>
      <div className={`${ helpDown ? "flex flex-col pl-7 text-[12px] text-gray-500" : "hidden"}`}>
        <a className="hover:text-sky-500" href="#">User Guide</a>
        <a className="hover:text-sky-500" href="#">Support Desk</a>
        <a className="hover:text-sky-500" href="#">FAQs</a>
        <a className="hover:text-sky-500" href="#">System Status</a>
      </div>
    </div>
    <div className="flex border-t -ml-5 items-center mt-2">
      <div className="flex flex-row border rounded-lg items-center justify-center w-45 p-1.5 text-gray-400 mt-5 mb-5 ml-4">
        <img src="src/assets/staffBadge.png" className="w-8 h-8 border border-blue-100  rounded-full"/>
        <div className="flex-1 flex flex-col ml-2 font-xs">
          <div className="font-bold -mb-1.5 text-gray-800">Dr. Sarah Chen</div>
          <div>Super Admin</div>
        </div>
        <a href="#"><button className="cursor-pointer hover:text-gray-500"><FontAwesomeIcon icon={faArrowRightFromBracket}/></button></a>
      </div>
    </div>
  </div>
}

export default NavBar;