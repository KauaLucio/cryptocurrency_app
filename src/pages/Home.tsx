import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import CoinCard, { Coin } from '../components/CoinCard'
import CryptoMarketData from '../components/CryptoMarketData'
import Loader from '../components/Loader'
import { fetchCrytocurrencies, fetchMoreCrytocurrencies, getCoins } from '../features/cryptoCoins/cryptoCoinsSlice'
import { fetchGlobalStatsCoins, getGlobalStats } from '../features/globalStatsCoins/globalStatsCoinsSlice'


const Home = () => {
  const dispatch = useAppDispatch()
  const coins = useAppSelector(getCoins)
  const globalStats = useAppSelector(getGlobalStats)
  const coinsStatus = useAppSelector(state => state.crytoCoins.status)
  const globalStatsStatus = useAppSelector(state => state.globalStatsCoins.status)
  const [offset, setOffset] = useState(0)
  useEffect(() => {
    if(coinsStatus === 'idle' && globalStatsStatus === 'idle') {
        dispatch(fetchCrytocurrencies({ url: '/coins'}))
        dispatch(fetchGlobalStatsCoins())
      }
  },[coinsStatus, globalStatsStatus])

  useEffect(() => {
    setOffset(coins.length)
  }, [coins])

  if(coinsStatus === 'pending' || globalStatsStatus === 'pending') return <Loader />

  const handleGetMoreCoins = async () => {
    try {
      dispatch(fetchMoreCrytocurrencies({ url: '/coins', offset}))
      setOffset(prevState => prevState + coins.length)

    } catch (error) {
      console.log(error)
    }
  }
  return (
    
    <div>
      <CryptoMarketData stats={globalStats} />
      <div className="px-7 py-3">
        <h1 className=" text-3xl font-bold text-slate-700 mb-7">Moedas</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {
            coins.map((coin: Coin) => (
              <CoinCard key={coin.uuid} coin={coin} /> 
            ))
          }
        </div>
      </div>
      <div className="flex items-center justify-center py-10">
        <button 
          type="button" 
          onClick={() => handleGetMoreCoins()}
          className="px-5 py-2 bg-sky-500 text-white font-medium rounded-sm "
          >
          Mais moedas
        </button>
      </div>
    </div>
  )
}

export default Home