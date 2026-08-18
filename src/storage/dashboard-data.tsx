import type { StatusBoxProp } from "@/types/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faEye, faBed, faStopwatch } from "@fortawesome/free-solid-svg-icons";

export const statusSummary: StatusBoxProp[] = [
    {color1: "bg-sky-500", color2: "bg-sky-600", color3: "bg-sky-400", img:<FontAwesomeIcon icon={faUsers}/>, positive: true, percent: 12.5, name:"Today's Patients", value:245},
    {color1: "bg-teal-500", color2: "bg-teal-600", color3: "bg-teal-400", img:<FontAwesomeIcon icon={faEye}/>, positive: true, percent: 8.2, name:"Patients Visited", value:137},
    {color1: "bg-cyan-500", color2: "bg-cyan-600", color3: "bg-cyan-400", img:<FontAwesomeIcon icon={faBed}/>, positive: true, percent: 3, name:"New Admits", value:24},
    {color1: "bg-violet-400", color2: "bg-violet-500", color3: "bg-violet-300", img:<FontAwesomeIcon icon={faStopwatch}/>, positive: false, percent: 2, name:"Avg. Queue Time", value:"45min"}
]