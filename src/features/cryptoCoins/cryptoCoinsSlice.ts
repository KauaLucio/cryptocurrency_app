import { RootState } from './../../app/store';
import { instance } from './../../services/axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const fetchCrytocurrencies = createAsyncThunk('coins/fetchCrytocurrencies', async ({url}: any) => {
  try {
    const {data} = await instance.get(url, {
      params: {
        referenceCurrencyUuid: 'yhjMzLPhuIDl',
        timePeriod: '24h',
        'tiers[0]': '1',
        orderBy: 'marketCap',
        orderDirection: 'desc',
        limit: 50,
        offset: 0
      }
    })
    return data
  } catch (error) {
    console.log(error)
  }
})

export const fetchMoreCrytocurrencies = createAsyncThunk('coins/fetchMoreCrytocurrencies', async ({url, offset}: any) => {
  try {
    const {data} = await instance.get(url, {
      params: {
        referenceCurrencyUuid: 'yhjMzLPhuIDl',
        timePeriod: '24h',
        'tiers[0]': '1',
        orderBy: 'marketCap',
        orderDirection: 'desc',
        limit: 50,
        offset
      }
    })
    return data
  } catch (error) {
    console.log(error)
  }
})

interface CoinsState {
  entities: any[]
  status: 'idle' | 'pending' | 'succeeded' | 'failed'
}

const initialState = {
  entities: [],
  status: 'idle',
} as CoinsState

export const cryptoCoinsSlice = createSlice({
  name: 'cryptoCoins',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCrytocurrencies.pending, (state, action) => {
      state.status = 'pending'
    }),
    builder.addCase(fetchCrytocurrencies.fulfilled, (state, action) => {
      state.status = 'succeeded'
      const { data: {coins} } = action.payload
      state.entities = coins
    }),
    builder.addCase(fetchMoreCrytocurrencies.fulfilled, (state, action) => {
      state.status = 'succeeded'
      const { data: {coins} } = action.payload
      state.entities = state.entities.concat(coins)
    })
  }
})

export const getCoins = (state: RootState) => state.crytoCoins.entities
export const getSingleCoin = (state: RootState, coinId: string | undefined) => {
  const coin = state.crytoCoins.entities.find(coin => coin.uuid === coinId)
  console.log(coin)
  return coin
}

export default cryptoCoinsSlice.reducer