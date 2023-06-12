import { configureStore } from "@reduxjs/toolkit";
import addFavSlices from "./slices/favSlices";

const store = configureStore({
    reducer : {
        addFavSlices,
    }
})


export default store