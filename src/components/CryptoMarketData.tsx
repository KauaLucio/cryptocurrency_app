import React, { useEffect, useState } from 'react'
import millify from 'millify'

export type GlobalStats = {
  totalCoins: number,
  totalMarkets: number,
  totalExchanges: number,
  totalMarketCap: string,
  total24hVolume: string
}

type CryptoMarketDataProps = {
  stats: GlobalStats | null
}


const CryptoMarketData = ({ stats }: CryptoMarketDataProps) => {
  

  return (
    <div className="px-7 py-20 min-h-fit text-white bg-gradient-to-r from-[#4776e6] to-[#8e54e9] mb-5 grid gap-5 grid-cols-3 lg:grid-cols-5 items-center">
      <div className="text-center">
        <h2 className="text-md uppercase font-medium">Moedas Totais</h2>
        <p className="text-2xl">{stats?.totalCoins}</p>
      </div>

      <div className="text-center">
        <h2 className="text-md uppercase font-medium">Exchanges Totais</h2>
        <p className="text-2xl">{stats?.totalExchanges}</p>
      </div>

      <div className="text-center">
        <h2 className="text-md uppercase font-medium">Mercados Totais</h2>
        <p className="text-2xl">{stats?.totalMarkets}</p>
      </div>

      <div className="text-center">
        <h2 className="text-md uppercase font-medium">Capitalização de Mercado</h2>
        <p className="text-2xl">${millify(Number(stats?.totalMarketCap) || 0, {
          precision: 3
        })}</p>
      </div>

      <div className="text-center">
        <h2 className="text-md uppercase font-medium">Volume 24h</h2>
        <p className="text-2xl">${millify(Number(stats?.total24hVolume)  || 0, {
          precision: 3
        })}</p>
      </div>
    </div>
  )
}

export default CryptoMarketData