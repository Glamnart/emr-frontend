import {
  Search,
  Sun,
  Bell
} from "lucide-react";

export default function AppointmentTabs() {
  return (
    <header className="flex items-center justify-between border-b border-slate-700 px-10 py-5">

      <h1 className="text-3xl font-bold">
        Manage Appointments
      </h1>

      <div className="flex items-center gap-4">

        <div className="flex w-[420px] items-center gap-3 rounded-full bg-slate-800 px-5 py-3">
          <Search size={22} className="text-slate-400" />

          <input
            placeholder="Search schedule, name, reason..."
            className="w-full bg-transparent outline-none placeholder:text-slate-500"
          />
        </div>

        <button className="rounded-full bg-slate-800 p-4">
          <Sun size={22} />
        </button>

        <button className="rounded-full bg-slate-800 p-4">
          <Bell size={22} />
        </button>

        <div className="border-l border-slate-700 pl-5">
          <p className="font-semibold">
            Friday, Jan 24
          </p>

          <p className="text-right text-sm text-slate-400">
            09:42 AM
          </p>
        </div>

      </div>

    </header>
  );
}