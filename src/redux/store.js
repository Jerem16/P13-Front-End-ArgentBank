import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";

let devToolsValue = true;
if (/Firefox/.test(navigator.userAgent)) {
    devToolsValue = process.env.NODE_ENV !== "production";
}

const store = configureStore({
    reducer: rootReducer,
    devTools: devToolsValue,
});

export default store;
