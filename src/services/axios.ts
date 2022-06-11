import axios from 'axios'

const apiKey:string = (import.meta.env.VITE_RAPID_API_KEY as string)
const apiHost:string = (import.meta.env.VITE_RAPID_API_HOST as string)

export const instance = axios.create({
  baseURL: 'https://coinranking1.p.rapidapi.com',
  headers:{
    'X-RapidAPI-Host': apiHost,
    'X-RapidAPI-Key': apiKey
  }
})
