import { RootState } from './../../app/store';
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { instance } from './../../services/axios';

export const fetchGlobalStatsCoins = createAsyncThunk('globalStats/fetchGlobalStatsCoins', async () => {
  try {
    const {data} = await instance.get('/stats', {
      params: {
        referenceCurrencyUuid: 'yhjMzLPhuIDl'
      }
    })
    return data
  } catch (error) {
    console.log(error)
  }
})

interface GlobalStatsState {
  value: any
  status: 'idle' | 'pending' | 'succeeded' | 'failed'
}

const initialState = {
  value: {},
  status: 'idle'
} as GlobalStatsState

const globalStatsCoinsSlice = createSlice({
  name: "globalStats",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGlobalStatsCoins.pending, (state, action) => {
      state.status = 'pending'
    }),
    builder.addCase(fetchGlobalStatsCoins.fulfilled, (state, action) => {
      state.status = 'succeeded'
      state.value = action.payload.data
    })
  }
})

export const getGlobalStats = (state: RootState) => state.globalStatsCoins.value

export default globalStatsCoinsSlice.reducer