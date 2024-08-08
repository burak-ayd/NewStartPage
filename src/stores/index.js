import { configureStore } from "@reduxjs/toolkit";

// reducers
import general from "./general";
import weather from "./weather";

const store = configureStore({
    reducer: {
        general,
        weather,
    },
});

export default store;
