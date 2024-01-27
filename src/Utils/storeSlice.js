import { createSlice } from "@reduxjs/toolkit";


let initialState={

    items:[
       {
        name:"Akshat",
        class:"cse"
       }

    ]
    
    
}

let cartSlice=createSlice({

   name:"addItem",
   initialState,
   reducers:{

    addItem:(state,action)=>{
         state.items.push(action.payload)
        },
        removeItem:(state,action)=>{
            state.items=state.items.filter((item)=>item.id!==action.payload)
        },
        clearItem:(state)=>{
            state.items=state.items.length=0;
        }
   

   }
   
}
)

export const {addItem,removeItem,clearItem}=cartSlice.actions
export default cartSlice.reducer;