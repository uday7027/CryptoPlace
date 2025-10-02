import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CoinContext } from '../../context/CoinContext'
import LineChart from "../../components/linechart/LineChart";
import "./Coin.css";

const Coin = () => {
  const { coinId } = useParams();
  const [historicalData, setHistoricalData] = useState();
  const [coinData, setCoinData] = useState();

  const {currency} = useContext(CoinContext);

  
    const fetchCoin = async () => {
      try {
        const res = await fetch(
          `https://api.coingecko.com/api/v3/coins/${coinId}?localization=false`
        );
        const data = await res.json();
        console.log(data);
        setCoinData(data);
      } catch (error) {
        console.error("Error fetching coin data:", error);
      }
    }

    const fetchHistoricalData = async () => {
    try {
      const res = await fetch(
        `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency.name}&days=10&interval=daily`

      );
      const data = await res.json();
      setHistoricalData(data);
    } catch (error) {
      console.error("Error fetching historical data:", error);
    }
  };

    useEffect(()=>{
      fetchCoin();
      fetchHistoricalData();
    },[currency]);
 
  if(coinData && historicalData){
  return (
    <div className="coin" >
      <div className="coin-name">
        <img src={coinData.image.large} alt="" />
        <p><b>{coinData.name} ({coinData.symbol.toUpperCase()})</b></p>
      </div>
      <div className="coin-chart">
        <LineChart historicalData = {historicalData} coinData = {coinData}/>
      </div>
      <div className="coin-info">
        <ul>
          <li>Crypto Market Rank:</li>
          <li>{coinData.market_cap_rank}</li>
        </ul>
        <ul>
          <li>Current Price:</li>
          <li>{currency.symbol}{coinData.market_data.current_price [currency.name].toLocaleString()}</li>
        </ul>
        <ul>
          <li>Market Cap:</li>
          <li>{currency.symbol}{coinData.market_data.market_cap [currency.name].toLocaleString()}</li>
        </ul>
        <ul>
          <li>24H High:</li>
          <li>{currency.symbol}{coinData.market_data.high_24h [currency.name].toLocaleString()}</li>
        </ul>
        <ul>
          <li>24H Low:</li>
          <li>{currency.symbol}{coinData.market_data.low_24h [currency.name].toLocaleString()}</li>
        </ul>
      </div>
    </div>
  )
  }else{
  return(
    <div className="spinner">
      <div className="spin">

      </div>
    </div>
  )
}
}

export default Coin;
