import React, { useEffect, useState } from 'react'
import parse from 'html-react-parser'
import CoinChart from '../components/CoinChart'
import millify from 'millify'
import { useParams } from 'react-router-dom'
import { getCoin } from '../services/CoinRankingApi'
import Loader from '../components/Loader'


const CoinDetails = () => {
  const {id} = useParams()
  const [coin, setCoin] = useState<any>()
  useEffect(() => {
    if(id) {
      retrieveCoin()
  
      async function retrieveCoin() {
        const {data: { coin }} = await getCoin(`/coin/${id}`)
        setCoin(coin)
      }
    }
  }, [id])

  if(!coin) return <Loader />
  return (
    <div className="px-3 md:px-7 py-10">
      <h2 className="text-xl md:text-3xl font-bold text-slate-700">Detalhes da Moeda: {coin?.name}</h2>
      <div className="w-4/5 mx-auto my-20">
        <div className="flex flex-col md:flex-row gap-10 mb-7">
          <img src={coin?.iconUrl} alt={coin?.name} className="w-36 h-36" />
          <div className="">
            <h3 className="text-3xl font-bold text-slate-700">{coin?.name}</h3>
            <p className="text-lg text-slate-700">Simbolo: {coin?.symbol}</p>
            <a href={coin?.websiteUrl} className="text-sky-500">Site Oficial da Moeda</a>
            <div className="mt-2">
              <h4 className="text-lg text-slate-700">Outros links úteis:</h4>
              <div className="flex md:items-center flex-wrap flex-col md:flex-row gap-3">
                {
                  coin?.links.map((link: any) => (
                    <a href={link.url} className="text-sky-500">{link.name}</a>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
        <div className="text-sm text-slate-600">
         <p>
          {parse(coin?.description)}
         </p>
        </div>
        <div className="mt-7">
          <h2 className="text-3xl font-bold text-slate-700 mb-7">Métricas da moeda</h2>
          <div className="my-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-10">
            <div className="w-44 h-44 mx-auto flex items-center justify-center rounded-full bg-gradient-to-r p-[8px] from-[#085078] to-[#85D8CE]">
              <div className="flex flex-col w-full h-full rounded-full items-center justify-center bg-white">
                <p className="text-lg md:text-2xl font-bold text-slate-700">${millify(Number(coin['24hVolume']), {
                    precision: 3  
                })}</p>
                <p className="text-slate-700 font-medium text-sm">Volume (24h)</p>
              </div>
            </div>

            <div className="w-44 h-44 mx-auto flex items-center justify-center rounded-full bg-gradient-to-r p-[8px] from-[#085078] to-[#85D8CE]">
              <div className="flex flex-col w-full h-full rounded-full items-center justify-center bg-white">
                <p className="text-lg md:text-2xl  font-bold text-slate-700">${millify(Number(coin?.marketCap), {
                    precision: 3  
                })}</p>
                <p className="text-slate-700 font-medium text-sm">MarketCap</p>
              </div>
            </div>

            <div className="w-44 h-44 mx-auto flex items-center justify-center rounded-full bg-gradient-to-r p-[8px] from-[#085078] to-[#85D8CE]">
              <div className="flex flex-col w-full h-full rounded-full items-center justify-center bg-white">
                <p className="text-lg md:text-2xl  font-bold text-slate-700">${millify(Number(coin?.price), {
                    precision: 3  
                })}</p>
                <p className="text-slate-700 font-medium text-sm">Price</p>
              </div>
            </div>

            <div className="w-44 h-44 mx-auto flex items-center justify-center rounded-full bg-gradient-to-r p-[8px] from-[#085078] to-[#85D8CE]">
              <div className="flex flex-col w-full h-full rounded-full items-center justify-center bg-white">
                <p className="text-lg md:text-2xl  font-bold text-slate-700">{coin?.numberOfExchanges}</p>
                <p className="text-slate-700 font-medium text-sm">Exchanges</p>
              </div>
            </div>

            <div className="w-44 h-44 mx-auto flex items-center justify-center rounded-full bg-gradient-to-r p-[8px] from-[#085078] to-[#85D8CE]">
              <div className="flex flex-col w-full h-full rounded-full items-center justify-center bg-white">
                <p className="text-lg md:text-2xl  font-bold text-slate-700">{coin?.numberOfMarkets}</p>
                <p className="text-slate-700 font-medium text-sm">Markets</p>
              </div>
            </div>
            
          </div>
        </div>
        <div className="hidden md:block my-7">
          <h2 className="text-2xl font-bold text-slate-700">Gráfico do Bitcoin</h2>
          <div>
            <CoinChart sparkline={coin?.sparkline} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CoinDetails