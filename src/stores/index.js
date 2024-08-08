import { configureStore } from "@reduxjs/toolkit";

// reducers
import general from "./general";
import weather from "./weather";
import modal from "./modal";

const store = configureStore({
    reducer: {
        general,
        weather,
        modal,
    },
});

export default store;
