import { configureStore } from '@reduxjs/toolkit'
import { postsApi } from './api/posts.api'
import postState from './slices/postState'

export const store = configureStore({
  reducer: {
    postState: postState,
    [postsApi.reducerPath]: postsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postsApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export const dispatchGlobal = store.dispatch
