import { createReducer } from "@reduxjs/toolkit";

export const publicationReducer=createReducer({publications:[]},{
    PUBLICATION_REQUEST:(state,action)=>{
        state.loading=true
    },
    PUBLICATION_SUCCESS:(state,action)=>{
        state.loading=false;
        state.publications=action.payload;
    },
    PUBLICATION_FAIL:(state,action)=>{
        state.loading=false;
        state.error=action.payload
    },
    CLEAR_ERRORS:(state,action)=>{
        state.error=null
    }
})