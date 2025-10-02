import React, { useContext, useEffect, useState } from 'react'
import './Home.css'
import { CoinContext } from '../../context/CoinContext'
import {Link} from 'react-router-dom'
import Features from '../Features/Features'

const Home = () => {

    const {coins , currency} = useContext(CoinContext);
    const [display , setDisplay] = useState([]);
    const [input , setInput] = useState('');

    const inputHandler = (e) =>{
        setInput(e.target.value);
        if(e.target.value === ""){
            setDisplay(coins);
        }
    }

    const searchHandler = async (e) =>{
        e.preventDefault();
        const allcoins = await coins.filter((item) => {
            return item.name.toLowerCase().includes(input.toLocaleLowerCase());
        });
        setDisplay(allcoins);

    }

    const handelClear = () => {
        setInput("");
        setDisplay(coins);
    }

    useEffect(()=>{
        setDisplay(coins);
    },[coins])

  return (
    <div className='home'>
        <div className="hero">
            <h1>Largest <br />Crypto Marketplace</h1>
            <p>Welcome to worlds largest cryptocurrency marketplace. Sign up to explore more about cryptos</p>
            <form onSubmit = {searchHandler} action="" className='form'>

                <input value={input} onChange={inputHandler} list = 'coinslist' type="text" placeholder='Search cryptos..' />

                <datalist id = 'coinslist'>{coins.map((item , index)=>(<option key = {index} value = {item.name}/>))}</datalist>

                <button className= "submit" type="submit">search</button>
                <button className='clear' onClick={handelClear}> clear</button>
            </form>
        </div>
        <div className="crypto-table">
            <div className="table-layout">
                <p>#</p>
                <p>Coins</p>
                <p>Price</p>
                <p style={{textAlign:'center'}}>24H change</p>
                <p style={{textAlign:'right'}}>Market cap</p>
            </div>
            {
                display.slice(0,10).map((item , index)=>(
                    <Link to ={`/coin/${item.id}`}className="table-layout" key={index}>
                        <p>{item.market_cap_rank}</p>
                        <div className="div">
                            <img className = "img"src={item.image} alt="" />
                            <p>{item.name + '-' + item.symbol}</p>
                        </div>
                        <p>{currency.symbol} {item.current_price.toLocaleString()}</p>
                        <p className={item.price_change_24h>0?"green":"red"}>{Math.floor(item.price_change_24h*100)/100}</p>
                        <p className='marketcap'>{currency.symbol} {item.market_cap.toLocaleString()}</p>
                    </Link>
                ))
            }
        </div>
        <Features></Features>
      
    </div>
  )
}

export default Home
