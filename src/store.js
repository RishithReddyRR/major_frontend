import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducers/userReducer";
import { publicationReducer } from "./reducers/publicationReducer";
export const store=configureStore({
    reducer:{
        user:userReducer,
        userPublications:publicationReducer
    }
})