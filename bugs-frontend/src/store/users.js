import { createSlice } from "@reduxjs/toolkit";

let userId = 0;
const slice = createSlice({
  name: "users",
  initialState: [],
  reducers: {
    userAdded: (users, actions) => {
      users.push({
        id: ++userId,
        name: actions.payload.name,
        resolved: false,
      });
    },
  },
});
export const { userAdded} = slice.actions;
export default slice.reducer;
