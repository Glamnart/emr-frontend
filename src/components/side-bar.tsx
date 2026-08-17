import NavItem from "./nav-items";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faShield, faGridVertical, faSearch, faUsers, faLayerGroup, faCalendar, faUserPlus, faBaby, 
  faClipboardCheck, faCapsules, faBox, faFlask, faStethoscope, faCreditCard, faShieldHalved,

} from "@fortawesome/free-solid-svg-icons"

import type { NavItemsProps } from "./nav-items";

const navItems: NavItemsProps[] = [
  {img:<FontAwesomeIcon icon={faGridVertical}/>, name:"Dashboard", link:"#", alert:0},
  {img:<FontAwesomeIcon icon={faSearch}/>, name:"Search", link:"#", alert:0},
  {img:<FontAwesomeIcon icon={faUsers}/>, name:"Patients", link:"#", alert:0},
  {img:<FontAwesomeIcon icon={faLayerGroup}/>, name:"Queues", link:"#", alert:0},
  {img:<FontAwesomeIcon icon={faCalendar}/>, name:"Appointments", link:"#", alert:3},
  {img:<FontAwesomeIcon icon={faUserPlus}/>, name:"Registration", link:"#", alert:0},
  {img:<FontAwesomeIcon icon={faBaby}/>, name:"Maternity", link:"#", alert:0},
  {img:<FontAwesomeIcon icon={faClipboardCheck}/>, name:"Tasks", link:"#", alert:0},
  {img:<FontAwesomeIcon icon={faCapsules}/>, name:"Pharmacy", link:"#", alert:0},
  {img:<FontAwesomeIcon icon={faBox}/>, name:"Inventory Control", link:"#", alert:0},
  {img:<FontAwesomeIcon icon={faFlask}/>, name:"Lab", link:"#", alert:0},
  {img:<FontAwesomeIcon icon={faStethoscope}/>, name:"Procedures", link:"#", alert:0},
  {img:<FontAwesomeIcon icon={faCreditCard}/>, name:"Billing Management", link:"#", alert:0},
  {img:<FontAwesomeIcon icon={faShieldHalved}/>, name:"Compliance", link:"#", alert:0}
]

 
export default function NavBar(){
  function printNavItems(sect:"overview"|"nursing"|"clinical"|"governance"){
    let i:number,j:number
    switch(sect){
      case "overview": 
        i = 0;j = 2
        break;
      case "clinical": 
        i = 2; j = 10
        break;
      case "nursing": 
        i = 10 ;j = 12
        break;
      default: 
        i = 12 ; j = 14
        break;
    }
    return navItems.slice(i,j).map((({img,name,link,alert}) => <NavItem img={img}  name = {name} link={link} alert={alert} />))
    
  }
  return<div className=" h-full overflow-y-auto flex flex-col gap-2 font-light text-[10px] pl-6 border-r border-b-gray-800 scrollbar-thin w-40 scrollbar-thumb-card">
    <div className="flex flex-row items-center gap-1.5 pt-5 ">
        <FontAwesomeIcon icon={faShield}/>
        <p className="font-bold">SERENE EMR</p>
    </div> 
    <span>Overview</span>
    {printNavItems("overview")}
    <span>Clinical Operations</span>
    {printNavItems("clinical")}
    <span>Nursing</span>
    {printNavItems("nursing")}
    <span>Governance</span>
    {printNavItems("governance")}
   </div>
}