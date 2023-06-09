import { configureStore } from "@reduxjs/toolkit";
import TodoSlice from "./Slices/todoSlice";

export const store = configureStore({
  reducer: {
    todo: TodoSlice
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootStateT = ReturnType<typeof store.getState>

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch