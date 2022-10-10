import { createSlice } from "@reduxjs/toolkit";
import data from "../Fakedata";

export const userSlice = createSlice({
    name: "user",
    initialState: { value: data },
    reducers: {
        addUser: (state, action) => {
            state.value.push(action.payload)
        },
        deleteUser: (state, action) => {
            state.value = state.value.filter(user => user.id !== action.payload.id)
        },
        updateUsername: (state, action) => {
            console.log(action.payload)
            state.value.map(user => {
                if (user.id === action.payload.id) {
                    user.username = action.payload.username
                }
            })
        }
    }
})
export const { addUser, deleteUser, updateUsername } = userSlice.actions
export default userSlice.reducer