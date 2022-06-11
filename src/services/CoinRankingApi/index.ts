import { instance } from '../axios';

export const getCoin = async (urlWithCoinId: string) => {
  try {
    const {data} = await instance.get(urlWithCoinId, {
      params: {
        referenceCurrencyUuid: 'yhjMzLPhuIDl',
        timePeriod: '24h',
      }
    })
    return data
  } catch (error) {
    console.log(error)
  }
}