import millify from 'millify'
import React from 'react'
import { Link } from 'react-router-dom'

export type Coin = {
  uuid: string,
  symbol: string,
  name: string,
  description: string,
  color: string,
  iconUrl: string,
  links: any[],
  numberOfMarkets: number,
  numberOfExchanges: number,
  "24hVolume": string,
  marketCap: string
  price: string,
  btcPrice: string,
  change: string,
  rank: number,
  sparkline: any[]
}

type CoinCardDataProps = {
  coin: Coin
}

const CoinCard = ({coin}: CoinCardDataProps) => {
  return (
    <div className="p-5 min-h-max shadow-md bg-white rounded-sm">
      <div className="flex items-center gap-3">
        <img src={coin.iconUrl} alt={coin.name} className="w-10 h-10 object-contain" />
        <div className="">
          <h3 className="text-md font-bold text-slate-700">{coin.name}</h3>
          <p className={`text-slate-800`}>{coin.symbol}</p>
        </div>
      </div>
      <div className="my-3">
        <p><span className="font-medium text-slate-900">Preço:</span> ${millify(Number(coin.price), {
          precision: 3
        })}</p>
        <p><span className="font-medium text-slate-900">Rank:</span> {coin.rank}º</p>
        <p><span className="font-medium text-slate-900">Change:</span> {coin.change}%</p>
      </div>
      <div className="flex flex-col ">
        <Link to={`/coin/${coin.uuid}`} className={`block text-center mb-2 rounded-sm p-2 bg-pink-500 font-medium text-white`}>Ver mais</Link>
      </div>
    </div>
  )
}

export default CoinCard