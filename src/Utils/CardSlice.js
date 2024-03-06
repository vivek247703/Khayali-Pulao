import { createSlice } from "@reduxjs/toolkit";

const CardSlice = createSlice(
    {
        name : 'cart',
        initialState : {
            item: []
        },
        reducers:{
            additem : (state,action)=>{
                state.item.push(action.payload);
            },
            removeitem : (state,action)=>{
                state.item.pop(action.payload);
            },
            clearcart : (state)=>{
                state.item.length=0;
            },
        },
    },
);

export const {additem,removeitem,clearcart,setLogin,removeLogin} = CardSlice.actions;
export default CardSlice.reducer;