import type { StatusBoxProp } from "@/types/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faEye, faBed, faStopwatch } from "@fortawesome/free-solid-svg-icons";

export const statusSummary: StatusBoxProp[] = [
    {color1: "bg-sky-500", color2: "bg-sky-600", color3: "bg-sky-400", img:<FontAwesomeIcon icon={faUsers}/>, positive: true, percent: 12.5, name:"Today's Patients", value:245},
    {color1: "bg-teal-500", color2: "bg-teal-600", color3: "bg-teal-400", img:<FontAwesomeIcon icon={faEye}/>, positive: true, percent: 8.2, name:"Patients Visited", value:137},
    {color1: "bg-cyan-500", color2: "bg-cyan-600", color3: "bg-cyan-400", img:<FontAwesomeIcon icon={faBed}/>, positive: true, percent: 3, name:"New Admits", value:24},
    {color1: "bg-violet-400", color2: "bg-violet-500", color3: "bg-violet-300", img:<FontAwesomeIcon icon={faStopwatch}/>, positive: false, percent: 2, name:"Avg. Queue Time", value:"45min"}
]

export const curveGraphData = [
  { month: "Jan", newPatients: 130, returningPatients: 65 },
  { month: "Feb", newPatients: 200, returningPatients: 120 },
  { month: "Mar", newPatients: 260, returningPatients: 170 },
  { month: "Apr", newPatients: 295, returningPatients: 185 },
  { month: "May", newPatients: 280, returningPatients: 170 },
  { month: "Jun", newPatients: 250, returningPatients: 155 },
  { month: "Jul", newPatients: 275, returningPatients: 175 },
  { month: "Aug", newPatients: 310, returningPatients: 220 }, // Marked active month
  { month: "Sep", dataPoint: true, newPatients: 325, returningPatients: 230 },
  { month: "Oct", newPatients: 310, returningPatients: 210 },
  { month: "Nov", newPatients: 270, returningPatients: 170 },
  { month: "Dec", newPatients: 275, returningPatients: 180 },
];