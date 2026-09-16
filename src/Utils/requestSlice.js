import { createSlice } from "@reduxjs/toolkit";

const requestSlice = createSlice({
    name : "requests",
    initialState : null,
    reducers :{
        addRequests : (state,action)=>{
            return action.payload.connectionRequests
        },
        removeUserRequest: (state, action) => {
            return state.filter((req) => req._id !== action.payload);
        },

        removeRequests : ()=>{
            return null
        }
    }

})

export const {addRequests,removeUserRequest,removeRequests} = requestSlice.actions

export default requestSlice.reducer