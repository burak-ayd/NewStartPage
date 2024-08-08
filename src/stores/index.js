import { configureStore } from "@reduxjs/toolkit";

// reducers
import general from "./general";

const store = configureStore({
    reducer: {
        general,
    },
});

export default store;
