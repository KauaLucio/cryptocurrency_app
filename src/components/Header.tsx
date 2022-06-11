import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="px-7 py-4 shadow-md">
      <div className="flex flex-items justify-between">
        <h1 className="text-2xl font-bold text-slate-700">
          <Link to="/">CryptoApp</Link>
        </h1>
        <nav>
          <Link to="/conversion" className="text-sky-500 text-lg">
              Conversões
          </Link>
        </nav>
      </div>
    </div>
  )
}

export default Header