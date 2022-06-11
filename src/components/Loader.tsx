import React from 'react'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { TailSpin } from  'react-loader-spinner'
const Loader = () => {
  return (
    <div className="flex items-center justify-center p-10">
      <TailSpin color="#0284c7" height={80} width={80}  />
    </div>
  )
}

export default Loader