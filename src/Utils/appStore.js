import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice"
import userConnectionSlice from "./connectionsSlice"
import requestSlice from "./requestSlice"
import feedSlice from "./feedSlice"

const appStore = configureStore({
    reducer : {
        user : userSlice,
        feed : feedSlice,
        connections : userConnectionSlice,
        requests : requestSlice

    }

})

export default appStore