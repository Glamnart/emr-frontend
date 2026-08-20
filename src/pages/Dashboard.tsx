import NavBar from "@/components/side-bar";
import { useState } from "react";
import SearchBar from "@/components/search-bar";
import Status from "@/components/dasboard-components/status";
import Actions from "@/components/dasboard-components/actions";
import Insights from "@/components/dasboard-components/insights";
import Scheduling from "@/components/dasboard-components/scheduling";
import Analytics from "@/components/dasboard-components/analytics";
import RecentPatients from "@/components/dasboard-components/recent-patients";
import MedicineRequest from "@/components/dasboard-components/medicine-request";
import ReviewScore from "@/components/dasboard-components/review";
import More from "@/components/dasboard-components/more";

const Dashboard = ()=>{
    const [theme, setTheme] = useState<"night"|"day">("day")
    return <div className={`flex h-lvh overflow-hidden bg-white ${theme === "night" && "dark"}`}>
        <NavBar page="dashboard"/>
        <div className="flex-1 h-full overflow-y-auto bg-gray-100 dark:bg-[#0e172a] ">
            <SearchBar setTheme={setTheme} theme={theme}/>
            <div className="flex m-4 gap-5">
                <div className="flex flex-col gap-5">
                    <Status/>
                    <Actions/>
                </div>
                <Insights/>
            </div>
            <div className="flex m-4 gap-5">
                <Scheduling/>
                <Analytics/>
                <RecentPatients/>
            </div>
            <div className="flex mb-2 gap-4 m-4">
                <MedicineRequest/>
                <ReviewScore/>
            </div>
        </div>
        <More/>
    </div>
}

export default Dashboard;  