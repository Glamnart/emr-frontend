import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faGridVertical, faSearch, faUsers, faLayerGroup, faCalendar, faUserPlus, faBaby, 
  faClipboardCheck, faCapsules, faBox, faFlask, faStethoscope, faCreditCard, faShieldHalved,

} from "@fortawesome/free-solid-svg-icons"
import type { NavItemsProps } from "@/types";

export const navItems: NavItemsProps[] = 
[
  {category: "overview", img:<FontAwesomeIcon icon={faGridVertical}/> , name:"Dashboard", link:"#", alert:0},
  {category: "overview", img:<FontAwesomeIcon icon={faSearch}/>, name:"Search", link:"#", alert:0},
  {category: "clinical", img:<FontAwesomeIcon icon={faUsers}/>, name:"Patients", link:"#", alert:0},
  {category: "clinical", img:<FontAwesomeIcon icon={faLayerGroup}/>, name:"Queues", link:"#", alert:0},
  {category: "clinical", img:<FontAwesomeIcon icon={faCalendar}/>, name:"Appointments", link:"#", alert:3},
  {category: "clinical", img:<FontAwesomeIcon icon={faUserPlus}/>, name:"Registration", link:"#", alert:0},
  {category: "clinical", img:<FontAwesomeIcon icon={faBaby}/>, name:"Maternity", link:"#", alert:0},
  {category: "clinical", img:<FontAwesomeIcon icon={faClipboardCheck}/>, name:"Tasks", link:"#", alert:0},
  {category: "clinical", img:<FontAwesomeIcon icon={faCapsules}/>, name:"Pharmacy", link:"#", alert:0},
  {category: "clinical", img:<FontAwesomeIcon icon={faBox}/>, name:"Inventory Control", link:"#", alert:0},
  {category: "nursing", img:<FontAwesomeIcon icon={faFlask}/>, name:"Lab", link:"#", alert:0},
  {category: "nursing", img:<FontAwesomeIcon icon={faStethoscope}/>, name:"Procedures", link:"#", alert:0},
  {category: "governance", img:<FontAwesomeIcon icon={faCreditCard}/>, name:"Billing Management", link:"#", alert:0},
  {category: "governance", img:<FontAwesomeIcon icon={faShieldHalved}/>, name:"Compliance", link:"#", alert:0}
]