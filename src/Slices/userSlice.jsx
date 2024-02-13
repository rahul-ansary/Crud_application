import { createSlice } from "@reduxjs/toolkit";

import { userList } from "../Constants/Data";

const userSlice = createSlice({
    name: "users",
    initialState: userList,
    reducers: {
        addUser: (state, action) => {
            state.push(action.payload)
        },
        updateUser: (state, action) => {
            const { id, name, email } = action.payload;
            const userUpdate = state.find(user => user.id == id);
            if (userUpdate) {
                userUpdate.name = name;
                userUpdate.email = email;
            }
        },
        deleteUser: (state, action) => {
    const { id } = action.payload;
    const userUpdate = state.find(user => user.id == id);
    if (userUpdate) {
        return state.filter(f => f.id !== id);
    }

}
    }
})

export const { addUser, updateUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;