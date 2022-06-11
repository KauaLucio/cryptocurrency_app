import React from 'react'
import millify from 'millify'
const CoinConversion = ({quotation, priceCoinUSD}: any) => {
  let coinInBRL = Number(priceCoinUSD) * Number(quotation.bid)
  return (
    <div className="rounded-lg shadow-md bg-gradient-to-r from-[#4776e6] to-[#8e54e9] p-3 text-white">
      <h3 className="font-bold text-lg mb-2">{quotation.name}</h3>
      <p className="text-2xl">{quotation.code} <span className="font-medium ">${millify(Number(priceCoinUSD), {
        precision: 3
      })}</span></p>
      <p className="text-2xl">{quotation.codein} <span className="font-medium ">R${millify(coinInBRL, {
        precision: 3
      })}</span></p>
    </div>
  )
}

export default CoinConversion