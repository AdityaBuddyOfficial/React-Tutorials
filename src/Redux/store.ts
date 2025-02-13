import { configureStore } from "@reduxjs/toolkit";
import  counterSlice  from "./slices/counterSlice";


import userSlice from "./slices/crudAppSlices/user"

export const store=configureStore({
    reducer:{
        counter:counterSlice,
        users:userSlice
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch