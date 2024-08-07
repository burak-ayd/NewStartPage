import React from "react";
import Weather from "./weather";
import Search from "./search";
import RightPanel from "./rightPanel";

export default function Header() {
    return (
        <div className="flex items-center justify-between px-4 h-12 shrink-0 transition-colors w-full dark:text-white backdrop-blur z-10">
            <Weather />
            <Search />
            <RightPanel />
        </div>
    );
}
