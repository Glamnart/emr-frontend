import NavBar from "@/components/side-bar";
import SearchBar from "@/components/search-bar";
import Status from "@/components/dasboard-components/status";

const Dashboard = ()=>{
    return <div className="flex h-lvh overflow-hidden bg-white">
        <NavBar page="dashboard"/>
        <div className="flex-1 h-full overflow-y-auto bg-gray-100 ">
            <SearchBar/>
            <div className="flex m-4">
                <div className="flex flex-col">
                    <Status/>
                </div>
                
            </div>
        </div>
    </div>
}

export default Dashboard;  