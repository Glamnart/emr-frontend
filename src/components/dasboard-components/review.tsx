import { reviewScore } from "@/storage/dashboard-data";

const ReviewScore = ()=>{
    const radius = 60;
    const strokeWidth = 12;
    const normalRadius = radius - strokeWidth / 2;
    const circumference = normalRadius * 2 * Math.PI;
    const strokeDashoffset = circumference - (reviewScore.score / 100) * circumference;
     return <div className="flex flex-col bg-white rounded-lg shadow-sm p-4 w-md dark:bg-gray-800">
        <span className="font-bold text-sm mb-2 dark:text-white">Review Score</span>
         <div className="relative flex items-center justify-center my-6">
        <svg
          height={radius * 2}
          width={radius * 2}
          className="transform -rotate-90" 
        >
          <circle
            className="stroke-gray-200 dark:stroke-[#0e172a]"
            fill="transparent"
            strokeWidth={strokeWidth}
            r={normalRadius}
            cx={radius}
            cy={radius}
          />
          <circle
            className="stroke-sky-500 transition-all duration-500 ease-out"
            fill="transparent"
            strokeWidth={strokeWidth}
            strokeDasharray={circumference + " " + circumference}
            style={{strokeDashoffset}}
            strokeLinecap="round"
            r={normalRadius}
            cx={radius}
            cy={radius}
          />
        </svg>
        <div className="absolute flex flex-col items-center justify-center text-center">
          <span className="text-black dark:text-white font-black text-2xl leading-none tracking-tight">
            {reviewScore.score}%
          </span>
          <span className="text-gray-400 text-[9px] font-bold tracking-widest uppercase mt-1">
            {reviewScore.score >= 50 ? "POSITIVE" : "NEGATIVE"}
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between text-[11px] font-bold mt-8 px-1">
        <div className="flex items-center gap-2 text-[#334155] dark:text-white">
          <span className="w-2.5 h-2.5 bg-sky-500 rounded-full" />
          <span>High Score</span>
        </div>
        <div className="flex items-center gap-2 text-[#cbd5e1]">
          <span className="w-2.5 h-2.5 bg-gray-200 rounded-full dark:bg-[#0e172a]" />
          <span>Incomplete</span>
        </div>
      </div>
    </div>
}

export default  ReviewScore;