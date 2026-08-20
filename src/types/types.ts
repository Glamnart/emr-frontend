export interface NavItemsProps{
    img: React.ReactNode,
    name: string,
    link: string,
    alert: number,
    page?: "dashboard"|"search"|"patients"|"queues"|"appointments"|"registration"|"maternity"|"tasks"|"pharmacy"|"inventory"|"store"|"lab"|"procedures"|"billing"|"compliance"|"color",
    category?: "overview"|"clinical"|"nursing"|"governance"
}

export interface SideBarProp{
  page: "dashboard"|"search"|"patients"|"queues"|"appointments"|"registration"|"maternity"|"tasks"|"pharmacy"|"inventory"|"store"|"lab"|"procedures"|"billing"|"compliance"|"color",
}

export interface StatusBoxProp{
    color1: "bg-sky-500"|"bg-teal-500"|"bg-cyan-500"|"bg-violet-400",
    color2: "bg-sky-600"|"bg-teal-600"|"bg-cyan-600"|"bg-violet-500",
    color3: "bg-sky-400"|"bg-teal-400"|"bg-cyan-400"|"bg-violet-300",
    img: React.ReactNode,
    positive: boolean,
    percent: number,
    name: "Today's Patients"|"Patients Visited"|"New Admits"|"Avg. Queue Time",
    value: number|string
}

export interface EventItem {
  id: string;
  title: string;
  startTime: string;
  endTime: string;
  date: Date;
}

export interface CurvedGraphInfo {
  month: string, 
  newPatients: number,
  returningPatients: number 
  dataPoint?:boolean
}

export interface DailyTrend {
  unit: string;
  completed: number;
  scheduled: number;
}

export interface MonthlyTrend {
  unit: string;
  completed: number;
  scheduled: number;
}

export interface RecentPatientsProp{
  pic: string,
  name: string,
  reason: string,
  time: string
}

export interface MedicineRequestProp{
  name: string;
  count: number,
  countType: "vial(s)"|"strip(s)",
  priority: "Urgent"|"Next Week",
  timeCount: number,
  timeUnit: "min(s)"|"day(s)"|"hour(s)",
  status: "Pending" | "On Time" | "Delayed"
}

export interface ReviewsScoreProps {
  score: number;
} 