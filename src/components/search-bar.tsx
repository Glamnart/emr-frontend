import React,{ useState, useEffect} from "react";
import type {Dispatch, SetStateAction} from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faMoon, faBell, faEnvelope, faSun } from "@fortawesome/free-regular-svg-icons";

const notification: boolean = true;
const inbox: boolean = false;

  interface ThemeProp{
  theme: "night"|"day";
  setTheme: Dispatch<SetStateAction<"day"|"night">>
}

const SearchBar: React.FC <ThemeProp> = ({theme,setTheme}) => {
  const [time, setTime] = useState<Date>(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timerId);
  }, []);

  const dateString = time.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  const timeString = time.toLocaleTimeString(undefined, {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  return (
    <div className="flex items-center gap-2.5 h-15 pl-5 text-gray-500 dark:text-gray-400 border-b ">
      <button className="border rounded-full w-7 h-7 bg-white dark:bg-gray-700 text-xs hover:text-black cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 not-only: hover:w-8 hover:h-8">
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>
      <form className="border border-gray-300 rounded-full p-1.5 pl-2 flex items-center gap-2 text-xs w-120 bg-white dark:bg-gray-700 dark:border-0">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <input
          className="focus:outline-none"
          type="text"
          name="search"
          id="search"
          placeholder="Search patients, records..."
        />
      </form>
      <button onClick={()=>theme === "day" ? setTheme("night") : setTheme("day")} className="ml-auto border rounded-full w-8 h-8 bg-white dark:bg-gray-700 hover:text-sky-500 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 hover:w-9 hover:h-9 dark:hover:text-black">
        <FontAwesomeIcon icon={theme === "day" ? faMoon : faSun} />
      </button>
      <button className="border relative rounded-full w-8 h-8 bg-white hover:text-black cursor-pointer hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 hover:w-9 hover:h-9">
        <FontAwesomeIcon icon={faBell} />
        <div className={`${notification && "bg-red-600 rounded-full h-2 w-2 absolute top-1.5 right-2"}`}></div>
      </button>
      <button className="border relative rounded-full w-8 h-8 bg-white hover:text-black cursor-pointer hover:bg-gray-100 dark:bg-gray-700 hover:w-9 hover:h-9 dark:hover:bg-gray-600 ">
        <FontAwesomeIcon icon={faEnvelope} />
        <div className={`${inbox && "bg-red-600 rounded-full h-2 w-2 absolute top-1.5 right-1"}`}></div>
      </button>
      <div className="border-l border-gray-300 pl-3 flex flex-col justify-center text-right text-[13px] pr-4">
        <span className="font-bold text-gray-700 -mb-2 dark:text-white">{dateString}</span>
        <span className="text-gray-400 font-mono">{timeString}</span>
      </div>
    </div>
  );
};

export default SearchBar;
