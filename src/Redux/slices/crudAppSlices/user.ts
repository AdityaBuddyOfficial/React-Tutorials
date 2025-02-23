import { createSlice } from "@reduxjs/toolkit";
import userList from "../../../crudApp/Data";

const userSlice = createSlice({
    name: "users",
    initialState: userList,
    reducers: {
        addUser: (state, action) => {
            
            state.push(action.payload)
        },
        updateUser:(state,action)=>{
           const {id,name,email}=action.payload;
           const updatedUser=state.find((user)=>user.id===id)
           if(updatedUser)
           {
            updatedUser.name=name;
            updatedUser.email=email;
           }
        },
        deleteUser:(state,action)=>{
            const {id}=action.payload;
            const userToDelete=state.find((e)=>e.id===id)
            if(userToDelete)
            {
                return state.filter((user)=>user.id !==id)
            }

        }
  
    }
})

export const { addUser,updateUser,deleteUser } = userSlice.actions;
export default userSlice.reducer;