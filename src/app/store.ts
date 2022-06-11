import { configureStore } from '@reduxjs/toolkit'
import CryptoCoinsReducer from '../features/cryptoCoins/cryptoCoinsSlice'
import GlobalStatsCoinsReducer from '../features/globalStatsCoins/globalStatsCoinsSlice'

export const store = configureStore({
  reducer: {
    crytoCoins: CryptoCoinsReducer,
    globalStatsCoins: GlobalStatsCoinsReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch