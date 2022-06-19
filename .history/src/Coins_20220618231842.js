import React from 'react'
import CoinItem from './CoinItem'
import "./Coins.css"
const Coins =(props) => {
  return (
    <div className='container'>
        <div className="heading">
            <p>#</p>
            <p>Price</p>
            <p>Coin</p>
            <p>24th</p>
            <p>Volume</p>
            <p>Mkt Caps</p>
        </div>
        {props.coins.map(coins => {
            return (
                <CoinItem coins={coins} />
            )
        })}
    </div>
  )
}

export default Coins