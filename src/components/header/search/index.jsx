import { useState } from "react";
import { Button } from "@material-tailwind/react";
import { GoSearch } from "react-icons/go";
import { useSearchEngine, useTheme } from "~/stores/general/hooks";

export default function Search() {
    const getSearchEngine = useSearchEngine();

    var engine;

    if (localStorage.getItem("searchEngine") === null) {
        engine = {
            id: 4,
            name: "google",
            value: "Google",
            url: "https://www.google.com/search?q=",
        };
    } else {
        engine = JSON.parse(getSearchEngine);
    }

    // var faviconURL =
    //     `https://s2.googleusercontent.com/s2/favicons?domain=` +
    //     engine.url +
    //     `&sz=48`;

    const [searchContent, setSearchContent] = useState("");
    const onChange = ({ target }) => {
        setSearchContent(target.value);
    };
    return (
        <div className="relative flex max-w-[600px] w-full items-center justify-center">
            {/* <img
                src={faviconURL}
                alt="search"
                className="absolute -left-4 rounded-full justify-center w-8 h-8 dark:bg-zinc-700"
            /> */}
            <div className="relative flex max-w-[600px] w-full h-full items-center justify-center">
                <label
                    htmlFor="search"
                    className="relative block w-full h-10 rounded-md border border-gray-500 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                >
                    <input
                        type="text"
                        id="search"
                        className="w-full h-full pl-4 peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                        placeholder={engine.value + " İle Ara"}
                        onChange={onChange}
                    />

                    <span className="pointer-events-none absolute start-2.5 top-0 peer-focus:bg-white/75 -translate-y-1/2 p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                        {engine.value + " İle Ara"}
                    </span>
                </label>
                <Button
                    size="sm"
                    color={searchContent ? "gray" : "blue-gray"}
                    className="!absolute right-1 top-1 rounded justify-center dark:bg-zinc-700"
                    onClick={() => {
                        (window.location.href = `${engine.url}${searchContent}`),
                            "_blank";
                    }}
                >
                    <i className="text-base font-bold">
                        <GoSearch />
                    </i>
                </Button>
            </div>
        </div>
    );
}
