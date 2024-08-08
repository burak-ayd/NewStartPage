import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    theme: localStorage.getItem("theme") || "default",
    sidebarVisiblity: false,
    language: "tr",
    settingPage: "general",
    searchEngine: localStorage.getItem("searchEngine") || { value: "Google" },
    background_image: localStorage.getItem("background_image") || "",
};

const general = createSlice({
    name: "general",
    initialState,
    reducers: {
        _setTheme(state, action) {
            state.theme = action.payload;
            localStorage.setItem("theme", action.payload);
        },
        _setLanguage(state, action) {
            state.language = action.payload;
            localStorage.setItem("lang", action.payload);
        },
        _setSidebarVisibility(state, action) {
            state.sidebarVisiblity = action.payload;
        },
        _setSettingPage(state, action) {
            state.settingPage = action.payload;
        },
        _setSearchEngine(state, action) {
            state.searchEngine = JSON.stringify(action.payload);
            localStorage.setItem(
                "searchEngine",
                JSON.stringify(action.payload)
            );
        },
        _setBackgroundImage(state, action) {
            state.background_image = action.payload;
            localStorage.setItem("background_image", action.payload);
            localStorage.setItem("theme", "background");
        },
    },
});

export const {
    _setTheme,
    _setLanguage,
    _setSidebarVisibility,
    _setSettingPage,
    _setSearchEngine,
    _setBackgroundImage,
} = general.actions;
export default general.reducer;
