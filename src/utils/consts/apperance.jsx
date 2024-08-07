import { BsMoonStarsFill } from "react-icons/bs";
import { FiSun } from "react-icons/fi";
import { BsDisplay } from "react-icons/bs";

export const apperance = [
    {
        key: "default",
        value: "Sistem",
    },
    {
        key: "light",
        value: "Açık",
    },
    {
        key: "dark",
        value: "Koyu",
    },
];

export const getApperanceName = (key) =>
    apperance.find((a) => a.key === key)?.value;
export const getApperanceIcon = (key, colorScheme = false) => {
    switch (key) {
        case "default":
            if (!colorScheme) {
                return <BsDisplay size={16} />;
            } else {
                if (colorScheme === "light") {
                    return <FiSun size={16} />;
                } else {
                    return <BsMoonStarsFill size={16} />;
                }
            }
        case "light":
            return <FiSun size={16} />;
        case "dark":
            return <BsMoonStarsFill size={16} />;
    }
};

export const languages = [
    {
        key: "tr",
        value: "Türkçe",
    },
    {
        key: "az",
        value: "Azərbaycan dili",
    },
    {
        key: "en",
        value: "English",
    },
];

export const getLanguageName = (langCode) =>
    languages.find((l) => l.key === langCode)?.value;
