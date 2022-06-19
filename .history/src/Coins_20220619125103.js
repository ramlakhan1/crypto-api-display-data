import React from 'react'
import CoinItem from './CoinItem'
import "./Coins.css"
const Coins =(props) => {
  return (
    <div className="main">
      <div className="navbar">
      <div className="nav">
        <div className="navFirst">
          <div>Coins</div>
          <div>Exchanges</div>
          <div>Charts</div>
          <div>Swap</div>
        </div>
        <div className="navSecond">
          <img src="https://coincap.io/static/logos/black.svg" />
        </div>
        <div className="navThird">
          <div>🔍</div>
          <div>⚙</div>
          <div><button >Connect Wallet</button></div>
        </div>
      </div>
      </div>
      <div className="screen">
        <div className="screenMain">
        <div>
          <p>MARKET CAP</p>
          <p>$ 1.65T</p>
        </div>
        <div>
          <p>EXCHANGE VOL</p>
          <p>$ 13.29B</p>
        </div>
        <div>
          <p>ASSETS</p>
          <p>1,737</p>
        </div>
        <div>
          <p>EXCHANGE</p>
          <p>90</p>
        </div>
        <div>
          <p>MARKET</p>
          <p>10,085</p>
        </div>
        <div>
          <p>BTC DOM INDEX</p>
          <p>45.0%</p>
        </div>
        </div>
      </div>
      <div className='container'>
        <div className="heading bor">
          <div className="rowLeft">
            <div>#</div>
            <div>Name</div>
          </div>
          <div className="mid"></div>
          <div className="heading rowRight">
            <div>Price</div>
            <div>24th</div>
            <div>Volume</div>
            <div>Mkt Caps</div>
          </div>
        </div>
          {props.coins.map(coins => {
              return (
                  <CoinItem coins={coins} />
              )
          })}
      </div>
    </div>
    
  )
}

export default Coins