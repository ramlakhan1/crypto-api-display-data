import React from "react";
import "./CoinItem.css";

const CoinItem = (props) => {
  return (
    <div className="heading bor">
      <div className="rowLeft heading ">
        <div>{props.coins.market_cap_rank}</div>
        <div className="img-symbol heading">
          <img className="Image" src={props.coins.image} alt="coin-logo" />
          <p className="Imagename" >{props.coins.symbol} </p>
        </div>
      </div>
      <div className="mid"></div>
      <div className="rowRight heading">
          <div>{props.coins.current_price}</div>
          <div>{props.coins.price_change_percentage_24h}</div>
          <div>{props.coins.total_volume}</div>
          <div>{props.coins.market_cap}</div>
      </div>
    </div>
  );
};

export default CoinItem;
