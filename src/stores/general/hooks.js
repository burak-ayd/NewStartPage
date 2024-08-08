import { useSelector } from "react-redux";

export const useTheme = () => useSelector((state) => state.general.theme);
export const useLanguage = () => useSelector((state) => state.general.language);
export const useSettingPage = () =>
    useSelector((state) => state.general.settingPage);
export const useSidebarVisibility = () =>
    useSelector((state) => state.general.sidebarVisibility);
export const useSearchEngine = () =>
    useSelector((state) => state.general.searchEngine);
export const useBackgroundImage = () =>
    useSelector((state) => state.general.background_image);
export const useBookmarks = () =>
    useSelector((state) => state.general.bookmarks);
