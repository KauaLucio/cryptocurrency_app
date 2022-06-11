import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useAppSelector } from '../app/hooks'
import CoinConversion from '../components/CoinConversion'
import { getCoins } from '../features/cryptoCoins/cryptoCoinsSlice'

const ConversionCoin = () => {
  const allCoins = useAppSelector(getCoins)
  const [selectedCoin, setSelectedCoin] = useState<any>(null)
  const [quotations, setQuotations] = useState<any>([])
  useEffect(() => {
    axios.get('https://economia.awesomeapi.com.br/last/USD-BRL,USD-EUR,USD-GBP,USD-CLP,USD-COP,USD-CUP,USD-MXN,USD-AUD,USD-CAD').then((data) => {
      let result = []
      for(let i = 0; i < Object.keys(data.data).length; i++) {
        result.push(data.data[Object.keys(data.data)[i]]) 
      }
      setQuotations(result)
    })
  }, [selectedCoin])
  
  return (
    <div className="px-3 md:px-7 py-10">
      <h2 className="text-xl md:text-3xl font-bold text-slate-700">Conversão de Cripto Moedas</h2>
      <div className="w-4/5 mx-auto my-20">
        <select name="" className="w-full p-2 outline-none" onChange={e => setSelectedCoin(e.target.value)}>
          <option value="" selected disabled>Escolha uma moeda:</option>
          {
            allCoins.map(coin => (
              <option key={coin.uuid} value={coin.price}>{coin.name}</option>
            ))   
          }
        </select>

        <div className="grid grid-cols-3 gap-5 my-10">
          {
            quotations?.map((quotation: any) => (
              <CoinConversion key={quotation.name} quotation={quotation} priceCoinUSD={selectedCoin}/>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default ConversionCoin