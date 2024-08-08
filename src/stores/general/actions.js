import store from "..";
import {
    _setTheme,
    _setLanguage,
    _setSidebarVisibility,
    _setSettingPage,
    _setSearchEngine,
    _setBackgroundImage,
} from ".";

export const setTheme = (theme) => store.dispatch(_setTheme(theme));
export const setLanguage = (language) => store.dispatch(_setLanguage(language));
export const setSettingPage = (page) => store.dispatch(_setSettingPage(page));
export const setSidebarVisibility = (visibility) =>
    store.dispatch(_setSidebarVisibility(visibility));
export const setSearchEngine = (engine) =>
    store.dispatch(_setSearchEngine(engine));
export const setBackgroundImage = (image) =>
    store.dispatch(_setBackgroundImage(image));
