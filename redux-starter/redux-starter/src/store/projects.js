import { createSlice } from "@reduxjs/toolkit";

let projectId = 0;

const slice = createSlice({
  name: "projects",
  initialState: [],
  reducers: {
    projectAdded: (projects, actions) => {
      projects.push({
        id: ++projectId,
        name: actions.payload.name,
        resolved: false,
      });
    },
  },
});
export const { projectAdded} = slice.actions;
export default slice.reducer;
