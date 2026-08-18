import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceLine
} from "recharts";
import { curveGraphData } from "@/storage/dashboard-data";

const Insights: React.FC = ()=>{
 return<div className="flex flex-col bg-white rounded-lg shadow-sm p-4 ">
        <span className="font-bold text-sm">Visitor Insights</span>
        <div>
            <div className="w-150 h-55">
                <ResponsiveContainer width={"100%"} height="100%">
                    <LineChart data={curveGraphData} margin={{ top: 20, right: 30, left: -10, bottom: 10 }}>
                
                        <CartesianGrid vertical={false} stroke="#f0f0f0" />
                        
                        <XAxis 
                        dataKey="month" 
                        axisLine={false} 
                        tickLine={false} 
                        tick={{ fill: "#9ca3af", fontSize: 12 }} 
                        dy={10}/>

                        <YAxis 
                        domain={[0, 400]} 
                        ticks={[0, 100, 200, 300, 400]} 
                        axisLine={false} 
                        tickLine={false} 
                        tick={{ fill: "#9ca3af", fontSize: 12 }}/>
                        
                        <Tooltip />

                        <ReferenceLine 
                        x="Aug" 
                        stroke="#cbd5e1" 
                        strokeDasharray="4 4" />

                        <Line
                        type="monotone"
                        dataKey="newPatients"
                        stroke="#0ea5e9"
                        strokeWidth={3}
                        dot={(props) => {
                            // Adds the distinct anchor dot specifically on August
                            if (props.payload.name === "Aug") {
                            return <circle cx={props.cx} cy={props.cy} r={5} fill="#0ea5e9" stroke="#fff" strokeWidth={2} />;
                            }
                            return false;
                        }}
                        activeDot={{ r: 6 }}/>

                        <Line
                        type="monotone"
                        dataKey="returningPatients"
                        stroke="#c084fc"
                        strokeWidth={3}
                        dot={(props) => {
                            // Adds the distinct anchor dot specifically on August
                            if (props.payload.name === "Aug") {
                            return <circle cx={props.cx} cy={props.cy} r={5} fill="#c084fc" stroke="#fff" strokeWidth={2} />;
                            }
                            return false;
                        }}
                        activeDot={{ r: 6 }}/>
                    </LineChart>
                </ResponsiveContainer>
            </div>
            <div className ="flex justify-center gap-6 mt-5 text-[14px] text-gray-600">
                <div className ="flex items-center gap-2">
                    <div className="w-4 h-0.75 bg-sky-500 rounded-lg"></div>
                    <span>New Patients</span>
                </div>
                <div className ="flex items-center gap-2">
                    <div className="w-4 h-0.75 bg-violet-400 rounded-lg"></div>
                    <span>Returning Patients</span>
                </div>
            </div>
        </div>
    </div>
}
export default Insights