import { createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  data: {
    todos: []
  }
}

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data.todos = action.payload
    }
  }
})


// Action creators are generated for each case reducer function
export const { setData } = todoSlice.actions

export default todoSlice.reducer