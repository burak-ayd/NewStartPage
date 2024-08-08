import Weather from "./weather";
import Search from "./search";
import RightPanel from "./rightPanel";
import classNames from "classnames";

export default function Header() {
    return (
        <header
            className={classNames(
                "flex items-center justify-between px-4 bg-blue-gray-100/35 h-14 shrink-0 transition-colors w-full dark:text-white backdrop-blur z-10"
            )}
        >
            <Weather />
            <Search />
            <RightPanel />
        </header>
    );
}
