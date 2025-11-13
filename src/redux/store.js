import { configureStore } from "@reduxjs/toolkit";
import { accountSlide } from "./accountSlice";

export const store = configureStore({
    reducer: {
        account: accountSlide.reducer
    },
    devTools: true
})