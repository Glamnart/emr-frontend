import type { CurvedGraphInfo, StatusBoxProp, EventItem, DailyTrend, MonthlyTrend, RecentPatientsProp} from "@/types/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faEye, faBed, faStopwatch } from "@fortawesome/free-solid-svg-icons";

export const statusSummary: StatusBoxProp[] = [
    {color1: "bg-sky-500", color2: "bg-sky-600", color3: "bg-sky-400", img:<FontAwesomeIcon icon={faUsers}/>, positive: true, percent: 12.5, name:"Today's Patients", value:245},
    {color1: "bg-teal-500", color2: "bg-teal-600", color3: "bg-teal-400", img:<FontAwesomeIcon icon={faEye}/>, positive: true, percent: 8.2, name:"Patients Visited", value:137},
    {color1: "bg-cyan-500", color2: "bg-cyan-600", color3: "bg-cyan-400", img:<FontAwesomeIcon icon={faBed}/>, positive: true, percent: 3, name:"New Admits", value:24},
    {color1: "bg-violet-400", color2: "bg-violet-500", color3: "bg-violet-300", img:<FontAwesomeIcon icon={faStopwatch}/>, positive: false, percent: 2, name:"Avg. Queue Time", value:"45min"}
]

export const curveGraphData:CurvedGraphInfo[] = [
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

export const plannedEvents:EventItem[] =[
    { id: "1", title: "Board Meeting", startTime: "10:30 AM", endTime: "11:30 AM", date: new Date(2026, 7, 25)},
]

export const weeklyAppointmentData: DailyTrend[] = [
    { day: "MON", completed: 42, scheduled: 30 },
    { day: "TUE", completed: 64, scheduled: 46 },
    { day: "WED", completed: 79, scheduled: 53 },
    { day: "THU", completed: 60, scheduled: 42 },
    { day: "FRI", completed: 85, scheduled: 62 },
    { day: "SAT", completed: 49, scheduled: 57 },
  ];

  export const monthlyAppointmentData: MonthlyTrend[] = [
    { month: "JAN", completed: 42, scheduled: 30 },
    { month: "FEB", completed: 64, scheduled: 46 },
    { month: "MAR", completed: 79, scheduled: 53 },
    { month: "APR", completed: 60, scheduled: 42 },
    { month: "JUN", completed: 85, scheduled: 62 },
    { month: "JUL", completed: 49, scheduled: 57 },
    { month: "AUG", completed: 80, scheduled: 75 },
    { month: "SEP", completed: 62, scheduled: 20 },
    { month: "OCT", completed: 90, scheduled: 0 },
    { month: "NOV", completed: 70, scheduled: 50 },
    { month: "DEC", completed: 22, scheduled: 22 }
  ];

 export const totalWeeklyCompleted:number = weeklyAppointmentData.reduce((acc, curr) => acc + curr.completed, 0);
 export const totalWeeklyScheduled: number = weeklyAppointmentData.reduce((acc, curr) => acc + curr.scheduled, 0);
 export const totalWeeklyAppointments:number = totalWeeklyCompleted + totalWeeklyScheduled;

 export const totalMonthlyCompleted:number = monthlyAppointmentData.reduce((acc, curr) => acc + curr.completed, 0);
 export const totalMonthlyScheduled: number = monthlyAppointmentData.reduce((acc, curr) => acc + curr.scheduled, 0);
 export const totalMonthlyAppointments:number = totalMonthlyCompleted + totalMonthlyScheduled;

 export const recentPatients: RecentPatientsProp[] = [
  {pic:"src/assets/amlaWilson-photo.avif", name:"Amla Wilson", reason:"Flu Symptoms", time:"12:45"},
  {pic:"src/assets/marcusWebb-photo.avif", name:"Marcus Webb", reason:"Fracture Care", time:"11:30"}
 ]