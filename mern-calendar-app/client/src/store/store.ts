

import { configureStore } from '@reduxjs/toolkit'
import { authSlice, uiSlice } from './slices'

export const store = configureStore({
  reducer: {
    showMenu: uiSlice.reducer,
    auth: authSlice.reducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch