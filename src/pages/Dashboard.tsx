import NavBar from "@/components/side-bar";

const Dashboard = ()=>{
    return <div className="flex h-lvh overflow-hidden bg-white">
        <NavBar page="dashboard"/>
        <div className="flex-1 h-full overflow-y-auto">Right</div>
    </div>
}

export default Dashboard;  