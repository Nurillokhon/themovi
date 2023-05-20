import { configureStore } from "@reduxjs/toolkit";
import { setCard } from "./Reduser/Card";


const store = configureStore({
    reducer: {
        card: setCard
    }
})
export  {store}